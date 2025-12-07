import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';

const DesignSystem = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto surface-secondary">
      <h1 className="text-4xl font-bold mb-8 text-[var(--color-secondary)]">Design System IRIM Webforge</h1>

      {/* Couleurs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">Palette de couleurs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--color-secondary)]">Couleurs principales</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div
                  className="h-20 w-full rounded-t-md flex items-end"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md">
                    #00A0A0
                  </div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-[var(--color-primary)]">Turquoise - Primaire</p>
                  <p className="text-sm text-secondary">Authenticité, créativité, innovation</p>
                </div>
              </div>

              <div>
                <div
                  className="h-20 w-full rounded-t-md flex items-end"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md">
                    #004466
                  </div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-[var(--color-secondary)]">Bleu foncé - Secondaire</p>
                  <p className="text-sm text-secondary">Expertise, profondeur, confiance</p>
                </div>
              </div>

              <div className="border-l-4 border-l-[var(--color-tertiary)]">
                <div
                  className="h-20 w-full rounded-t-md flex items-end"
                  style={{ backgroundColor: 'var(--color-tertiary)' }}
                >
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md text-[var(--color-tertiary)]">
                    #F06424
                  </div>
                </div>
                <div className="p-2 surface-primary border border-color border-l-0 rounded-br-md">
                  <p className="font-semibold text-[var(--color-tertiary)]">Orange - Tertiaire (Accentuation)</p>
                  <p className="text-sm text-secondary">
                    Élément d'accentuation pour bordures, badges et mise en valeur
                  </p>
                  <div className="mt-2">
                    <Link href="/ds-lab/color-tertiary">
                      <Badge variant="tertiary" size="small">
                        Voir guide d'utilisation
                      </Badge>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--color-secondary)]">Couleurs accessibles</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div
                  className="h-20 w-full rounded-t-md flex items-end"
                  style={{ backgroundColor: 'var(--color-primary-accessible)' }}
                >
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md">
                    #008080
                  </div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-[var(--color-primary-accessible)]">Turquoise accessible</p>
                  <p className="text-sm text-secondary">Ratio de contraste 5.2:1 - WCAG AA ✓</p>
                </div>
              </div>

              <div>
                <div
                  className="h-20 w-full rounded-t-md flex items-end"
                  style={{ backgroundColor: 'var(--color-secondary-accessible)' }}
                >
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md">
                    #003955
                  </div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-[var(--color-secondary-accessible)]">Bleu accessible</p>
                  <p className="text-sm text-secondary">Ratio de contraste 8.1:1 - WCAG AAA ✓</p>
                </div>
              </div>

              <div>
                <div
                  className="h-20 w-full rounded-t-md flex items-end"
                  style={{ backgroundColor: 'var(--color-tertiary-accessible)' }}
                >
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md">
                    #b8420f
                  </div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-[var(--color-tertiary-accessible)]">Orange accessible</p>
                  <p className="text-sm text-secondary">Ratio de contraste 4.6:1 - WCAG AA ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note accessibilité */}
        <p className="mt-4 text-sm text-secondary">
          Les versions accessibles garantissent un ratio de contraste WCAG AA (4.5:1 minimum).
        </p>
      </section>

      {/* Utilisation des couleurs */}
      <section className="mb-12 border-l-4 border-l-[var(--color-tertiary)] pl-4">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">Utilisation des couleurs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">Couleurs principales</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div
                  className="w-4 h-4 rounded-full mt-1 mr-2"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                ></div>
                <span>
                  <strong className="text-[var(--color-primary)]">Turquoise</strong> - Couleur principale pour
                  éléments interactifs, liens et accents
                </span>
              </li>
              <li className="flex items-start">
                <div
                  className="w-4 h-4 rounded-full mt-1 mr-2"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                ></div>
                <span>
                  <strong className="text-[var(--color-secondary)]">Bleu foncé</strong> - Titres, textes importants
                  et éléments d'autorité
                </span>
              </li>
              <li className="flex items-start">
                <div
                  className="w-4 h-4 rounded-full mt-1 mr-2"
                  style={{ backgroundColor: 'var(--color-tertiary)' }}
                ></div>
                <span>
                  <strong className="text-[var(--color-tertiary)]">Orange</strong> - Uniquement pour accentuation :
                  bordures, badges, icônes et mise en valeur
                </span>
              </li>
            </ul>

            <div className="border-l-4 border-l-[var(--color-tertiary)] bg-[var(--color-tertiary-bg-accessible)] p-3 text-sm mt-4">
              <p className="font-medium">Configuration validée</p>
              <p className="mt-1">
                Le système avec dégradé pour CTA (avec effet brillance), turquoise pour les boutons
                primaires et orange pour accentuation offre la meilleure hiérarchie visuelle.
              </p>
            </div>
          </div>

          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">Hiérarchie visuelle</h3>
            <div className="space-y-4">
              <div className="p-3 rounded-md bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-center font-medium relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
                <span className="relative z-10">
                  Actions principales / CTA (dégradé avec effet brillance)
                </span>
              </div>
              <div className="p-3 rounded-md bg-[var(--color-primary)] text-white text-center font-medium">
                Éléments interactifs importants
              </div>
              <div className="p-3 rounded-md bg-[var(--color-secondary)] text-white text-center font-medium">
                Informations clés et titres
              </div>
              <div className="p-3 rounded-md border border-[var(--color-tertiary)] text-center font-medium">
                Accentuation visuelle avec l'orange
              </div>
            </div>

            <ul className="space-y-3 text-sm mt-4">
              <li className="flex items-start">
                <div className="w-4 h-4 rounded-full mt-1 mr-2 gradient-primary"></div>
                <span>
                  Le dégradé en CTA attire fortement l'attention, idéal pour actions importantes
                  mais doit être utilisé avec parcimonie
                </span>
              </li>
              <li className="flex items-start">
                <div
                  className="w-4 h-4 rounded-full mt-1 mr-2"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                ></div>
                <span>
                  Le turquoise en primaire maintient une bonne lisibilité tout en se distinguant
                  clairement
                </span>
              </li>
              <li className="flex items-start">
                <div
                  className="w-4 h-4 rounded-full mt-1 mr-2"
                  style={{ backgroundColor: 'var(--color-tertiary)' }}
                ></div>
                <span>
                  L'orange comme accentuation est très attirant visuellement mais risque de
                  concurrencer les autres éléments s'il est utilisé en excès
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Typographie */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">Typographie</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">Noto Sans</h3>
            <p className="mb-4 text-sm text-secondary">
              Police principale pour titres (italique gras) et éléments d&apos;interface.
            </p>

            <div className="mb-3">
              <span className="block text-xs text-tertiary mb-1">H1 - Noto Sans Bold Italic</span>
              <span
                className="block text-4xl font-bold italic text-[var(--color-secondary)]"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Des sites qui vous ressemblent
              </span>
            </div>

            <div className="mb-3">
              <span className="block text-xs text-tertiary mb-1">H2 - Noto Sans Bold Italic</span>
              <span
                className="block text-2xl font-bold italic text-[var(--color-secondary)]"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                L&apos;authenticité digitale
              </span>
            </div>

            <div className="mb-3">
              <span className="block text-xs text-tertiary mb-1">H3 - Noto Sans Bold</span>
              <span
                className="block text-xl font-bold text-[var(--color-secondary)]"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Expérience sur mesure
              </span>
            </div>
          </div>

          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">Questrial</h3>
            <p className="mb-4 text-sm text-secondary">
              Police secondaire pour texte courant et contenus.
            </p>

            <div className="mb-3">
              <span className="block text-xs text-tertiary mb-1">Corps de texte - Regular</span>
              <span className="block text-base text-[var(--text-primary)]" style={{ fontFamily: 'sans-serif' }}>
                Nous créons des interfaces digitales personnalisées qui capturent l&apos;essence,
                les valeurs et la vision uniques de chaque client. Notre approche artisanale nous
                différencie des solutions standardisées.
              </span>
            </div>

            <div className="mb-3">
              <span className="block text-xs text-tertiary mb-1">Texte mis en avant</span>
              <span
                className="block text-base font-medium text-[var(--text-primary)]"
                style={{ fontFamily: 'sans-serif' }}
              >
                Une immersion profonde dans votre univers pour créer une expérience digitale
                authentique.
              </span>
            </div>

            <div>
              <span className="block text-xs text-tertiary mb-1">Petit texte / Labels</span>
              <span className="block text-sm text-[var(--text-primary)]" style={{ fontFamily: 'sans-serif' }}>
                Interfaces personnalisées • Design sur mesure • Accompagnement continu
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Composants atomiques */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">Composants atomiques</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Boutons */}
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">Boutons</h3>

            <div className="space-y-4">
              <div>
                <Button variant="gradient" className="w-full relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
                  <span className="relative z-10">Bouton CTA (dégradé)</span>
                </Button>
                <p className="text-xs text-tertiary mt-1">
                  Pour les actions principales, avec effet brillance au survol
                </p>
              </div>

              <div>
                <Button variant="primary" className="w-full">
                  Bouton primaire
                </Button>
                <p className="text-xs text-tertiary mt-1">Turquoise - éléments interactifs</p>
              </div>

              <div>
                <Button variant="secondary" className="w-full">
                  Bouton secondaire
                </Button>
                <p className="text-xs text-tertiary mt-1">Bleu foncé - autorité</p>
              </div>

              <div>
                <Button variant="outline" className="w-full">
                  Bouton outline
                </Button>
                <p className="text-xs text-tertiary mt-1">Actions alternatives</p>
              </div>

              <div>
                <a href="#" className="inline-flex items-center text-[var(--color-primary)] hover:!text-[#d85014] border-b-2 border-[var(--color-tertiary)] transition-colors">
                  Lien signature →
                </a>
                <p className="text-xs text-tertiary mt-1">Navigation et liens textuels</p>
              </div>
            </div>
          </div>

          {/* Badges et accents */}
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">Badges et accents</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-[var(--color-secondary)]">Badges</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="tertiary">Nouveau</Badge>
                  <Badge variant="primary">Principal</Badge>
                  <Badge variant="secondary">Info</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 text-[var(--color-secondary)]">Bordures d'accentuation</h4>
                <div className="p-3 border-l-4 border-l-[var(--color-tertiary)] bg-[var(--color-tertiary-bg-accessible)]">
                  Élément avec bordure orange
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2 text-[var(--color-secondary)]">Accents colorés</h4>
                <div className="flex gap-2">
                  <div className="w-8 h-8 flex items-center justify-center text-[var(--color-tertiary)]">
                    <Icon name="Star" />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center text-[var(--color-primary)]">
                    <Icon name="Heart" />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center text-[var(--color-secondary)]">
                    <Icon name="CheckCircle" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cartes et conteneurs */}
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-secondary)]">Cartes et conteneurs</h3>

            <div className="space-y-4">
              <div className="p-4 border border-color rounded-md hover:shadow-md transition-all">
                <h4 className="font-bold text-[var(--color-secondary)]">Carte simple</h4>
                <p className="text-sm text-secondary mt-2">Conteneur basique pour informations</p>
              </div>

              <div className="rounded-md overflow-hidden border border-color hover:shadow-md transition-all">
                <div
                  className="h-20"
                  style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}
                ></div>
                <div className="p-4">
                  <h4 className="font-bold text-[var(--color-secondary)]">Carte média</h4>
                  <p className="text-sm text-secondary mt-2">
                    Avec zone d&apos;image/média en haut
                  </p>
                </div>
              </div>

              <div className="p-4 border-l-4 border-l-[var(--color-tertiary)] bg-[var(--color-tertiary-bg-accessible)]">
                <p className="text-sm text-[var(--text-primary)]">
                  Élément de mise en avant avec bordure orange
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principes d'utilisation des couleurs */}
      <section className="mb-12 p-6 border border-dashed border-[var(--color-tertiary)] rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">Principes d'utilisation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--color-secondary)] border-b border-b-[var(--color-tertiary)] pb-1 inline-block">
              Utilisation correcte des couleurs
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start">
                <div className="text-green-500 mr-2">
                  <Icon name="Check" size={16} />
                </div>
                <span>
                  Utiliser le <strong>dégradé avec effet brillance</strong> pour les boutons CTA
                  principaux
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-2">
                  <Icon name="Check" size={16} />
                </div>
                <span>
                  Utiliser l'<strong>orange</strong> comme élément d'accentuation (bordures, badges)
                </span>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-2">
                  <Icon name="Check" size={16} />
                </div>
                <span>Maintenir un bon contraste texte/fond</span>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mr-2">
                  <Icon name="Check" size={16} />
                </div>
                <span>Appliquer l'orange avec parcimonie pour maintenir son impact</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--color-secondary)] border-b border-b-[var(--color-tertiary)] pb-1 inline-block">
              À éviter
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start">
                <div className="text-red-500 mr-2">
                  <Icon name="X" size={16} />
                </div>
                <span>Ne pas utiliser l'orange comme couleur de fond principale</span>
              </li>
              <li className="flex items-start">
                <div className="text-red-500 mr-2">
                  <Icon name="X" size={16} />
                </div>
                <span>Éviter le texte orange sur fond orange (même avec transparence)</span>
              </li>
              <li className="flex items-start">
                <div className="text-red-500 mr-2">
                  <Icon name="X" size={16} />
                </div>
                <span>Ne pas utiliser de boutons CTA orange (préférer le dégradé)</span>
              </li>
              <li className="flex items-start">
                <div className="text-red-500 mr-2">
                  <Icon name="X" size={16} />
                </div>
                <span>Éviter l'accumulation excessive d'éléments orange dans une zone</span>
              </li>
            </ul>
          </div>
        </div>

        </section>

      {/* Liens vers d'autres ressources */}
      <div className="text-center mt-12">
        <Link
          href="/ds-lab"
          className="inline-flex items-center text-[var(--color-primary)] hover:!text-[#d85014] border-b-2 border-[var(--color-tertiary)] transition-colors"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Retour au DS Lab
        </Link>
      </div>
    </div>
  );
};

export default DesignSystem;
