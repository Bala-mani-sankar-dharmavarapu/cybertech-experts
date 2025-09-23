export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  urlName: string;
  detailedDescription?: string;
  features?: string[];
  benefits?: string[];
  useCases?: string[];
  processFlow?: string[];
  deliverables?: string[];
  scenarios?: string[];
  measurements?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SecurityService {
  id: string;
  title: string;
  icon: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  level: string;
  features: string[];
  benefits: string[];
}
