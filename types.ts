import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
  category?: string;
  year?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  id: string; // Changed from href to id for internal routing
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
}

export interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  year: string;
  link?: string;
}