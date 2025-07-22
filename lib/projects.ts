export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'design' | 'saas';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern, full-stack e-commerce solution with real-time inventory management and seamless payment processing.',
    longDescription: 'Built a comprehensive e-commerce platform using Next.js, featuring advanced search capabilities, real-time inventory tracking, secure payment processing with Stripe, and an intuitive admin dashboard. The platform supports multiple vendors and includes sophisticated analytics.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://demo-ecommerce.weborah.com',
    githubUrl: 'https://github.com/weborah/ecommerce-platform',
    category: 'web',
    featured: true,
  },
  {
    id: 'fintech-dashboard',
    title: 'FinTech Analytics Dashboard',
    description: 'Real-time financial analytics dashboard with advanced data visualization and portfolio management tools.',
    longDescription: 'Developed a sophisticated financial analytics platform featuring real-time market data, interactive charts, portfolio tracking, and risk assessment tools. Built with performance in mind to handle large datasets and provide instant insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'WebSocket', 'Chart.js'],
    liveUrl: 'https://fintech-demo.weborah.com',
    githubUrl: 'https://github.com/weborah/fintech-dashboard',
    category: 'web',
    featured: true,
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare Management App',
    description: 'Mobile-first healthcare platform connecting patients with doctors through secure video consultations.',
    longDescription: 'Created a comprehensive healthcare management system with patient records, appointment scheduling, secure video consultations, and prescription management. Implements HIPAA compliance and end-to-end encryption for data security.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS', 'Docker'],
    liveUrl: 'https://healthcare-demo.weborah.com',
    category: 'mobile',
    featured: true,
  },
  {
    id: 'saas-crm',
    title: 'SaaS CRM Platform',
    description: 'Enterprise-grade customer relationship management system with automation and advanced reporting.',
    longDescription: 'Built a scalable CRM platform with lead management, sales pipeline automation, email marketing integration, and comprehensive analytics. Features multi-tenant architecture and role-based access control.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Elasticsearch', 'Docker'],
    liveUrl: 'https://crm-demo.weborah.com',
    githubUrl: 'https://github.com/weborah/saas-crm',
    category: 'saas',
    featured: false,
  },
  {
    id: 'travel-booking',
    title: 'Travel Booking Platform',
    description: 'Full-featured travel booking system with flight, hotel, and car rental reservations.',
    longDescription: 'Developed a comprehensive travel booking platform integrating multiple APIs for flights, hotels, and car rentals. Features include dynamic pricing, availability checking, booking management, and payment processing.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
    liveUrl: 'https://travel-demo.weborah.com',
    category: 'web',
    featured: false,
  },
  {
    id: 'social-media-app',
    title: 'Social Media Platform',
    description: 'Modern social networking app with real-time messaging, content sharing, and community features.',
    longDescription: 'Created a feature-rich social media platform with real-time messaging, photo/video sharing, stories, live streaming, and community groups. Implements advanced recommendation algorithms and content moderation.',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop',
    technologies: ['React Native', 'GraphQL', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
    liveUrl: 'https://social-demo.webora.dev',
    githubUrl: 'https://github.com/webora/social-platform',
    category: 'mobile',
    featured: false,
  },
];

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};
