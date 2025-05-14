# Personal Portfolio Website

A modern, responsive web portfolio showcasing my skills, projects, and professional information.

## Features

- **Interactive UI**: Modern, sleek design with animations and transitions
- **Responsive Design**: Fully optimized for all device sizes from mobile to desktop
- **Project Showcase**: Highlighting projects with descriptions and GitHub links
- **Skills Section**: Visual representation of technical skills
- **Contact Form**: Secure contact form with server-side email handling
- **Smooth Animations**: Enhanced user experience with optimized animations

## Technologies Used

- **Frontend**: React.js, Bootstrap, HTML5, CSS3, JavaScript
- **Animation**: Animate.css, React-on-screen for tracking visibility
- **Backend**: Node.js, Express for API server
- **Email Service**: Nodemailer with secure credentials handling
- **Deployment**: Netlify integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/AleksandarKrastinkov/Personal-Portfolio-Web.git
   cd Personal-Portfolio-Web
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. Start the development server
   ```bash
   npm run dev
   ```
   This will start both the React frontend and the Node.js backend.

## Deployment

This project is set up for easy deployment to Netlify with server-side functions.

1. Build the project
   ```bash
   npm run build
   ```

2. Configure Netlify environment variables
   Add the same environment variables from your `.env` file to your Netlify deployment settings.

## Contact

Aleksandar Krastinkov
- LinkedIn: [https://www.linkedin.com/in/aleksandar-krastinkov-14b755308](https://www.linkedin.com/in/aleksandar-krastinkov-14b755308)
- GitHub: [https://github.com/AleksandarKrastinkov](https://github.com/AleksandarKrastinkov)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
