# Wireframes IrimWebForge - Guide de structure

Ce document détaille la structure des pages du site IrimWebForge, les composants nécessaires et l'ordre de priorité pour l'implémentation.

## Structure globale du site

### Pages prioritaires (MVP)
1. **Page d'accueil** (Priorité: CRITIQUE)
2. **Page Contact** (Priorité: CRITIQUE)
3. **Structure globale** (NavBar, Footer)

### Pages secondaires (Phase 2)
4. **Page Services** (Priorité: ÉLEVÉE)
5. **Page Projets/Portfolio** (Priorité: ÉLEVÉE)
6. **Page Processus** (Priorité: MOYENNE)

### Pages tertiaires (Phase 3)
7. **Page À propos** (Priorité: MOYENNE)
8. **Page Blog/Ressources** (Priorité: BASSE)

## 1. PAGE D'ACCUEIL (Priorité: CRITIQUE)

### Composants:
- **NavBar** - Navigation principale fixe
- **HeroSection** - Section d'introduction
- **ValueProposition** - Points de différenciation
- **ProjectShowcase** - Aperçu de projets
- **Testimonial** - Témoignage principal
- **ServiceOverview** - Aperçu des forfaits
- **CTASection** - Appel à l'action final
- **Footer** - Pied de page global

### Contenu clé:
- Headline principale: "Des sites web qui vous ressemblent vraiment"
- Points de valeur:
  1. Processus d'immersion identitaire
  2. Personnalisation complète
  3. Approche artisanale
  4. Suivi personnalisé
- Projets à mettre en avant:
  1. CBD-Shop (prioritaire pour MVP)
  2. Echo des Rêves
  3. MoodCycle

## 2. PAGE CONTACT (Priorité: CRITIQUE)

### Composants:
- **ContactHeader** - Entête contact
- **ContactForm** - Formulaire de qualification
- **ContactInfo** - Informations directes
- **ContactProcess** - Processus après contact

### Structure du formulaire:
- Champs standards (Nom, Email, Téléphone)
- Sujet (dropdown)
- Type de projet (dropdown)
- Budget indicatif (dropdown)
- Échéance (dropdown)
- Message: "Parlez-moi de votre projet et de votre univers"
- CTA: "Envoyer ma demande"

### Informations de contact:
- Email: contact@irimwebforge.com
- Téléphone: 06 78 76 45 59
- Adresse: 11 route de Paris, 67117 Ittenheim

## Autres pages (détails)

### PAGE SERVICES (Priorité: ÉLEVÉE)
- Section processus d'immersion
- 3 offres principales (Sites web, Applications, Interfaces admin)
- 3 forfaits d'accompagnement (À la demande, Sérénité, Évolution)
- Programme "Premiers Partenaires"
- FAQ et CTA

### PAGE PROJETS (Priorité: ÉLEVÉE)
- Filtres par type de projet
- Grille de projets (cards)
- Template d'étude de cas détaillée
- Système de navigation entre projets

### PAGE PROCESSUS (Priorité: MOYENNE)
- Vue d'ensemble des 6 phases
- Détail de chaque phase avec étapes
- Garanties et engagements
- Témoignages sur l'expérience client

## Organisation Atomic Design

### Atoms
1. **Logo** - À créer comme composant React
2. **Button** - Styles selon design system
3. **Typography** - Styles texte selon design
4. **Input** - Styles formulaire selon design
5. **Colors** - Variables CSS pour palette
6. **Spacing** - Système d'espacement cohérent

### Molecules
1. **NavItem** - Élément de navigation
2. **Card** - Pour services et projets
3. **Testimonial** - Témoignage client
4. **FormField** - Champs avec labels et validation
5. **ProjectPreview** - Aperçu projet (image + titre + tags)
6. **ServiceHighlight** - Bloc service (icône + titre + texte)
7. **Step** - Étape de processus numérotée

### Organisms
1. **NavBar** - Navigation responsive
2. **Footer** - Pied de page standard
3. **HeroSection** - Section principale accueil
4. **ContactForm** - Formulaire contact/qualification
5. **ValueProposition** - Blocs proposition de valeur
6. **ProjectShowcase** - Galerie de projets
7. **ServiceOverview** - Aperçu forfaits/services
8. **CTASection** - Section d'appel à l'action

### Templates
1. **DefaultPage** - Structure page standard
2. **ProjectPage** - Template d'étude de cas
3. **ServicePage** - Template page service

## Priorités d'implémentation

### PHASE 1 (MVP - 3 semaines)
1. Structure globale (NavBar, Footer)
2. Page d'accueil épurée:
   - HeroSection
   - ValueProposition simplifiée
   - 1 projet (CBD-Shop)
   - CTA contact
3. Page Contact fonctionnelle

### PHASE 2 (6 semaines)
1. Page Services complète
2. Page Projets (structure + 2-3 projets)
3. Page Processus (version simplifiée)

### PHASE 3 (8+ semaines)
1. Page À propos
2. Complétion Portfolio
3. Version complète Processus
4. Préparation structure Blog

Cette structure suit une approche progressive permettant un déploiement rapide du MVP tout en gardant une vision claire des développements futurs.