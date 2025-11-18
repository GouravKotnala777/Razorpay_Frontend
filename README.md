# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```



# ⚡ Razorpay Landing Page (Frontend)

A modern and responsive Razorpay-style landing page built using **React**, **Tailwind CSS**, custom components, animations, and sliders.  
The UI is clean, smooth, and inspired by high-quality fintech websites.

---

## 🚀 Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Swiper.js**
- **React Icons**

---

## 📌 Key Sections Implemented

This README currently covers:

1. **Home Page**
2. **Hero Slider**
3. **Quick Search Component**

More sections will be added as you provide the remaining components.

---

# 🏠 **Home Page**

The `Home.jsx` file serves as the main landing page layout.  
It includes the following major UI blocks:

### ✔ Components Included
- `HeroSlider`
- `QuickSearch`
- `Marquee` – displaying scrolling client logos
- `Slider2`
- `OurClients`
- `OurEmployees`
- `ForDevelopers`
- `ForNonCoders`
- `Footer`

### ✔ Special Features
- Client brand images displayed using a repeat array for a continuous scrolling effect.
- Beautiful gradient backgrounds using Tailwind.
- Uses React Icons (`IoSettingsOutline`, `BiWallet`, `LuClock`) for key features section.
- Fully responsive with flexbox-based layout.

### 🧩 Code Highlight: Brand Images Generator
```js
function getAllBrandImages() {
    return CLIENTS_IMAGES.concat(CLIENTS_IMAGES).map((url, index) => (
        <div key={index} className="w-[100px] grayscale-100 hover:grayscale-0">
            <img src={url} alt={url} />
        </div>
    ));
}




































