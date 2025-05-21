# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases professional experience, skills, and projects in a clean, interactive interface.

This portfolio is heavily inspired by [reactfolio](https://github.com/truethari/reactfolio) by **Tharindu N. Madhusanka** (username: truethari). It uses the original project as a starting point and influence for general structure and style while utilizing Next.js, TypeScript, and Tailwind CSS instead of React, webpack, and vanilla CSS.

## 🌟 Features

- **Modern UI**: Clean, responsive design with smooth animations and transitions
- **Multi-page Layout**: Home, About, Projects, and Contact pages with intuitive navigation
- **Projects Showcase**: Interactive project cards with expandable details
- **GitHub Integration**: Displays language statistics from GitHub profile
- **Contact Form**: Integrated with EmailJS for direct messaging
- **Responsive Design**: Optimized for all screen sizes and devices
- **Animation Effects**: Subtle motion effects for enhanced user experience
- **SEO Optimized**: Meta tags and structured data for better search engine visibility

## 🛠️ Technologies

- **Frontend**: Next.js, TypeScript, Tailwind CSS 4
- **UI Libraries**: DaisyUI, FontAwesome
- **Animations**: tailwindcss-motion
- **Form Handling**: EmailJS
- **API Integration**: GitHub Stats API
- **Deployment**: Vercel (suggested)

## 📋 Prerequisites

- Node.js (>= 18.x)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🧰 Project Structure

```
portfolio/
├── public/           # Static assets (images, icons)
├── src/
│   ├── app/          # Next.js app router pages
│   │   ├── about/    # About page components
│   │   ├── contact/  # Contact page components
│   │   ├── projects/ # Projects page components
│   │   └── ...       # Global styles and layout
│   ├── components/   # Reusable UI components
│   └── data/         # Site content and configuration
└── next.config.ts    # Next.js configuration
```

## ✨ Customization

### Personal Information

Edit the `src/data/user.ts` file to update your personal information, including:

- Name, email, and social links
- Homepage, about, and contact descriptions
- Project details and links
- Education and work history

### Styling

This project uses Tailwind CSS 4 for styling. Customize the look and feel by editing:

- `src/app/globals.css` - Global styles and Tailwind directives
- Tailwind classes within component files
- Plugin configurations via the `@plugin` directives in globals.css

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgements

- [reactfolio](https://github.com/truethari/reactfolio) by Tharindu N. Madhusanka - Original inspiration
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [DaisyUI](https://daisyui.com/) - Tailwind CSS component library
- [FontAwesome](https://fontawesome.com/) - Icons
- [EmailJS](https://www.emailjs.com/) - Email service

## 📞 Contact

Feel free to reach out if you have any questions or suggestions.

- Email: argel6767@gmail.com
- GitHub: [argel6767](https://github.com/argel6767)
- LinkedIn: [Argel Hernandez Amaya](https://linkedin.com/in/argel-hernandez-amaya)