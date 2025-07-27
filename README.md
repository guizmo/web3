# Next.js Starter – shadcn/ui, Tailwind CSS 4 & Vercel

Ce projet est un starter Next.js configuré avec [shadcn/ui](https://ui.shadcn.com/), [Tailwind CSS v4](https://tailwindcss.com/), prêt pour un déploiement facile sur [Vercel](https://vercel.com/).  
Le code source se trouve dans le dossier [`src`](src).

## 🚀 Démarrage

Installe les dépendances :

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

Lance le serveur de développement :

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) pour voir l’application.

## 🐞 Debug & Lancement avec VS Code

Ce projet inclut un fichier `.vscode/launch.json` pour faciliter le lancement et le debug dans Visual Studio Code.

- **Next.js: dev** : Lance le serveur de développement (`npm run dev`) dans un terminal intégré.
- **Next.js: build** : Compile le projet (`npm run build`).
- **Debug Next.js** : Démarre Next.js en mode debug (breakpoints, inspection, etc.).

Pour utiliser ces configurations :

1. Ouvre le projet dans VS Code.
2. Va dans l’onglet "Run and Debug" (ou `Ctrl+Shift+D`).
3. Choisis la configuration souhaitée et clique sur "Run" ou "Start Debugging".

## 📁 Structure du projet

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  lib/
    utils.ts
  ...
public/
  ...
```

- **src/app/** : Pages et layouts Next.js (App Router)
- **src/lib/** : Fonctions utilitaires
- **public/** : Fichiers statiques

## 🛠️ Technologies

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (déploiement)

## 🧑‍💻 Personnalisation

- Les composants UI sont personnalisables via shadcn/ui.
- Les styles globaux et Tailwind sont dans [`src/app/globals.css`](src/app/globals.css).

## 🚢 Déploiement

Déploie instantanément sur Vercel :

[![Déployer sur Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation shadcn/ui](https://ui.shadcn.com/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Vercel](https://vercel.com/docs)

---

> Généré avec ❤️ pour un démarrage rapide sur Next.js, shadcn/ui et Tailwind CSS.
