import {
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  HardDrive,
  Layers3,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  Sparkles,
  Wrench
} from 'lucide-react';

export const owner = {
  name: 'MAC ALDWIN A. NARCISA',
  title: 'IT Support • Workflow Automation • Systems Support',
  description:
    'I build practical tools and workflow systems that simplify operations, improve efficiency, and support day-to-day business processes.',
  objective:
    'Dedicated and adaptable IT support and operations professional with experience in technical troubleshooting, workflow systems, inventory operations, data management, and administrative support. Passionate about solving real-world operational problems through technology, automation, and continuous learning while contributing to organizational efficiency and growth.',
  address: '#99 Esteban St., New Ilalim, Olongapo City 2200',
  phone: '09157193844',
  email: '201310077m@gmail.com'
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export const focusAreas = [
  'IT Support',
  'Systems Support',
  'Workflow Automation',
  'Technical Troubleshooting',
  'Inventory & Data Operations',
  'Web Systems',
  'Process Improvement'
];

export const experiences = [
  {
    role: 'IT Support',
    company: 'Isuzu Subic',
    period: 'April 27, 2026 – Present',
    icon: ServerCog,
    responsibilities: [
      'Providing IT support for day-to-day operations',
      'Assisting users with technical concerns and troubleshooting',
      'Supporting system, network, and hardware-related issues',
      'Helping improve internal workflow and support processes'
    ]
  },
  {
    role: 'Management Information System',
    company: 'College of Subic Montessori',
    period: 'September 2021 – February 2025',
    icon: HardDrive,
    responsibilities: [
      'Monitoring and maintaining server performance',
      'Providing networking and IT support',
      'Assisting with system operations and troubleshooting'
    ]
  },
  {
    role: 'IT Technician On-Call',
    company: 'AIMHIGH PHIL. LOGISTICS, INC',
    period: 'February 2021',
    icon: Wrench,
    responsibilities: ['Providing networking and IT support', 'Technical troubleshooting and maintenance']
  },
  {
    role: 'I.T Staff & Pricing Specialist',
    company: 'Liberty Outlets',
    period: 'September 2017 – February 2021',
    icon: Database,
    responsibilities: [
      'Managing product databases and inventory systems',
      'Designing labels and barcode systems',
      'Product image editing and optimization',
      'Inventory monitoring and data processing',
      'Pricing research and operational support'
    ]
  },
  {
    role: 'Kitchen & Service Staff',
    company: 'McDonald’s',
    period: 'September 2015 – April 2017',
    icon: BriefcaseBusiness,
    responsibilities: [
      'High-volume food preparation',
      'Customer service and teamwork',
      'Inventory and cleanliness management'
    ]
  },
  {
    role: 'Kitchen & Service Staff',
    company: 'Fresh N’ Famous',
    period: 'July 2014 – June 2015',
    icon: BriefcaseBusiness,
    responsibilities: [
      'Food preparation and kitchen support',
      'Order fulfillment and customer service',
      'Food quality maintenance'
    ]
  }
];

export const education = [
  {
    school: 'College of Subic Montessori',
    course: 'Bachelor of Technical Vocational Teacher Education',
    detail: 'Major in Food Servicing and Management',
    year: '2022 – 2026'
  },
  {
    school: 'Asian Institute of Computer Studies',
    course: 'Computer Technology',
    detail: 'Technical program',
    year: '2016'
  },
  {
    school: 'Gordon College',
    course: 'Associate in Computer Technology',
    detail: 'Associate program',
    year: '2013'
  }
];

export const certifications = [
  'TESDA NC II in Bread and Pastry Production',
  'Google Analytics for Beginners',
  'Udemy: Complete WordPress for Building Professional Sites',
  'UNIX Essentials featuring Solaris 10 Operating Systems',
  'CCNA Routing and Switching: Introduction to Networks',
  'CCNA Routing and Switching: Routing and Switching Essentials',
  'CCNA Routing and Switching: Scaling Networks',
  'CCNA Routing and Switching: Connecting Networks'
];

export const skillGroups = [
  {
    title: 'Technical Skills',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'Tailwind CSS', 'Bootstrap', 'Python', 'MySQL']
  },
  {
    title: 'IT & Systems',
    icon: ServerCog,
    skills: [
      'Networking',
      'Troubleshooting',
      'Server Monitoring',
      'Hardware Support',
      'Software Support',
      'Inventory Systems',
      'Data Management',
      'Workflow Support'
    ]
  },
  {
    title: 'Creative Tools',
    icon: Sparkles,
    skills: ['Adobe Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Canva']
  },
  {
    title: 'Office Tools',
    icon: Layers3,
    skills: ['Microsoft Word', 'Excel', 'PowerPoint']
  },
  {
    title: 'Operations & Service',
    icon: BriefcaseBusiness,
    skills: [
      'Customer Service',
      'Administrative Support',
      'Inventory Control',
      'Food Preparation and Handling',
      'Baking and Pastry Production',
      'Kitchen Safety and Sanitation'
    ]
  }
];

export const projects = [
  {
    title: 'AutoFlow',
    description: 'A practical automation concept for routing repetitive operations and reducing manual follow-ups.',
    tech: ['React', 'Tailwind CSS', 'Workflow Logic'],
    status: 'In Progress'
  },
  {
    title: 'Inventory Monitoring Tool',
    description: 'A lightweight tracking system for stock movement, item visibility, and inventory reporting.',
    tech: ['MySQL', 'PHP', 'Data Management'],
    status: 'In Progress'
  },
  {
    title: 'Run Apo Club System',
    description: 'A club support system for member records, event coordination, and activity tracking.',
    tech: ['React', 'Forms', 'Dashboards'],
    status: 'Prototype',
    url: 'https://runapoclub-demo.rf.gd/rac-portal/public/index.php'
  },
  {
    title: 'Google Sheets / Apps Script Tools',
    description: 'Spreadsheet-powered tools for data cleanup, reporting, task reminders, and team tracking.',
    tech: ['Google Sheets', 'Apps Script', 'Automation'],
    status: 'Utility'
  }
];

export const contactItems = [
  { label: 'Address', value: owner.address, icon: MapPin },
  { label: 'Phone', value: owner.phone, icon: Phone },
  { label: 'Email', value: owner.email, icon: Mail }
];

export const SectionIcon = GraduationCap;
