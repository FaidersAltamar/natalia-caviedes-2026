
export interface Proposal {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}
