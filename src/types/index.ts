export type UserRole = 'creator' | 'professional' | 'admin'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatarUrl?: string
}

export interface ProfessionalProfile {
  id: string
  userId: string
  name: string
  title: string
  location: string
  rating: number
  completedProjects: number
  skills: string[]
  startingPriceInr: number
  availability: 'available' | 'tomorrow' | 'busy'
  bio: string
  experienceYears: number
  remote: boolean
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  location: string
  deadlineLabel: string
  budgetMinInr: number
  budgetMaxInr: number
  remote: boolean
  deliverables: number
}

export interface Application {
  id: string
  projectId: string
  professionalId: string
  status: 'submitted' | 'under_review' | 'accepted' | 'rejected'
}

export interface PortfolioItem {
  id: string
  professionalId: string
  title: string
  type: 'image' | 'video'
  thumbnailUrl: string
}

export interface Message {
  id: string
  conversationId: string
  senderId: string
  body: string
  createdAt: string
}

export interface Review {
  id: string
  professionalId: string
  rating: number
  comment: string
}

export interface Notification {
  id: string
  userId: string
  body: string
  read: boolean
}

export interface MatchPreview {
  id: string
  name: string
  title: string
  location: string
  matchPercent: number
  startingPriceInr: number
  initials: string
}
