import { Hostel, Testimonial, Amenity } from '@/types'

export const hostelsData: Hostel[] = [
  {
    id: "adugodi",
    name: "Crystal Rock Adugodi", 
    location: "Adugodi, Bengaluru",
    monthlyPrice: 11500,
    description: "Premium location with easy metro connectivity and modern amenities in the heart of Bengaluru.",
    highlights: ["Metro connectivity", "IT hub proximity", "Shopping centers nearby"],
    fullDescription: "Our Adugodi location offers the perfect blend of convenience and comfort. Located just minutes away from the metro station, you'll have easy access to all parts of Bengaluru. The area is surrounded by IT hubs, making it ideal for working professionals.",
    amenities: [
      "High-speed WiFi (100 Mbps)",
      "24/7 Security with CCTV",
      "Metro station 5 minutes walk",
      "Shopping malls nearby",
      "Restaurants and cafes",
      "Air-conditioned rooms",
      "Daily housekeeping",
      "Laundry services",
      "Common kitchen",
      "Co-working space",
      "Games room",
      "Rooftop terrace"
    ],
    badge: "Premium Location",
    gradient: "gradient-default"
  },
  {
    id: "hennur",
    name: "Crystal Rock Hennur",
    location: "Hennur, Bengaluru", 
    monthlyPrice: 10800,
    description: "Modern amenities in the IT corridor with excellent connectivity and professional environment.",
    highlights: ["IT corridor", "Professional crowd", "Modern facilities"],
    fullDescription: "Strategically located in the IT corridor, our Hennur property caters to working professionals who value productivity and community. With state-of-the-art facilities and a professional atmosphere.",
    amenities: [
      "Ultra-fast WiFi (200 Mbps)",
      "24/7 Security",
      "IT corridor location", 
      "Professional community",
      "Modern co-working spaces",
      "Conference rooms",
      "Air-conditioned rooms",
      "Daily housekeeping",
      "Laundry services",
      "Common kitchen",
      "Gym facilities",
      "Rooftop terrace"
    ],
    badge: "IT Corridor",
    gradient: "gradient-hennur"
  },
  {
    id: "hsr",
    name: "Crystal Rock HSR",
    location: "HSR Layout, Bengaluru",
    monthlyPrice: 12000,
    description: "Vibrant location near cafes, restaurants and nightlife with a lively community atmosphere.",
    highlights: ["Vibrant nightlife", "Cafes & restaurants", "Young crowd"],
    fullDescription: "Located in the heart of HSR Layout, this property offers the perfect blend of social life and comfort. Surrounded by trendy cafes, restaurants, and nightlife spots, it's ideal for young professionals who love an active social scene.",
    amenities: [
      "High-speed WiFi (150 Mbps)",
      "24/7 Security",
      "Vibrant neighborhood",
      "Young community",
      "Co-working spaces",
      "Event spaces",
      "Air-conditioned rooms",
      "Daily housekeeping",
      "Laundry services",
      "Common kitchen",
      "Games room",
      "Rooftop party area"
    ],
    badge: "Vibrant Area",
    gradient: "gradient-hsr"
  }
]

export const testimonialsData: Testimonial[] = [
  {
    rating: "★★★★★",
    content: "Amazing experience at Crystal Rock! The community vibe is fantastic and all amenities work perfectly. The WiFi is super fast for my work.",
    author: {
      avatar: "PS",
      name: "Priya Sharma",
      role: "Software Engineer"
    }
  },
  {
    rating: "★★★★★",
    content: "Best hostel I've stayed at in Bengaluru. Clean, safe, and the location is perfect for accessing the IT corridor.",
    author: {
      avatar: "RK",
      name: "Rahul Kumar", 
      role: "Digital Marketer"
    }
  },
  {
    rating: "★★★★★",
    content: "Crystal Rock feels like home away from home. The co-working space is great for productivity and I've made amazing friends here.",
    author: {
      avatar: "AP",
      name: "Anjali Patel",
      role: "Startup Founder"
    }
  }
]

export const amenitiesData: Amenity[] = [
  { icon: "📶", title: "High-Speed WiFi", description: "Unlimited high-speed internet" },
  { icon: "🛡️", title: "24/7 Security", description: "CCTV monitoring & secure access" },
  { icon: "🚿", title: "Hot Water Supply", description: "Round-the-clock hot water" },
  { icon: "🧹", title: "Daily Housekeeping", description: "Professional cleaning service" },
  { icon: "🍳", title: "Common Kitchen", description: "Fully equipped kitchen facilities" },
  { icon: "👔", title: "Laundry Services", description: "Washing & ironing facilities" },
  { icon: "💼", title: "Co-working Spaces", description: "Dedicated work areas" },
  { icon: "❄️", title: "Air Conditioning", description: "Climate-controlled rooms" },
  { icon: "🔒", title: "Individual Lockers", description: "Secure personal storage" },
  { icon: "⚡", title: "Power Backup", description: "Uninterrupted power supply" },
  { icon: "🌅", title: "Rooftop Terrace", description: "Relaxing outdoor space" },
  { icon: "🎮", title: "Games Room", description: "Entertainment & recreation" }
]
