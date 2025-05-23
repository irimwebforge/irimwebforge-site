'use client';

import React from 'react';
import { cn } from '../../lib/utils';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Définition des icônes disponibles
const icons: Record<string, React.FC<LucideProps>> = {
  // Navigation & Actions
  ArrowLeft: LucideIcons.ArrowLeft,
  ArrowRight: LucideIcons.ArrowRight,
  ChevronDown: LucideIcons.ChevronDown,
  ChevronUp: LucideIcons.ChevronUp,
  ExternalLink: LucideIcons.ExternalLink,
  Plus: LucideIcons.Plus,
  Search: LucideIcons.Search,

  // Interface utilisateur
  Check: LucideIcons.Check,
  X: LucideIcons.X,
  Menu: LucideIcons.Menu,
  Shield: LucideIcons.Shield,
  Laptop: LucideIcons.Laptop,
  Smartphone: LucideIcons.Smartphone,
  Coffee: LucideIcons.Coffee,
  Key: LucideIcons.Key,
  Tool: LucideIcons.Wrench,

  // Contenu & Média
  Calendar: LucideIcons.Calendar,
  CalendarPlus: LucideIcons.CalendarPlus,
  Image: LucideIcons.Image,

  // Développement & Design
  Code: LucideIcons.Code,
  Code2: LucideIcons.Code2,
  PenTool: LucideIcons.PenTool,
  Palette: LucideIcons.Palette,

  // Business & Education
  GraduationCap: LucideIcons.GraduationCap,
  Rocket: LucideIcons.Rocket,
  UserPlus: LucideIcons.UserPlus,
  CircleUser: LucideIcons.CircleUser,

  // État & Notifications
  AlertCircle: LucideIcons.AlertCircle,
  CheckCircle: LucideIcons.CheckCircle,
  Construction: LucideIcons.Construction,
  Clock: LucideIcons.Clock,

  // Communication
  Mail: LucideIcons.Mail,
  MessageCircle: LucideIcons.MessageCircle,
  Phone: LucideIcons.Phone,

  // Autres
  Headphones: LucideIcons.Headphones,
  Heart: LucideIcons.Heart,
  Star: LucideIcons.Star,
  Sparkles: LucideIcons.Sparkles,
  TrendingUp: LucideIcons.TrendingUp,
  Lightbulb: LucideIcons.Lightbulb,

  // Processus
  FileCheck: LucideIcons.FileCheck,
  Settings: LucideIcons.Settings,
  Users: LucideIcons.Users,
  Target: LucideIcons.Target,
  Zap: LucideIcons.Zap,
  Brain: LucideIcons.Brain,
  Briefcase: LucideIcons.Briefcase,
  BarChart: LucideIcons.BarChart,
  Award: LucideIcons.Award,
  Gauge: LucideIcons.Gauge,
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
