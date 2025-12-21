const INFO = {
    main: {
        title: "Personal Portfolio",
        name: "Argel Hernandez Amaya",
        email: "argel6767@gmail.com",
        logo: "../logos.png",
        gitHubUsername: "argel6767",
    },

    socials: {
        github: "https://github.com/argel6767",
        linkedin: "https://linkedin.com/in/argel-hernandez-amaya",
    },

    homepage: {
        title: "Welcome to my Portfolio!",
        description:
            "Hello! My name is Argel. I am senior at Western New England University (graduating Fall 2025) studying computer science. I love to program and am always learning to try to hone my skills. Currently, I am working on INeedHousing's admin web application."
    },

    about: {
        title: "A Little Bit About Me",
        description:
            "I am a senior at Western New England University. I am studying computer science and will graduate in Fall 2025. I am proficient in Java, Python, HTML, CSS and Javascript. I have also created projects with both frontend and backend frameworks/libraries such as Spring Boot, NextJS, Django, and React Native." +
            " I love to workout, play video games, and spend time with my friends when I am not programming."
    },

    project: {
        title:"Here are some of my projects!",
        description:
            "I've worked on a diverse portfolio of projects including personal explorations, open source contributions during my capstone, and professional work for previous employers. These efforts reflect my growth as a developer and passion for creating meaningful solutions. If you're interested in any of these projects, please feel free to check out their repositories and suggest " +
            "any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback."
    },

    contact: {
        title:"Connect With Me!",
        description: "Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly to my email address, or message me on my LinkedIn."
    },


    projects: [

        {
            title: "INeedHousing",
            description:
                "INeedHousing is a full-stack housing aggregation platform built with microservices architecture to help interns and new graduates find housing near their workplace. The application processes 1000+ listings from Zillow, RentCast, and Airbnb through automated ETL pipelines and delivers them via a modern Next.js frontend deployed on Vercel with a containerized Spring Boot backend on Azure App Service. " +
                "The system features an event-driven architecture with webhook endpoints triggering real-time data processing, a Quarkus-based cron job service for automated maintenance tasks, and live operational monitoring through WebSocket-powered admin dashboards. Technical implementation includes JWT authentication, Azure Blob Storage integration for file management, PostgreSQL with PostGIS for geospatial data, and a CI/CD pipeline using GitHub Actions for automated multi-service deployments with smart change detection. " +
                "Key features include user registration with email verification, location-based property search with interactive maps, customizable housing preferences, and comprehensive admin tools for system monitoring and maintenance.",
            logos: [
                "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
                "./quarkus-icon.svg",
                "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
                "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
            ],
            linkText: "View Project",
            gitHubLink:"https://github.com/argel6767/i-need-housing",
            webLink: "https://i-need-housing.vercel.app/",
            keywords: ["Spring Boot", "Next.js", "Quarkus", "PostgreSQL", "Azure", "CI/CD", "Microservices"]
        },
        
        {
            title: "Sim-Feed",
            description:
                "Sim-Feed is a satirical social media simulation platform where autonomous AI agents, where each represent exaggerated political caricatures across the ideological spectrum, generate posts, comments, and interactions to create an evolving commentary on modern political discourse. The system features a distributed architecture with a React 19/React Router 7 frontend deployed on Vercel, serverless AWS Lambda API functions running within a VPC for secure database access, and a FastAPI scheduler engine hosted on EC2 that orchestrates agent behavior via APScheduler and basic admin maintenance via API endpoints. " +
                "Each AI persona leverages the DeepSeek API with structured JSON function calling to autonomously decide actions such as creating posts, commenting, liking, following other users, or updating their bios based on their unique political ideology and recent feed activity. The backend implements JWT authentication for admin access, AWS SSM Parameter Store for secrets management, and PostgreSQL on RDS for persistent storage of personas, posts, comments, and social relationships. " +
                "The event-driven agent framework runs 24/7 at configurable intervals, creating an organically evolving social media feed where agents interact with each other's content, fostering a living satirical ecosystem without human intervention.",
            logos: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
                "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
                "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
            ],
            linkText: "View Project",
            gitHubLink: "https://github.com/argel6767/sim-feed",
            webLink: "https://sim-feed.vercel.app/",
            keywords: ["React", "FastAPI", "Node.js", "TypeScript", "Python", "AWS", "PostgreSQL", "Vercel", "Docker"]
        },


        {
            title: "Bear Necessities Market",
            description:
                "Led testing infrastructure development for an open-source integrated solution supporting Western New England University's campus food pantry. My team and I spearheaded a comprehensive testing initiative that established automated testing infrastructure for both frontend and backend components of the Inventory subsystem. Implemented Vitest for frontend component testing and Mocha for backend API testing, " +
                "successfully elevating test coverage from non-existent to over 60% in just two sprint cycles through agile development methodologies and collaborative teamwork.",
            logos: ["https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
              "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
              "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
                "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
                "https://www.vectorlogo.zone/logos/docker/docker-tile.svg"
            ],
            linkText: "View Project",
            gitHubLink: "https://gitlab.com/LibreFoodPantry/client-solutions/bear-necessities-market",
            webLink: null,
            keywords: ["Vue.js", "Node.js", "MongoDB", "Docker", "Vitest", "Mocha"]
        },

        {
            title: "Tailor.ai",
            description:
                "Tailor your resume with the power of AI! Tailor.ai is a full stack web application that leverages Gemini 2.0 Flash via Spring AI to intelligently tailor a user's resume to specific job requirements, significantly improving job application success rates. The platform implements JWT authentication and email verification with JavaMailSender for secure user management. I engineered an efficient document storage architecture using AWS S3, " +
                "enabling persistent access to user resumes across sessions while ensuring data security and scalability throughout the customization process.",
            logos: ["https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
                "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"],
            linkText: "View Project",
            gitHubLink: "https://github.com/argel6767/tailor.ai",
            webLink:"https://tailor-ai.netlify.app/",
            keywords: ["Spring Boot", "React", "PostgreSQL", "Heroku", "Netlify"]
        },

        {
            title: "Customer Order Parser",
            description:
                "Customer Order Parser is a desktop application built for Blue Tactical to streamline their order processing workflow. COP leverages custom designed data pipelines and Apache POI to clean, transform, and format raw product data into structured and easily readable Excel sheets. The application features a user-friendly interface built with JavaFX, allowing non-technical staff to efficiently process large volumes of customer orders with minimal training.",
            logos: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"],
            linkText: "View Project",
            gitHubLink: "https://github.com/argel6767/customer-order-parser",
            webLink: null,
            keywords: ["Java", "JavaFX", "Apache POI", "OpenCSV"]
        },

        {
            title: "ChatterBox",
            description: "ChatterBox is a modern real-time chat application built with Next.js 15 and Spring Boot that delivers seamless messaging experiences through WebSocket connections using the STOMP protocol. The platform features comprehensive social functionality including friendship management, user search, and group chat creation, all secured with JWT authentication and email verification. I implemented a microservices architecture with a dedicated Quarkus email service for scalable asynchronous processing, while the frontend leverages shadcn/ui components and Tailwind CSS for a polished, responsive interface. ChatterBox demonstrates advanced real-time communication patterns with message editing, deletion, and live chat room updates, complemented by robust backend features including rate limiting, PostgreSQL persistence, and comprehensive API endpoints for user management and social interactions.",
            logos: [ "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
                "./quarkus-icon.svg",
                "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
                "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"],
            linkText: "View Project",
            gitHubLink: "https://github.com/argel6767/chatter-box/",
            webLink: "https://chatter-box-pink.vercel.app",
            keywords: ["Spring Boot", "Quarkus", "Next.js", "PostgreSQL", "Heroku", "Sevalla"]
        },

    ],

    educationHistory : [
        {
            school:"Western New England University",
            major: "Computer Science",
            dates: "Aug. 2023 - Dec. 2025",
        },

        {
            school: "University of Massachusetts Amherst",
            major: "Education",
            dates: "Aug. 2020 - May 2023",
        }
    ],

    workHistory: [
        {
            employer: "Walmart Global Tech",
            position: "Software Engineer II",
            dates: "Jun. 2025 - Aug. 2025",
            accomplishments: [
                "Member of the Sam’s Club Technology Cloud Powered Checkout (CPC) team",
                "Conducted comprehensive API linting audits of Core Member Checkout microservices, documenting nearly 500 linting violations and identifying compliance gaps",
                "Proposed and implemented actionable solutions to standardize REST API practices across the platform, reducing violations by 75%"
            ]
        },

        {
            employer: "Blue Tactical",
            position: "Business Intelligence Analyst",
            dates: "Aug. 2024 - Feb. 2025",
            accomplishments: [
                "Leveraged scraping tools such as Octoparse and ParseHub to expedite the collection of product data, fulfilling employer requirements and improving data collection efficiency by over 50%",
                "Independently developed Customer Order Parser, a Java desktop app with a JavaFX UI, leveraging Apache POI and custom designed data pipelines to clean and normalize product scraped data from multiple sources with varying formats"
            ]
        }
    ]

};

export default INFO;
