export interface Hostel {
  id: string;
  name: string;
  location: string;
  monthlyPrice: number;
  description: string;
  highlights: string[];
  fullDescription: string;
  amenities: string[];
  badge: string;
  gradient: string;
}

export interface Testimonial {
  rating: string;
  content: string;
  author: {
    avatar: string;
    name: string;
    role: string;
  };
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  hostel: string;
  message?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export type PageType = 'home' | 'mess' | 'about' | 'contact';
