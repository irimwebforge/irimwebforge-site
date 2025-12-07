import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_PATH = path.join(process.cwd(), 'src/content/blog');

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

/**
 * Get all article slugs for static generation
 */
export function getArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_PATH)) {
    return [];
  }

  const files = fs.readdirSync(CONTENT_PATH);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
}

/**
 * Get article metadata and content by slug
 */
export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(CONTENT_PATH, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || 'Sans titre',
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    tags: data.tags || [],
    image: data.image,
    content,
  };
}

/**
 * Get all articles with metadata (for listing)
 */
export function getAllArticles(): ArticleMeta[] {
  const slugs = getArticleSlugs();

  const articles = slugs
    .map((slug) => {
      const article = getArticleBySlug(slug);
      if (!article) return null;

      // Return only metadata, not content
      const { content, ...meta } = article;
      return meta;
    })
    .filter((article): article is ArticleMeta => article !== null);

  // Sort by date, most recent first
  return articles.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Estimate reading time
 */
export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de lecture`;
}
