export const blogPosts = [
  {
    id: '1',
    title: 'How AI is Revolutionizing Software Development',
    slug: 'ai-revolutionizing-software-development',
    excerpt: 'Explore how artificial intelligence is transforming the way we approach software development, from intelligent code suggestions to automated testing and deployment.',
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Artificial Intelligence',
    publishDate: 'May 12, 2025',
    readingTime: 8,
    author: {
      id: 'auth1',
      name: 'Sophia Chen',
      role: 'AI Research Lead',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    tags: ['AI', 'Software Development', 'Machine Learning', 'Automation']
  },
  {
    id: '2',
    title: 'The Future of Cloud Computing in 2025 and Beyond',
    slug: 'future-cloud-computing-2025',
    excerpt: 'A deep dive into the evolving landscape of cloud computing, including emerging technologies, hybrid solutions, and how businesses can prepare for the next wave of innovation.',
    coverImage: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cloud Services',
    publishDate: 'April 28, 2025',
    readingTime: 10,
    author: {
      id: 'auth2',
      name: 'Marcus Johnson',
      role: 'Cloud Solutions Architect',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    tags: ['Cloud Computing', 'Infrastructure', 'SaaS', 'Digital Transformation']
  },
  {
    id: '3',
    title: 'Securing Your Digital Assets: Cybersecurity Best Practices',
    slug: 'cybersecurity-best-practices',
    excerpt: 'With cyber threats becoming increasingly sophisticated, learn the essential strategies to protect your organization\'s valuable digital assets and sensitive information.',
    coverImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cybersecurity',
    publishDate: 'April 15, 2025',
    readingTime: 7,
    author: {
      id: 'auth3',
      name: 'Elena Rodriguez',
      role: 'Security Specialist',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    tags: ['Cybersecurity', 'Data Protection', 'Risk Management', 'Compliance']
  },
  {
    id: '4',
    title: 'Building Scalable Microservices Architecture',
    slug: 'scalable-microservices-architecture',
    excerpt: 'Discover the principles and patterns for designing resilient, maintainable microservices that can scale with your business needs and technical requirements.',
    coverImage: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Software Architecture',
    publishDate: 'April 3, 2025',
    readingTime: 12,
    author: {
      id: 'auth4',
      name: 'David Kim',
      role: 'Principal Architect',
      avatar: 'https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    tags: ['Microservices', 'System Design', 'Scalability', 'DevOps']
  },
  {
    id: '5',
    title: 'The Impact of 5G on Enterprise Applications',
    slug: 'impact-5g-enterprise-applications',
    excerpt: 'How 5G technology is opening new possibilities for enterprise applications, from IoT and edge computing to immersive customer experiences and more.',
    coverImage: 'https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Connectivity',
    publishDate: 'March 22, 2025',
    readingTime: 6,
    author: {
      id: 'auth5',
      name: 'James Wilson',
      role: 'Network Technology Director',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    tags: ['5G', 'Enterprise Technology', 'IoT', 'Edge Computing']
  },
  {
    id: '6',
    title: 'Data-Driven Decision Making: From Analysis to Action',
    slug: 'data-driven-decision-making',
    excerpt: 'Learn how leading organizations are leveraging data analytics to drive strategic decisions, optimize operations, and create competitive advantages.',
    coverImage: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Data Analytics',
    publishDate: 'March 14, 2025',
    readingTime: 9,
    author: {
      id: 'auth6',
      name: 'Lisa Chen',
      role: 'Data Science Lead',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    tags: ['Data Analytics', 'Business Intelligence', 'Decision Making', 'Digital Strategy']
  },
];

export const categories = [
  'Artificial Intelligence',
  'Cloud Services',
  'Cybersecurity',
  'Software Architecture',
  'Connectivity',
  'Data Analytics',
];

export const getFeaturedPost = () => {
  return blogPosts[0];
};

export const getRecentPosts = (exclude = '', limit = 5) => {
  return blogPosts
    .filter(post => post.id !== exclude)
    .slice(0, limit);
};