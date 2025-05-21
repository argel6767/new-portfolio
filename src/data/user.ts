const INFO = {
    main: {
        title: "Personal Portfolio",
        name: "Argel Hernandez Amaya",
        email: "argel6767@gmail.com",
        logo: "../logos.png",
    },

    socials: {
        github: "https://github.com/argel6767",
        linkedin: "https://linkedin.com/in/argel-hernandez-amaya",
    },

    homepage: {
        title: "Welcome to my Portfolio!",
        description:
            "Hello! My name is Argel. I am student at Western New England University (graduating Fall 2025) studying computer science. I love to program and am always learning to try to hone my skills. Currently, I am learning Django and React Native."
    },

    about: {
        title: "A Little Bit About Me",
        description:
            "I am currently a student at Western New England University. I am studying computer science and will graduate in Fall 2025. I am proficient in Java, Python, HTML, CSS and Javascript. I have also created projects with both frontend and backend frameworks/libraries such as Spring Boot, NextJS, Django, and React Native." +
            " I love to workout and spend time with my friends when I am not programming."
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
            webLink:"https://tailor-ai.netlify.app/"
        },

        {
            title: "Bear Necessities Market",
            description:
                "Led testing infrastructure development for an open-source integrated solution supporting Western New England University's campus food pantry. My team and I spearheaded a comprehensive testing initiative that established automated testing infrastructure for both frontend and backend components of the Inventory subsystem. Implemented Vitest for frontend component testing and Mocha for backend API testing, " +
                "successfully elevating test coverage from non-existent to over 60% in just two sprint cycles through agile development methodologies and collaborative teamwork.",
            logos: ["https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
                "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
                "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
                "https://www.vectorlogo.zone/logos/docker/docker-tile.svg"
            ],
            linkText: "View Project",
            gitHubLink: "https://gitlab.com/LibreFoodPantry/client-solutions/bear-necessities-market",
            webLink: null
        },

        {
            title: "INeedHousing",
            description:
                "INeedHousing is a comprehensive full-stack web application that addresses housing shortages for interns and new graduates relocating to their employment cities. I successfully delivered a complete MVP with frontend deployed on Vercel using Next.js and containerized backend hosted on Azure App Service. " +
                "The platform leverages sophisticated ETL pipelines using Spring REST client to extract, transform, and normalize housing data from multiple third-party services, creating a unified marketplace with hundreds of listings. Implemented user registration, personalized search preferences, and a responsive listing interface with Tailwind CSS.",
            logos: [
                "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
                "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
                "https://www.vectorlogo.zone/logos/azurecontainerregistry/azurecontainerregistry-icon.svg"
            ],
            linkText: "View Project",
            gitHubLink:"https://github.com/argel6767/i-need-housing",
            webLink: "https://i-need-housing.vercel.app/"
        },

        {
            title: "Customer Order Parser",
            description:
                "Customer Order Parser is a desktop application built for Blue Tactical to streamline their order processing workflow. COP leverages custom designed data pipelines and Apache POI to clean, transform, and format raw product data into structured and easily readable Excel sheets. The application features a user-friendly interface built with JavaFX, allowing non-technical staff to efficiently process large volumes of customer orders with minimal training.",
            logos: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"],
            linkText: "View Project",
            gitHubLink: "https://github.com/argel6767/customer-order-parser",
            webLink: null
        },

        {
            title: "PeakPerformance",
            description:
                "PeakPerformance is a mobile fitness application built with React Native and Django that enables users to track workouts, set goals, and engage in friendly competition. The app features personalized analytics and a 'Strongest of the Week' leaderboard to foster community engagement and motivation. " +
                "During development, I'm actively adhering to professional development practices including conventional commits, CI/CD with GitHub Actions, and PR-based code reviews to ensure high code quality and maintainability. PeakPerformance is currently under active development.",
            logos: [
                "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
                "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            ],
            linkText: "View Project",
            gitHubLink: "https://github.com/argel6767/PeakPerformance",
            webLink: null

        },

        {
            title: "SWE-Bot",
            description:
                "SWE-Bot is a responsive single page React web application powered by OpenAI's Chat Completions API. The application serves as an educational tool that explains and teaches computer science and software engineering topics to users through an intuitive chat interface. SWE-Bot demonstrates practical implementation of AI integration with web technologies, providing interactive learning experiences tailored to individual user queries.",
            logos: ["https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"],
            linkText: "View Project",
            gitHubLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
            webLink: "https://voluble-chebakia-14add6.netlify.app/"
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
            employer: "Walmart",
            position: "Software Engineer II",
            dates: "Jun. 2025 - Aug. 2025",
            accomplishments: [
                "Incoming Software Engineer II Intern @ Walmart",
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
