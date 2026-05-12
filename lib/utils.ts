import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Startup score calculation
export function calculateStartupScore(profile: {
  profileCompleted?: boolean;
  ideaDescription?: string;
  team?: string[];
  funding?: number;
  metrics?: string;
}): number {
  let score = 0;
  
  if (profile.profileCompleted) score += 20;
  if (profile.ideaDescription) score += 20;
  if (profile.team && profile.team.length > 0) score += 20;
  if (profile.funding && profile.funding > 0) score += 20;
  if (profile.metrics) score += 20;
  
  return Math.min(score, 100);
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
}

// Format date
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Validate email
export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Validate phone
export function validatePhone(phone: string): boolean {
  const re = /^[0-9]{10}$/;
  return re.test(phone.replace(/[^0-9]/g, ''));
}
