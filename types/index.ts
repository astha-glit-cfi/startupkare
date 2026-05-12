export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

export interface StartupProfile {
  id: string;
  userId: string;
  name: string;
  description: string;
  industry: string;
  stage: 'idea' | 'pre-seed' | 'seed' | 'series-a' | 'series-b' | 'growth';
  fundingTarget: number;
  team: TeamMember[];
  website?: string;
  linkedin?: string;
  twitter?: string;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  linkedin?: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  idea: string;
  createdAt: string;
}

export interface InvestorConnection {
  id: string;
  startupId: string;
  investorId: string;
  status: 'interested' | 'contacted' | 'meeting' | 'declined';
  createdAt: string;
  updatedAt: string;
}

export interface GovernmentScheme {
  id: string;
  name: string;
  description: string;
  ministry: string;
  states: string[];
  industries: string[];
  eligibleStages: string[];
  fundingAmount: number;
  deadline: string;
  url: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  createdAt: string;
  category: string;
}

export interface CommunityPost {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

export interface AIToolInput {
  title?: string;
  description?: string;
  targetMarket?: string;
  problemStatement?: string;
  solution?: string;
}

export interface AIToolOutput {
  content: string;
  timestamp: string;
  type: 'pitch' | 'validation' | 'business-plan';
}
