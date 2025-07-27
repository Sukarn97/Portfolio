# Portfolio Project

A modern portfolio built with **React**, **TypeScript**, and **Vite**. This project showcases your work, experience, and skills with a fast, responsive, and visually appealing web application.

## Features

- ⚡️ Fast development with Vite
- 🛠️ Type-safe codebase using TypeScript
- 🎨 Beautiful UI and interactive sections
- 📱 Responsive design for all devices
- 🧩 Modular React components
- 🖼️ Asset management for images, models, and videos
- ✨ ESLint integration for code quality

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- pnpm (or npm/yarn)

### Installation

```bash
pnpm install
```

### Running Locally

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production

```bash
pnpm build
```

## Project Structure

```
src/            # Source code (React components, styles, etc.)
public/         # Static assets (images, models, videos)
models/         # 3D models for interactive sections
```

## ESLint & Code Quality

This project uses recommended ESLint rules for React and TypeScript. For production, enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,
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

export default tseslint.config([
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

## Customization

- Update images and models in the `public/` and `models/` folders.
- Modify sections and components in `src/sections/` and `src/components/`.

## Credits

- Built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/).
- Icons and assets from various sources (see `public/images/`).

## License

This project is open source and available under the [MIT License](LICENSE).
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
