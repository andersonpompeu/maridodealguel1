export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  detailedFeatures?: string[];
  benefits?: string[];
}

export interface ProjectItem {
  image: string;
  category: string;
  title: string;
  location: string;
  spanRow?: boolean;
}

export interface TestimonialItem {
  text: string;
  author: string;
  location: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NeighborhoodItem {
  id: string;
  name: string;
  shortName: string;
  description: string;
  fullDescription: string;
  seoTitle: string;
  image: string;
  keywords: string[];
  faqs?: FaqItem[];
}