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


    projects: [
        {
            title: "Tailor.ai",
            description:
                "Tailor your resume with the power of AI! Tailor.ai is a full stack web application that leverages AI to tailor a user's resume to any specific job requirements, aiding in their job search. The platform utilizes AWS S3 for secure and scalable document storage, " +
                "enabling efficient management and retrieval of user resumes throughout the customization process.",
            logos: ["https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
                "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"],
            linkText: "View Project",
            link: "https://github.com/argel6767/tailor.ai",
        },

        {
            title: "Bear Necessities Market",
            description:
                "Led testing infrastructure development for an open-source integrated solution supporting Western New England University's campus food pantry. Spearheaded comprehensive testing infrastructure implementation for the Inventory subsystem, successfully elevating " +
                "test coverage from non-existent to over 60% through agile development and collaborative teamwork.",
            logos: ["https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
                "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
                "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
                "https://www.vectorlogo.zone/logos/docker/docker-tile.svg"
            ],
            linkText: "View Project",
            link: "https://gitlab.com/LibreFoodPantry/client-solutions/bear-necessities-market",
        },

        {
            title: "INeedHousing",
            description:
                "INeedHousing is a comprehensive full-stack web application that streamlines housing searches for interns and new graduates relocating to their employment cities. " +
                "The platform leverages sophisticated ETL pipelines to extract, transform, and normalize housing data from multiple third-party services, creating a unified and accessible housing marketplace.",
            logos: [
                "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
                "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
                "https://www.vectorlogo.zone/logos/azurecontainerregistry/azurecontainerregistry-icon.svg"
            ],
            linkText: "View Project",
            link:"https://github.com/argel6767/i-need-housing"
        },

        {
            title: "Customer Order Parser",
            description:
                "Customer Order Parser is a desktop application built for Blue Tactical. COP leverages custom designed data pipelines and Apache POI to clean and format raw product data into readable and formatted Excel Sheets. COP also leverages JavaFX for a user-friendly UI.",
            logos: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"],
            linkText: "View Project",
            link: "https://github.com/argel6767/customer-order-parser",
        },

        {
            title: "PeakPerformance",
            description:
                "PeakPerformance is a mobile fitness application built with React Native. The goal of this app is to provide users with a platform to log workouts, track progress, connect with friends, and stay motivated on their fitness journey through friendly competition. " +
                "PeakPerformance is currently under development.",
            logos: [
                "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
                "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            ],
            linkText: "View Project",
            link: "https://github.com/argel6767/PeakPerformance"

        },

        {
            title: "SWE-Bot",
            description:
                "SWE-Bot is a single page React web application powered by OpenAI's Chat Completions API. SWE-Bot explains and teaches computer science and software engineering topics to users.",
            logos: ["https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"],
            linkText: "View Project",
            link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        },
    ],
};

export default INFO;