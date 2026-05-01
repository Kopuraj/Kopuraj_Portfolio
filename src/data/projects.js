export const projects = [
  {
    id: 'sem-tracker',
    title: 'SEM-Tracker',
    shortDesc: 'Web application for students to track semester progress, attendance, and assessment grades.',
    coverImage: '/images/projects/sem-tracker/Dashboard_image.png',
    imageFit: 'contain',
    overview: 'A modern full-stack web application designed to help students organize their semester effectively. It provides intuitive schedule management, multiple view modes, automated notifications, and a comprehensive dashboard for schedule overview.',
    icon: 'fa-chart-line',
    tech: ['React', 'TypeScript', 'Vite', 'Spring Boot', 'Java', 'MySQL', 'Docker', 'AWS'],
    demoLink: '#',
    codeLink: 'https://github.com/Kopuraj',
    features: [
      {
        title: 'Schedule Management',
        desc: 'Create regular weekly schedules and special one-time events. Easy add, edit, and delete operations with automatic day calculation for special dates.'
      },
      {
        title: 'Multiple View Modes',
        desc: 'Plan effectively with Today, This Week, Special Events, and All Schedules views. Includes a Day Selector to filter by specific weekday.'
      },
      {
        title: 'Statistics Dashboard',
        desc: 'Real-time updates showing classes today, regular schedules, upcoming special events, and total schedules overview.'
      },
      {
        title: 'Automated Notifications',
        desc: 'Daily schedule emails at 7:00 AM with beautiful HTML-formatted content, personalized for each user.'
      }
    ],
    images: [
      { src: '/images/projects/sem-tracker/1.Homepage.png', caption: 'Full Homepage Overview' },
      { src: '/images/projects/sem-tracker/2.Timetable page.png', caption: 'Intuitive Timetable & Scheduling' },
      { src: '/images/projects/sem-tracker/3.Attandance page.png', caption: 'Attendance Tracking Dashboard' },
      { src: '/images/projects/sem-tracker/4.Exam & quizes.png', caption: 'Exam & Quizzes Management' }
    ]
  },
  {
    id: 'outcome-based-qa',
    title: 'Outcome-Based Quality Assurance System',
    shortDesc: 'Full-stack web platform automating Outcome-Based Education workflows with role-based dashboards.',
    coverImage: '/images/projects/outcome-based-qa/Dashboard_image.png',
    imageFit: 'contain',
    icon: 'fa-graduation-cap',
    tech: ['React', 'Spring Boot', 'MySQL', 'Docker', 'CI/CD'],
    storyBlocks: [
      {
        image: '/images/projects/outcome-based-qa/1.Landing page 2.png',
        title: 'Introduction & Overview',
        text: 'The Outcome-Based Quality Assurance System for DEIE is a web-based solution designed to support the Department of Electrical and Information Engineering (DEIE) University of Ruhuna in implementing and automating the Outcome-Based Education (OBE) framework. OBE focuses on ensuring that students achieve well-defined learning outcomes that align with program objectives. This system aims to simplify the process of collecting, storing, and analyzing student results, mapping Learning Outcomes (LOs) to Program Outcomes (POs), and generating reports that measure attainment levels.'
      },
      {
        image: '/images/projects/outcome-based-qa/2.Super admin Dashboaard_2.png',
        title: 'Administrative Control & CQI',
        text: 'The system features an administrative dashboard for managing courses, students, and LO-PO mappings, along with tools for faculty to upload student performance data. It calculates LO and PO attainment levels based on predefined thresholds and presents results in an easy-to-understand format. Additionally, the system supports Continuous Quality Improvement (CQI) by highlighting areas where outcomes are not being met and recommending actions for improvement.'
      },
      {
        image: '/images/projects/outcome-based-qa/3.Screenshot (31).png',
        title: 'Requirements & Mapping',
        text: 'Administrators can manage student data, map Learning Outcomes (LOs) to Program Outcomes (POs), and generate reports. The system automatically calculates LO-PO attainment levels based on student results and compares them with the cohort\'s average marks. Faculty can easily input student results and view their LO-PO attainment securely.'
      },
      {
        image: '/images/projects/outcome-based-qa/4.Screenshot (32).png',
        title: 'Analysis & Attainment',
        text: 'The system processes student performance data to determine the extent of achievement for each LO and PO. It calculates the attainment levels based on student results, providing insights into program effectiveness and facilitating a data-driven approach to quality assurance.'
      },
      {
        image: '/images/projects/outcome-based-qa/5.Screenshot (33).png',
        title: 'Reporting & Continuous Improvement',
        text: 'Generates detailed reports on LO-PO attainment levels, student performance, and CQI metrics to support quality assurance audits and accreditation processes. The system enables the CQI process by providing a feedback loop for improvement in curriculum design, teaching strategies, and assessment methods.'
      }
    ]
  },
  {
    id: 'public-transport-tracking',
    title: 'Public Transport Live Tracking',
    shortDesc: 'Cross-platform mobile app with real-time GPS tracking of buses and trains, route searches, and ETA.',
    coverImage: '/images/projects/transport/Gemini_Generated_Image_agmcngagmcngagmc.png',
    imageFit: 'contain',
    icon: 'fa-bus',
    tech: ['Flutter', 'Node.js/Spring Boot', 'Firebase', 'Google Maps API'],
    overview: 'A comprehensive mobile application designed to simplify daily commutes. Users can track buses and trains in real-time, view live schedules, search for optimal routes, and receive instant alerts for delays or route changes. Built with a robust Flutter frontend and a scalable backend leveraging Firebase and Google Maps APIs.',
    features: [
      {
        title: 'Real-Time GPS Tracking & ETA',
        desc: 'Live tracking of buses and trains utilizing driver app locations and IoT devices, complete with accurate Estimated Time of Arrival calculations.'
      },
      {
        title: 'Interactive Maps & Route Planning',
        desc: 'Seamless integration with Google Maps API to search for available routes, save favorites, and visualize the complete journey.'
      },
      {
        title: 'Smart Notifications & Alerts',
        desc: 'Firebase Cloud Messaging (FCM) pushes instant alerts regarding delays, strikes, or cancellations directly to commuters.'
      },
      {
        title: 'Crowd-Sourced Information',
        desc: 'Empowers passengers to report overcrowded buses or late arrivals, updating the community in real-time.'
      }
    ]
  },
  {
    id: 'networked-tic-tac-toe',
    title: 'Networked Tic-Tac-Toe Game',
    shortDesc: 'Java-based server-client multiplayer game allowing two players to connect and play over a local network.',
    coverImage: '/images/projects/tictactoe/Gemini_Generated_Image_i0lqmzi0lqmzi0lq.png',
    imageFit: 'contain',
    video: '/images/projects/tictactoe/20260501-1542-57.0419910.mp4',
    icon: 'fa-gamepad',
    tech: ['Java', 'TCP Sockets', 'Networking'],
    overview: 'A Java-based server-client implementation of the classic Tic-Tac-Toe game. It enables two players to connect from separate machines over the same network (like a shared Wi-Fi) using Socket programming. Players take turns marking a 3x3 grid with their respective signs (Cross and Circle). The server maintains the game state and evaluates the winner when a player aligns three signs consecutively. Once the game is over, it restarts automatically for a new round.',
    features: [
      {
        title: 'Multiplayer Network Play',
        desc: 'Developed as part of a networking module, players connect their client applications to a centralized server hosted on the network via IP address.'
      },
      {
        title: 'Real-Time Socket Communication',
        desc: 'Utilizes Java TCP Sockets to reliably send and receive game state requests between the clients and the server in real-time.'
      },
      {
        title: 'Automatic Win Detection & Reset',
        desc: 'The server actively monitors the 3x3 grid, instantly determining the winner upon finding three identical signs in a row, and restarts the game for continuous play.'
      }
    ]
  },
  {
    id: 'task-scheduler',
    title: 'Automated Task Scheduler (Terminal-Based System)',
    shortDesc: 'Developed a terminal-based Task Scheduler application that allows users to create, manage, and execute tasks automatically based on scheduled time conditions.',
    coverImage: '/images/projects/task-scheduler/Gemini_Generated_Image_fp8ensfp8ensfp8e.png',
    imageFit: 'contain',
    icon: 'fa-tasks',
    tech: ['Java', 'Multithreading', 'Scheduling Logic'],
    overview: 'The system uses a time-monitoring mechanism to continuously track scheduled tasks and triggers execution when the defined time is reached. It supports task creation, deletion, and real-time scheduling using core programming concepts such as threading and timers. This project demonstrates a strong understanding of backend logic, process automation, and system design without relying on graphical user interfaces.',
    features: [
      {
        title: 'Core Functionality',
        desc: 'Create and schedule tasks via terminal. Task management includes adding, deleting, and viewing tasks.'
      },
      {
        title: 'Automation & Monitoring',
        desc: 'Automatic task execution based on time. Continuous time monitoring system ensures accuracy.'
      },
      {
        title: 'System Design',
        desc: 'Lightweight CLI-based system with efficient use of threads and timers to manage execution state.'
      },
      {
        title: 'Architecture Flow',
        desc: 'The system follows a simple scheduler architecture: User Input → Task Stored → Scheduler Running → Time Match → Task Executed.'
      }
    ]
  }
];
