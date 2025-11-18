
















# Landing Page For Razorpay Clone
A modern and responsive Razorpay-style landing page built using **React**, **Tailwind CSS**, custom components, animations, and sliders.  
The UI is clean, smooth, and inspired by high-quality fintech websites.

[🎉Live Demo](https://razorpay-frontend.vercel.app)

## 📜 Table Of Content
- About
- Features
- TechStack
- Installation
- Environment Variables
- Usage
- API Documentation
- Project Structure

## 🔧 Features

- Header and Hamburger nav
- Dynamic Navbar
- Client Brands Marquee
- Hero Slider
- Employee scrollbar
- Benefits
- Integration
- Footer

## 🚀 Tech Stack

- **Frontend**: React + Typescript + Vite
- **Others**: React-Router-Dom, React-Icons

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/GouravKotnala777/Razorpay_Frontend.git
cd Razorpay_Frontend

# client setup
cd client
npm install
# Create a .env file and add environment variables like given in bellow section:
npm run dev
```

## 📂 Project Structure (frontend)
```bash
├── client/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── hooks
│   │   │   └──useScrollActivity.tsx
│   │   ├── components/
│   │   │   ├──shared
│   │   │   │   ├──AnimatedText.shared.component.tsx
│   │   │   │   ├──Card.shared.component.tsx
│   │   │   │   ├──Components.shared.component.tsx
│   │   │   │   ├──PaperPiece.shared.component.tsx
│   │   │   │   ├──Sheet.shared.component.tsx
│   │   │   │   └──Slider.shared.component.tsx
│   │   │   ├──unshared
│   │   │   │   ├──Footer.component.tsx
│   │   │   │   ├──ForDevelopers.component.tsx
│   │   │   │   ├──ForNonCoders.component.tsx
│   │   │   │   ├──HeroSlider.component.tsx
│   │   │   │   ├──Marquee.component.tsx
│   │   │   │   ├──Header.component.tsx
│   │   │   │   ├──OurClients.component.tsx
│   │   │   │   ├──OurEmployees.component.tsx
│   │   │   │   ├──QuickSearch.component.tsx
│   │   │   │   ├──Sidebar.component.tsx
│   │   │   │   └──Slider2.component.tsx
│   │   ├── pages/
│   │   │   └── Home.page.tsx
│   │   ├── styles/
│   │   │   ├── components/
│   │   │   │   ├── for_developers.component.css
│   │   │   │   ├── for_non_dev.css
│   │   │   │   ├── header.css
│   │   │   │   ├── marquee.component.css
│   │   │   │   ├── slider2.component.scss
│   │   │   │   ├── utility.css
│   │   │   │   ├── header.css
│   │   │   │   └── hero_slider.component.css
│   │   ├── utils
│   │   │   ├── constants.ts
│   │   │   ├── swiper-css.d.ts
│   │   │   ├── types.ts
│   │   │   └── functions.ts
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.tsx
│   │   └── main.tsx
│   ├── .env
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.node.json
│   ├── vercel.json
│   ├── vite.config.ts
│   └── tsconfig.json
```

## 🙋‍♂️ Author
Gourav Kotnala
[PortFolio](https://gouravkotnala777.github.io/portfolio-1/)
[GitHub](https://github.com/GouravKotnala777)
[LinkedIn](https://www.linkedin.com/in/gourav-kotnala-003427295)

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list