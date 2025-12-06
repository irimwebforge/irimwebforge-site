     # Audit Ligne Editoriale - irimwebforge.com

     ## 1. INVENTAIRE CONTENU ACTUEL

     ### Cibles clients mentionnees

     | Cible | Frequence | Fichiers |
     |-------|-----------|----------|
     | Therapeutes | 12+ mentions | page.tsx:70, services/page.tsx,
     projets/client.tsx |
     | Independants | 8+ mentions | page.tsx:5, a-propos/page.tsx:48 |
     | Artisans | 6 mentions | services/page.tsx:61-81,
     projets/client.tsx |
     | Commercants | 1 mention | services/page.tsx:67 ("Artisans et
     commercants") |
     | Creatifs/Artistes | 2 mentions | projets/client.tsx |
     | Structures grandissantes | 1 mention | services/page.tsx |

     ### Technologies/competences affichees

     | Technologie | Mentionne | Fichier |
     |-------------|-----------|---------|
     | JavaScript/TypeScript | Oui | a-propos/page.tsx:273 |
     | React/Next.js | Oui | a-propos/page.tsx:274 |
     | Node.js/Express | Oui | a-propos/page.tsx:275 |
     | React Native | Oui | a-propos/page.tsx:276 |
     | HTML/CSS/SCSS | Oui | a-propos/page.tsx:277 |
     | Design UI/UX | Oui | a-propos/page.tsx:278 |
     | **IA / Agents / MCP** | **NON** | - |
     | **Apps mobiles deployees** | **NON** | MoodCycle mentionne "en
     cours" |

     ### Prix/formules affiches

     | Formule | Prix | Support | Fichier |
     |---------|------|---------|---------|
     | Presence | 1 500-2 200 EUR | 70 EUR/mois |
     services/presence/page.tsx:11-12 |
     | Integree | 3 500-5 000 EUR | 150 EUR/mois |
     services/integree/page.tsx:11-12 |
     | Evolutive | 2 500-4 000 EUR | 100 EUR/mois |
     services/evolutive/page.tsx:12-13 |
     | **Mini 500-800 EUR** | **NON PRESENTE** | - | - |

     ### CTAs et moyens de contact

     | Canal | Present | Fichier |
     |-------|---------|---------|
     | Email contact@ | Oui | Footer.tsx:160 |
     | Email eric.zuber@ | Oui | contact/client.tsx |
     | **Telephone** | **Footer seulement** | Footer.tsx:161 (06 78 76
     45 59) |
     | LinkedIn | Oui | Footer.tsx:26 |
     | Formulaire | Oui (3 etapes) | contact/client.tsx |
     | **Appel direct CTA** | **NON** | - |

     ### References temporelles

     | Reference | Contexte | Fichier |
     |-----------|----------|---------|
     | "Avant 2023" | Formation animateurs | a-propos/page.tsx:25 |
     | "Janvier 2024" | Revelation personnelle | a-propos/page.tsx:33 |
     | "2024-2025" | Formation OpenClassrooms | a-propos/page.tsx:41 |
     | "Mars 2025" | Lancement IRIM Webforge | a-propos/page.tsx:49 |
     | **"Reconversion"** | 3 mentions | a-propos/page.tsx:88, 117, 156
     |
     | "20 ans" | Passion endormie | a-propos/page.tsx:32 |

     ---

     ## 2. MATRICE DES ECARTS vs PLAN 2026

     | Axe | Attendu 2026 | Present sur site | Ecart | Priorite |
     |-----|--------------|------------------|-------|----------|
     | Cible commercants | Oui (prospect Pilates) | 1 mention fugace |
     MAJEUR | URGENT |
     | Apps mobiles | ResetPulse 177 pays | MoodCycle "en cours" |
     MAJEUR | URGENT |
     | IA / agents / MCP | Avantage differenciant | ABSENT | MAJEUR |
     IMPORTANT |
     | Offre mini 500-800 EUR | Mentionnee plan | NON | IMPORTANT |
     IMPORTANT |
     | Contact direct tel | Priorite prospect | Footer seulement |
     MAJEUR | URGENT |
     | Architecte systemes | Identite actuelle | NON | IMPORTANT |
     IMPORTANT |
     | "Developpeur reconversion" | Depasse | Encore present 3x | MINEUR
      | NICE-TO-HAVE |
     | Ecosystemes digitaux | Vision future | Vague, pas concret |
     MINEUR | NICE-TO-HAVE |

     ---

     ## 3. ACTIONS PRIORISEES

     ### URGENT - Impact prospect ce week-end

     #### 1. Ajouter telephone cliquable sur page Contact
     **Fichier:** `src/app/(main)/contact/client.tsx` (lignes 149-176)
     **Action:** Ajouter bloc telephone cliquable avec CTA "Appelez-moi
     directement"
     **Proposition:**
     ```tsx
     // Ajouter apres l'email (ligne 154)
     <div className="flex items-center gap-3">
       <Phone className="w-5 h-5 text-[var(--color-primary)]" />
       <div>
         <Typography variant="p" className="font-semibold">
           <a href="tel:+33678764559"
     className="hover:text-[var(--color-primary)]">
             06 78 76 45 59
           </a>
         </Typography>
         <Typography variant="small" className="text-tertiary">
           Disponible du lundi au vendredi
         </Typography>
       </div>
     </div>
     ```

     #### 2. Elargir les cibles clients sur page Services
     **Fichier:** `src/app/(main)/services/page.tsx` (ligne 88)
     **Actuel:** "Des solutions concretes, pensees pour les
     independants, artisans et entrepreneurs"
     **Proposition:** "Des solutions concretes pour independants,
     artisans, **commercants** et entrepreneurs qui veulent se
     concentrer sur leur metier"

     #### 3. Ajouter mention explicite commercants dans les
     transformations
     **Fichier:** `src/app/(main)/services/page.tsx` (lignes 67-71)
     **Actuel:** "Artisans et commercants : Vous changez un prix..."
     **Proposition:** Renforcer avec exemple concret:
     "**Commercants et prestataires de services** : Vous modifiez vos
     tarifs, gerez vos reservations et suivez votre activite depuis un
     seul endroit - fini les tableurs et les post-it."

     ---

     ### IMPORTANT - Coherence 2026

     #### 4. Ajouter section "Apps mobiles" sur page d'accueil
     **Fichier:** `src/app/(main)/page.tsx` (bloc parcoursBlocks, lignes
      43-58)
     **Action:** Transformer le bloc "En developpement" pour mentionner
     ResetPulse
     **Proposition:**
     ```tsx
     {
       id: 'develop',
       badge: 'Nouveaute',
       title: 'Applications mobiles',
       content: [
         'Au-dela des sites web, je developpe des applications mobiles.
     ResetPulse, mon application de bien-etre, est deployee dans 177
     pays.',
         'Cette experience me permet de vous accompagner sur des projets
      plus ambitieux : applications de reservation, outils de suivi
     client, tableaux de bord mobiles.'
       ],
     }
     ```

     #### 5. Ajouter mention IA/automatisation sur page Services
     **Fichier:** `src/app/(main)/services/page.tsx`
     **Action:** Ajouter dans les differenciateurs (lignes 22-55) un
     bloc sur l'IA
     **Proposition:** Nouveau bloc:
     ```tsx
     {
       title: "L'IA au service de votre quotidien",
       description: "J'integre des outils d'automatisation intelligente
     pour reduire encore plus vos taches repetitives. Pas de gadget, du
     concret.",
       icon: 'Sparkles',
     }
     ```

     #### 6. Ajouter offre "Starter" 500-800 EUR
     **Fichiers:**
     - `src/data/services/` - Creer `starter.ts`
     - `src/app/(main)/services/` - Creer page dediee ou section
     **Action:** Definir une offre d'entree pour prospects budget limite

     #### 7. Mettre a jour les technologies maitrisees
     **Fichier:** `src/app/(main)/a-propos/page.tsx` (lignes 272-289)
     **Action:** Ajouter dans la liste:
     - "Automatisation & IA"
     - "Applications mobiles deployees"

     ---

     ### NICE-TO-HAVE - Polish futur

     #### 8. Attenuer "reconversion"
     **Fichiers:** `src/app/(main)/a-propos/page.tsx`
     **Actuel:** "Developpeur freelance en reconversion" (ligne 88, 117)
     **Proposition:** "Developpeur freelance" ou "Createur de solutions
     numeriques"

     #### 9. Ajouter projet ResetPulse dans portfolio
     **Fichier:** `src/app/(main)/projets/client.tsx`
     **Action:** Ajouter ResetPulse comme projet majeur avec stats (177
     pays)

     #### 10. Renforcer "ecosystemes digitaux" avec exemples concrets
     **Fichier:** `src/app/(main)/page.tsx` (ligne 244)
     **Action:** Illustrer avec cas reel (MCP, orchestration)

     ---

     ## 4. PROPOSITIONS DE WORDING - 3 CHANGEMENTS URGENTS

     ### Changement 1 : Telephone cliquable page Contact

     **Fichier:** `src/app/(main)/contact/client.tsx`
     **Localisation:** Section informations de contact (apres ligne 176)

     ```tsx
     {/* Telephone direct - NOUVEAU */}
     <div className="flex items-start gap-4 p-4 rounded-lg
     bg-[var(--color-primary)]/5 border
     border-[var(--color-primary)]/20">
       <div className="w-10 h-10 rounded-full
     bg-[var(--color-primary)]/10 flex items-center justify-center
     flex-shrink-0">
         <Phone className="w-5 h-5 text-[var(--color-primary)]" />
       </div>
       <div>
         <Typography variant="p" className="font-semibold text-lg">
           <a href="tel:+33678764559"
     className="hover:text-[var(--color-primary)] transition-colors">
             06 78 76 45 59
           </a>
         </Typography>
         <Typography variant="small" className="text-tertiary">
           Appelez-moi directement - je reponds sous 24h
         </Typography>
       </div>
     </div>
     ```

     ### Changement 2 : Elargir cibles sur page Services

     **Fichier:** `src/app/(main)/services/page.tsx`
     **Localisation:** Ligne 88 (description sous le titre)

     **Avant:**
     ```
     Des solutions concretes, pensees pour les independants, artisans et
      entrepreneurs qui veulent se concentrer sur leur metier, pas sur
     la technique.
     ```

     **Apres:**
     ```
     Des solutions concretes pour therapeutes, commercants, artisans et
     tous les independants qui veulent se concentrer sur leur metier,
     pas sur la technique.
     ```

     ### Changement 3 : Renforcer bloc "commercants" dans
     transformations

     **Fichier:** `src/app/(main)/services/page.tsx`
     **Localisation:** Lignes 67-71 (bloc transformations)

     **Avant:**
     ```tsx
     {
       target: 'Artisans et commercants',
       title: 'Vous changez un prix, tout se met a jour',
       description: 'Vos tarifs, votre planning, vos factures : tout est
      connecte. Une modification, et tout suit.',
     }
     ```

     **Apres:**
     ```tsx
     {
       target: 'Commercants et prestataires',
       title: 'Gerez votre activite depuis un seul endroit',
       description: 'Reservations, tarifs, disponibilites, facturation :
      tout est connecte. Ideal pour studios, salles de sport, boutiques
     avec services.',
     }
     ```

     ---

     ## 5. FICHIERS CRITIQUES A MODIFIER

     | Fichier | Modifications | Priorite |
     |---------|---------------|----------|
     | `src/app/(main)/contact/client.tsx` | Telephone cliquable |
     URGENT |
     | `src/app/(main)/services/page.tsx` | Cibles + transformations |
     URGENT |
     | `src/app/(main)/page.tsx` | Bloc apps mobiles | IMPORTANT |
     | `src/app/(main)/a-propos/page.tsx` | Technologies + reconversion
     | IMPORTANT |
     | `src/app/(main)/projets/client.tsx` | Projet ResetPulse |
     NICE-TO-HAVE |
     | `src/data/services/` | Offre Starter | IMPORTANT |

     ---

     ## 6. RESUME EXECUTIF

     **Ecarts majeurs identifies:**
     1. Telephone non mis en avant (prospect = appel direct)
     2. Commercants quasi-absents du discours
     3. Apps mobiles/ResetPulse invisibles
     4. IA/automatisation non mentionnee
     5. Offre entree de gamme absente

     **Actions ce week-end (3 edits):**
     1. Telephone cliquable sur /contact
     2. Elargir cibles sur /services
     3. Renforcer bloc commercants

     **Temps estime:** 30 minutes d'edition
