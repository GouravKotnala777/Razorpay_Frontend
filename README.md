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

- Login/Registration Page
- Home Page (list of all plots with due EMI)
- Message to clients for due EMIs
- Single Item Page (details of single plot/client/EMI)
- Sites Page (list of all sites)
- Slips (list of all slips)
- Agents Page (all agent's sold area data)
- Single Site Page (details of single site and it's all plots)
- Site canvas chart
- Client EMI canvas chart
- Logout Page


## 🚀 Tech Stack

- **Frontend**: React + Typescript + Vite
- **Others**: React-Router-Dom, React-Icons

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/razorpay-frontend
cd razorpay-frontend

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
│   │   ├── components/
│   │   │   ├── CreateFormPanel.tsx
│   │   │   ├── DataFlow.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── ListHeading.tsx
│   │   │   ├── ListItem.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── ProtectedRoute.tsx
│   │   │   ├── SearchComponent.tsx
│   │   │   └── Spinner.tsx
│   │   ├── pages/
│   │   │   ├── Agents.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── MyProfile.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── SinglePlot.tsx
│   │   │   ├── SingleSite.tsx
│   │   │   ├── Sites.tsx
│   │   │   └── Slips.tsx
│   │   ├── shared/
│   │   │   ├── SharedComponents.tsx
│   │   ├── styles/
│   │   │   ├── components/
│   │   │   │   ├── header.component.scss
│   │   │   │   ├── list_item.scss
│   │   │   │   ├── modal.scss
│   │   │   │   └── search_component.scss
│   │   │   ├── pages/
│   │   │   │   ├── agents.scss
│   │   │   │   ├── client.scss
│   │   │   │   ├── home.scss
│   │   │   │   ├── plots.scss
│   │   │   │   ├── register.scss
│   │   │   │   ├── single_item_page.scss
│   │   │   │   ├── sites.scss
│   │   │   │   ├── slips.scss
│   │   │   │   └── users.scss
│   │   │   ├── shared/
│   │   │   │   ├── list.scss
│   │   │   │   └── table.scss
│   │   │   ├── app.scss
│   │   │   ├── shared_components.scss
│   │   │   └── utils.scss
│   │   ├── utils/
│   │   │   ├── constants.ts
│   │   │   ├── hooks.ts
│   │   │   ├── types.ts
│   │   │   └── utilFunctions.ts
│   │   ├── App.tsx
│   │   ├── Context.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
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