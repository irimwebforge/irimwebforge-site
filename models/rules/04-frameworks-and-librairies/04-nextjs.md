# Règles d'utilisation de Next.js

## Server Components vs Client Components

Dans Next.js 13+, tous les composants React sont par défaut des Server Components, sauf indication contraire.

### Règles essentielles

1. **Directive "use client"** :
   - Ajoutez `"use client";` en haut d'un fichier pour marquer un composant et tous ses enfants importés comme Client Components.
   - Cette directive doit être placée au tout début du fichier, avant les imports.

2. **Server Components - Ce qu'ils ne peuvent PAS faire** :
   - Utiliser des hooks React (`useState`, `useEffect`, etc.)
   - Ajouter des gestionnaires d'événements (`onClick`, `onChange`, etc.)
   - Utiliser des APIs navigateur (localStorage, window, etc.)
   - Maintenir un état côté client
   - Utiliser des effets ou du cycle de vie côté client

3. **Server Components - Ce qu'ils peuvent faire** :
   - Accéder directement à la base de données, système de fichiers, etc.
   - Garder les secrets API côté serveur (ils ne sont pas exposés au client)
   - Réduire la taille du bundle JavaScript
   - Effectuer des rendus côté serveur pour une meilleure performance

4. **Où placer la directive "use client"** :
   - Créez un "boundary" au niveau le plus haut possible où l'interactivité est nécessaire
   - Ne marquez pas les composants individuellement si possible, préférez la cascade

5. **Pattern recommandé** :
   - Créez des Server Components pour le contenu statique et l'accès aux données
   - Créez des Client Components pour les parties interactives
   - Passez des données des Server Components aux Client Components via les props

## Bonnes pratiques

### ✅ À faire

- Utilisez les composants de navigation intégrés comme `<Link href="">` plutôt que des gestionnaires d'événements pour la navigation
- Convertissez en Client Component (`"use client"`) tout composant qui:
  - Utilise des gestionnaires d'événements (`onClick`, `onChange`, etc.)
  - Utilise des hooks React
  - Nécessite une interactivité côté client
- Utilisez des `getData()` ou des `page.js` pour charger les données côté serveur

### ❌ À éviter

- Ne pas passer de fonctions comme props de Server Components vers Client Components
- Ne pas utiliser `window.location.href` pour la navigation (utilisez `<Link>` ou `router.push()` dans un Client Component)
- Ne pas utiliser de gestionnaires d'événements dans les Server Components
- Ne pas convertir tous les composants en Client Components par défaut

## Exemple de correction typique

### Problème - Server Component avec gestionnaire d'événement :
```tsx
// HeroSection.tsx (Server Component par défaut)
<Button 
  onClick={() => window.location.href = ctaHref}
>
  {ctaText}
</Button>
```

### Solution 1 - Convertir en Client Component :
```tsx
// HeroSection.tsx
"use client";

// ... reste du composant avec l'onClick
```

### Solution 2 - Utiliser les props appropriées :
```tsx
// HeroSection.tsx (reste Server Component)
<Button href={ctaHref}>
  {ctaText}
</Button>
```

## Résolution des erreurs courantes

Si vous voyez cette erreur :
```
Error: Event handlers cannot be passed to Client Component props.
  <button onClick={function onClick} ...>
```

C'est que vous essayez de passer un gestionnaire d'événement d'un Server Component à un Client Component. Solutions:

1. Convertissez le composant parent en Client Component en ajoutant `"use client";`
2. Utilisez des propriétés alternatives (comme `href` au lieu de `onClick`)
3. Déplacez la logique interactive dans un composant Client séparé 