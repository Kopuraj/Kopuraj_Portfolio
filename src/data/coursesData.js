export const courseCategoriesData = [
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Ethical Hacking, IAM & Defense Architecture',
    icon: 'fa-shield-alt',
    color: 'from-cyan',
    accentColor: '#00d4ff',
    badge: '2 Certificates',
    tags: ['CEH', 'IAM', 'Security Architecture'],
    certificates: [
      {
        id: 'ceh',
        title: 'Certified Ethical Hacker (CEH)',
        issuer: 'EC-Council',
        date: '2025',
        image: '/images/Courses/Cybersecurity/Certified Ethical Hacker(CEH).png',
        description: 'Comprehensive training in ethical hacking methodologies, vulnerability assessment, penetration testing, and countermeasure implementation.'
      },
      {
        id: 'iam',
        title: 'Identity and Access Management (IAM)',
        issuer: 'Cybersecurity Specialization',
        date: '2025',
        image: '/images/Courses/Cybersecurity/1.Identity and Access Management (IAM).png',
        description: 'Foundational principles of digital identity, user authentication, role-based access control (RBAC), and enterprise authorization protocols.'
      }
    ]
  },
  {
    slug: 'networking',
    title: 'Networking',
    subtitle: 'Packet Tracer, Network Protocols & Infrastructure',
    icon: 'fa-network-wired',
    color: 'from-purple',
    accentColor: '#a855f7',
    badge: '2 Certificates',
    tags: ['Cisco Packet Tracer', 'IEEE Workshop', 'Routing'],
    certificates: [
      {
        id: 'packet-tracer',
        title: 'Getting Started with Cisco Packet Tracer',
        issuer: 'Cisco Networking Academy',
        date: '2025',
        image: '/images/Courses/Networking/1.Getting Started with Cisco Packet Tracer.png',
        description: 'Hands-on network configuration, topological simulation, routing protocols, and device troubleshooting in Cisco Packet Tracer.'
      },
      {
        id: 'networking-workshop',
        title: 'Networking Fundamentals Workshop',
        issuer: 'IEEE Communications Society',
        date: 'April 2025',
        image: '/images/Courses/Networking/2.Networking Workshop.png',
        description: 'Practical 2-day workshop covering network models (OSI/TCP-IP), IP subnetting, switching, and real-world network deployment.'
      }
    ]
  },
  {
    slug: 'personal-development',
    title: 'Personal Development',
    subtitle: 'Leadership, Critical Thinking & Soft Skills',
    icon: 'fa-user-graduate',
    color: 'from-blue',
    accentColor: '#3b82f6',
    badge: '1 Certificate',
    tags: ['Critical Thinking', 'Leadership', 'Decision Making'],
    certificates: [
      {
        id: 'critical-thinking',
        title: 'Critical Thinking for Better Judgment & Decision-Making',
        issuer: 'LinkedIn Learning / Becki Saltzman',
        date: '2025',
        image: '/images/Courses/Personal Development/Critical Thinking for Better Judgment.png',
        description: 'Advanced decision-making frameworks, cognitive bias elimination, logical reasoning, and strategic analysis for high-impact problem solving.'
      }
    ]
  }
];
