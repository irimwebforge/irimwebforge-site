'use client';

import React from 'react';
import { cn } from '../../lib/utils';
import type { LucideProps } from 'lucide-react';

// Import uniquement des icônes utilisées - optimisation majeure du bundle
import {
  // Navigation & Actions
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Plus,
  Minus,
  Search,

  // Interface utilisateur
  Check,
  X,
  Menu,
  Shield,
  Laptop,
  Smartphone,
  Coffee,
  Key,
  Wrench as Tool,
  Layout,
  Square,

  // Contenu & Média
  Calendar,
  CalendarPlus,
  Image,
  FileText,

  // Développement & Design
  Code,
  Code2,
  PenTool,
  Palette,
  Pen,

  // Business & Education
  GraduationCap,
  Rocket,
  UserPlus,
  CircleUser,

  // État & Notifications
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Construction,
  Clock,
  Info,
  Loader2,

  // Communication
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,

  // Navigation & Position
  Compass,
  MapPin,

  // Visualisation
  Eye,

  // Réseaux sociaux
  Linkedin,

  // Autres
  Headphones,
  Heart,
  Star,
  Sparkles,
  TrendingUp,
  Lightbulb,

  // Processus
  FileCheck,
  Settings,
  Users,
  Target,
  Zap,
  Brain,
  Briefcase,
  BarChart,
  BarChart2,
  Award,
  Gauge,

  // Ajouts spécifiques
  GitBranch,
  User,
  Folder,
  Smile,
  Layers,
  UserCheck,
  HeartPulse,
  Hammer,
  PiggyBank,
  Handshake,
  RefreshCw,
  RotateCcw,
  TestTube,
  Scissors,
  Globe,
  PieChart,
} from 'lucide-react';

// Définition des icônes disponibles avec imports optimisés
const icons: Record<string, React.FC<LucideProps>> = {
  // Navigation & Actions
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Plus,
  Minus,
  Search,

  // Interface utilisateur
  Check,
  X,
  Menu,
  Shield,
  Laptop,
  Smartphone,
  Coffee,
  Key,
  Tool,
  Layout,
  Square,

  // Contenu & Média
  Calendar,
  CalendarPlus,
  Image,
  FileText,

  // Développement & Design
  Code,
  Code2,
  PenTool,
  Palette,
  Pen,

  // Business & Education
  GraduationCap,
  Rocket,
  UserPlus,
  CircleUser,

  // État & Notifications
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Construction,
  Clock,
  Info,
  Loader2,

  // Communication
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,

  // Navigation & Position
  Compass,
  MapPin,

  // Visualisation
  Eye,

  // Réseaux sociaux
  Linkedin,

  // Autres
  Headphones,
  Heart,
  Star,
  Sparkles,
  TrendingUp,
  Lightbulb,

  // Processus
  FileCheck,
  Settings,
  Users,
  Target,
  Zap,
  Brain,
  Briefcase,
  BarChart,
  BarChart2,
  Award,
  Gauge,

  // Ajouts personnalisés
  GitBranch,
  User,
  Folder,
  Smile,
  Layers,
  UserCheck,
  HeartPulse,
  Hammer,
  PiggyBank,
  Handshake,
  RefreshCw,
  RotateCcw,
  TestTube,
  Scissors,
  Globe,
  PieChart,
};

export type IconName = keyof typeof icons;

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  size?: number;
}

export const Icon = ({ name, className, size = 24, ...props }: IconProps) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={cn('inline-block', className)}
      aria-hidden="true"
      {...props}
    />
  );
};
