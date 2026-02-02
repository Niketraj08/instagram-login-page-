# 📸 Instagram Clone

A modern, responsive Instagram clone built with React that replicates the core user interface and authentication experience of the popular social media platform.

![Instagram Clone](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF) ![Instagram](https://img.shields.io/badge/Instagram-Clone-red)

## ✨ Features




## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/instagram-clone.git
   cd instagram-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5175`

## 📖 Usage

### 🏠 Home Page (`/`)
- Displays the login page by default
- Features phone mockup and login form

### 🔐 Login Page (`/login`)
- Email/username and password fields
- Facebook login option
- "Forgot password" link
- Link to signup page

### 📝 Signup Page (`/signup`)
- Complete registration form
- Real-time validation
- Facebook signup option
- Terms and privacy policy links

## 📁 Project Structure

```
instagram-clone/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── icon_facebook.png
│   │   ├── icon_googleplay.png
│   │   ├── icon_microsoft.png
│   │   ├── instagram.png
│   │   ├── phone.png
│   │   └── phone_transition_4.png
│   ├── components/
│   │   ├── Login/
│   │   │   ├── Login.jsx
│   │   │   └── Login.css
│   │   ├── Phone/
│   │   │   ├── Phone.jsx
│   │   │   └── Phone.css
│   │   ├── SignUp/
│   │   │   ├── SignUp.jsx
│   │   │   └── SignUp.css
│   │   └── validations/
│   │       └── UserValidation.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## 🎯 Key Components

### 📱 Phone Component
- Displays Instagram phone mockup
- Shows app interface screenshots
- Responsive design for different screen sizes

### 🔑 Login Component
- User authentication interface
- Form validation with real-time feedback
- Social login integration (Facebook)

### 📝 SignUp Component
- User registration form
- Comprehensive validation
- Instagram-style design elements

### ✅ Validation
- Email format validation
- Password strength requirements
- Username uniqueness checks
- Real-time error messaging

## 🔧 Available Scripts

### Development
```bash
npm run dev
```
Runs the app in development mode with hot reloading.

### Production Build
```bash
npm run build
```
Builds the app for production to the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build.

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality and consistency.

## 🎨 Design Features

### Color Scheme
- **Primary Blue:** `#0095f6` (Instagram blue)
- **Background:** `#fafafa` (Light gray)
- **Text:** `#8e8e8e` (Medium gray)
- **Borders:** `#dbdbdb` (Light borders)

### Typography
- **Font Family:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
- **Text Sizes:** 12px, 14px, 16px, 17px
- **Font Weights:** 400, 500, 600

### Spacing
- **Container Max Width:** 350px
- **Padding:** 20px, 40px
- **Gaps:** 12px, 16px
- **Border Radius:** 1px, 3px, 4px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Use meaningful commit messages
- Test on multiple screen sizes
- Ensure accessibility compliance
- Add comments for complex logic

## 📝 License

This project is for educational purposes only. Instagram is a trademark of Meta Platforms, Inc. This project is not affiliated with, endorsed by, or sponsored by Instagram or Meta Platforms, Inc.

## 🙏 Acknowledgments

- **Instagram** - For the original design inspiration
- **React Team** - For the amazing React framework
- **Vite Team** - For the fast build tool
- **Open Source Community** - For the valuable tools and libraries

## 📞 Support

If you have any questions or issues, feel free to:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Made with ❤️ by [Your Name]**

*Last updated: February 2026*
