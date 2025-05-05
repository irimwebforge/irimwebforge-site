import React from 'react';

const DesignSystem = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto surface-secondary">
      <h1 className="text-4xl font-bold mb-8 text-primary">Design System IrimWebForge</h1>

      {/* Couleurs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Palette de couleurs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Couleurs principales</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div className="h-20 w-full rounded-t-md flex items-end" style={{ backgroundColor: 'var(--color-primary)' }}>
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md">#00A0A0</div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-primary">Turquoise - Primaire</p>
                  <p className="text-sm text-secondary">Authenticité, créativité, innovation</p>
                </div>
              </div>

              <div>
                <div className="h-20 w-full rounded-t-md flex items-end" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md">#004466</div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-primary">Bleu foncé - Secondaire</p>
                  <p className="text-sm text-secondary">Expertise, profondeur, confiance</p>
                </div>
              </div>

              <div>
                <div className="h-20 w-full rounded-t-md flex items-end" style={{ backgroundColor: 'var(--color-tertiary)' }}>
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md text-primary">#F06424</div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-primary">Orange - Tertiaire</p>
                  <p className="text-sm text-secondary">Chaleur, personnalisation, énergie</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary">Neutres et accents</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <div className="h-20 w-full rounded-t-md flex items-end" style={{ backgroundColor: 'var(--color-black)' }}>
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md">#111111</div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-primary">Noir doux</p>
                  <p className="text-sm text-secondary">Texte principal, contraste</p>
                </div>
              </div>

              <div>
                <div className="h-20 w-full rounded-t-md flex items-end border border-color border-b-0" style={{ backgroundColor: 'var(--color-white)' }}>
                  <div className="p-2 surface-tertiary text-xs rounded-tr-md">#EEEEEE</div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-primary">Blanc doux</p>
                  <p className="text-sm text-secondary">Arrière-plans, espaces</p>
                </div>
              </div>

              <div>
                <div className="h-20 w-full rounded-t-md flex items-end gradient-primary">
                  <div className="p-2 surface-primary bg-opacity-90 text-xs rounded-tr-md">Dégradé</div>
                </div>
                <div className="p-2 surface-primary border border-color rounded-b-md">
                  <p className="font-semibold text-primary">Dégradé signature</p>
                  <p className="text-sm text-secondary">Éléments d&apos;accent, CTAs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typographie */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Typographie</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-primary">Noto Sans</h3>
            <p className="mb-4 text-sm text-secondary">Police principale pour titres (italique gras) et éléments d&apos;interface.</p>

            <div className="mb-3">
              <span className="block text-xs text-tertiary mb-1">H1 - Noto Sans Bold Italic</span>
              <span className="block text-4xl font-bold italic text-primary" style={{fontFamily: 'Noto Sans, sans-serif'}}>
                Des sites qui vous ressemblent
              </span>
            </div>

            <div className="mb-3">
              <span className="block text-xs text-tertiary mb-1">H2 - Noto Sans Bold Italic</span>
              <span className="block text-2xl font-bold italic text-primary" style={{fontFamily: 'Noto Sans, sans-serif'}}>
                L&apos;authenticité digitale
              </span>
            </div>

            <div className="mb-3">
              <span className="block text-xs text-tertiary mb-1">H3 - Noto Sans Bold</span>
              <span className="block text-xl font-bold text-primary" style={{fontFamily: 'Noto Sans, sans-serif'}}>
                Expérience sur mesure
              </span>
            </div>
          </div>

          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-primary">Questrial</h3>
            <p className="mb-4 text-sm text-secondary">Police secondaire pour texte courant et contenus.</p>

            <div className="mb-3">
              <span className="block text-xs text-tertiary mb-1">Corps de texte - Regular</span>
              <span className="block text-base text-primary" style={{fontFamily: 'sans-serif'}}>
                Nous créons des interfaces digitales personnalisées qui capturent l&apos;essence, les valeurs et la vision uniques de chaque client. Notre approche artisanale nous différencie des solutions standardisées.
              </span>
            </div>

            <div className="mb-3">
              <span className="block text-xs text-tertiary mb-1">Texte mis en avant</span>
              <span className="block text-base font-medium text-primary" style={{fontFamily: 'sans-serif'}}>
                Une immersion profonde dans votre univers pour créer une expérience digitale authentique.
              </span>
            </div>

            <div>
              <span className="block text-xs text-tertiary mb-1">Petit texte / Labels</span>
              <span className="block text-sm text-primary" style={{fontFamily: 'sans-serif'}}>
                Interfaces personnalisées • Design sur mesure • Accompagnement continu
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Composants atomiques */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">Composants atomiques</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Boutons */}
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-primary">Boutons</h3>

            <div className="space-y-4">
              <div>
                <button className="w-full py-3 px-6 text-white rounded-md font-medium hover:opacity-90 transition-all" style={{ backgroundColor: 'var(--color-primary)' }}>
                  Bouton primaire
                </button>
              </div>

              <div>
                <button className="w-full py-3 px-6 text-white rounded-md font-medium hover:opacity-90 transition-all" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  Bouton secondaire
                </button>
              </div>

              <div>
                <button className="w-full py-3 px-6 surface-primary text-[var(--color-primary)] border border-[var(--color-primary)] rounded-md font-medium hover:surface-tertiary transition-all">
                  Bouton outline
                </button>
              </div>

              <div>
                <button className="text-[var(--color-primary)] font-medium hover:underline">
                  Lien textuel →
                </button>
              </div>
            </div>
          </div>

          {/* Champs de formulaire */}
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-primary">Champs de formulaire</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-primary">Champ texte</label>
                <input
                  type="text"
                  className="w-full p-3 border border-color rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent surface-primary text-primary"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-primary">Sélection</label>
                <select className="w-full p-3 border border-color rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent surface-primary text-primary">
                  <option>Type de projet</option>
                  <option>Site web personnalisé</option>
                  <option>Application sur mesure</option>
                  <option>Interface admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-primary">Message</label>
                <textarea
                  className="w-full p-3 border border-color rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent surface-primary text-primary"
                  placeholder="Parlez-moi de votre projet et de votre univers"
                  rows={3}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Cartes et conteneurs */}
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-primary">Cartes et conteneurs</h3>

            <div className="space-y-4">
              <div className="p-4 border border-color rounded-md hover:shadow-md transition-all">
                <h4 className="font-bold text-[var(--color-secondary)]">Carte simple</h4>
                <p className="text-sm text-secondary mt-2">Conteneur basique pour informations</p>
              </div>

              <div className="rounded-md overflow-hidden border border-color hover:shadow-md transition-all">
                <div className="h-20" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}></div>
                <div className="p-4">
                  <h4 className="font-bold text-[var(--color-secondary)]">Carte média</h4>
                  <p className="text-sm text-secondary mt-2">Avec zone d&apos;image/média en haut</p>
                </div>
              </div>

              <div className="p-4 border-l-4" style={{ borderLeftColor: 'var(--color-tertiary)', backgroundColor: 'var(--color-tertiary)', opacity: 0.05 }}>
                <p className="text-sm italic text-primary">Élément de mise en avant ou citation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Éléments d'interface spécifiques */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-primary">Éléments d&apos;interface spécifiques</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Navigation */}
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-primary">Navigation</h3>

            <div className="py-3 px-4 surface-primary border border-color rounded-md flex justify-between items-center mb-6">
              <div className="font-bold text-xl" style={{fontFamily: 'Noto Sans, sans-serif'}}>
                <span style={{ color: 'var(--color-primary)' }}>IRIM</span><span style={{ color: 'var(--color-secondary)' }}>Webforge</span>
              </div>
              <div className="hidden md:flex space-x-4 text-sm">
                <a href="#" className="hover:text-[var(--color-primary)] text-primary">Accueil</a>
                <a href="#" className="hover:text-[var(--color-primary)] text-primary">Services</a>
                <a href="#" className="hover:text-[var(--color-primary)] text-primary">Projets</a>
                <a href="#" className="hover:text-[var(--color-primary)] text-primary">À propos</a>
                <a href="#" className="hover:text-[var(--color-primary)] text-primary">Contact</a>
              </div>
              <div className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>

            <div className="text-center font-bold text-xs italic uppercase tracking-wide mb-4 text-tertiary">
              Fil d&apos;Ariane
            </div>

            <div className="flex items-center text-sm text-secondary mb-6">
              <a href="#" className="hover:text-[var(--color-primary)]">Accueil</a>
              <span className="mx-2">›</span>
              <a href="#" className="hover:text-[var(--color-primary)]">Services</a>
              <span className="mx-2">›</span>
              <span style={{ color: 'var(--color-primary)' }}>Sites web personnalisés</span>
            </div>

            <div className="surface-tertiary p-3 rounded-md flex space-x-1 mb-6">
              <a href="#" className="flex-1 text-center py-2 rounded-md surface-primary shadow-sm font-medium text-sm text-primary">Vue d&apos;ensemble</a>
              <a href="#" className="flex-1 text-center py-2 rounded-md text-secondary hover:surface-primary hover:shadow-sm transition-all font-medium text-sm">Processus</a>
              <a href="#" className="flex-1 text-center py-2 rounded-md text-secondary hover:surface-primary hover:shadow-sm transition-all font-medium text-sm">Tarifs</a>
            </div>
          </div>

          {/* Sections de contenu */}
          <div className="surface-primary p-6 rounded-md border border-color">
            <h3 className="text-lg font-semibold mb-4 text-primary">Sections de contenu</h3>

            <div className="mb-6 pb-6 border-b border-color">
              <div className="mb-2 flex items-center">
                <div className="w-12 h-12 rounded-full" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.2 }}></div>
                <h4 className="font-bold text-[var(--color-secondary)] ml-3">Étape de processus</h4>
              </div>
              <p className="text-sm text-secondary mt-2 pl-16">Description de l&apos;étape avec explication détaillée du processus client.</p>
            </div>

            <div className="mb-6">
              <div className="p-4 surface-tertiary rounded-md">
                <div className="flex items-start">
                  <div className="mt-1 mr-3" style={{ color: 'var(--color-tertiary)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-primary">Conseil de personnalisation</h5>
                    <p className="text-sm text-secondary mt-1">Information utile ou conseil pour le client dans sa démarche.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-center p-5 border border-dashed border-color rounded-md">
                <div className="font-bold text-sm mb-2 text-primary">Appel à l&apos;action</div>
                <p className="text-xs text-secondary mb-3">Prêt à discuter de votre projet ?</p>
                <button className="py-2 px-4 gradient-primary text-white rounded-md text-sm font-medium">
                  Réserver une consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignSystem;