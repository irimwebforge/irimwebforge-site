import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';

export const metadata = {
  title: 'Politique de confidentialité | IRIM Webforge',
  description: 'Politique de confidentialité du site IRIM Webforge - Protection de vos données personnelles et respect de votre vie privée.',
  robots: 'noindex, nofollow'
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Typography variant="h1" className="mb-8">
            Politique de confidentialité
          </Typography>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <Typography variant="p" className="text-secondary mb-6">
                <em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</em>
              </Typography>
              
              <Typography variant="p" className="text-secondary">
                IRIM Webforge s'engage à protéger votre vie privée et à traiter vos données personnelles de manière transparente et sécurisée. Cette politique de confidentialité vous informe sur la façon dont nous collectons, utilisons et protégeons vos informations personnelles.
              </Typography>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                1. Responsable du traitement
              </Typography>
              <Typography variant="p" className="text-secondary">
                <strong>IRIM Webforge</strong><br />
                Responsable : Eric Zuber<br />
                Adresse : 11 route de Paris, 67117 Ittenheim, France<br />
                Email : contact@irimwebforge.com<br />
                Téléphone : 06 78 76 45 59
              </Typography>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                2. Données collectées
              </Typography>
              
              <div className="space-y-4">
                <div>
                  <Typography variant="h3" className="mb-2 text-lg font-semibold">
                    2.1 Données collectées directement
                  </Typography>
                  <Typography variant="p" className="text-secondary">
                    Lorsque vous nous contactez via le formulaire de contact ou par email, nous collectons :
                  </Typography>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-secondary">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone (optionnel)</li>
                    <li>Nom de l'entreprise (optionnel)</li>
                    <li>Message et détails de votre demande</li>
                  </ul>
                </div>

                <div>
                  <Typography variant="h3" className="mb-2 text-lg font-semibold">
                    2.2 Données collectées automatiquement
                  </Typography>
                  <Typography variant="p" className="text-secondary">
                    Lors de votre visite sur notre site, nous collectons automatiquement :
                  </Typography>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-secondary">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et version</li>
                    <li>Pages visitées et temps passé</li>
                    <li>Référent (site depuis lequel vous venez)</li>
                    <li>Données techniques de connexion</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                3. Finalités du traitement
              </Typography>
              <Typography variant="p" className="text-secondary mb-4">
                Nous utilisons vos données personnelles pour :
              </Typography>
              <ul className="list-disc list-inside space-y-1 text-secondary">
                <li>Répondre à vos demandes de contact et devis</li>
                <li>Vous fournir nos services professionnels</li>
                <li>Améliorer la qualité et la performance de notre site</li>
                <li>Respecter nos obligations légales</li>
                <li>Assurer la sécurité de notre site web</li>
              </ul>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                4. Base légale du traitement
              </Typography>
              <Typography variant="p" className="text-secondary">
                Le traitement de vos données personnelles est fondé sur :
              </Typography>
              <ul className="list-disc list-inside mt-2 space-y-1 text-secondary">
                <li><strong>Votre consentement</strong> : pour les demandes de contact</li>
                <li><strong>L'intérêt légitime</strong> : pour l'amélioration de nos services et la sécurité</li>
                <li><strong>L'exécution contractuelle</strong> : pour la fourniture de nos services</li>
                <li><strong>Les obligations légales</strong> : pour la conservation de certaines données</li>
              </ul>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                5. Conservation des données
              </Typography>
              <Typography variant="p" className="text-secondary">
                Nous conservons vos données personnelles :
              </Typography>
              <ul className="list-disc list-inside mt-2 space-y-1 text-secondary">
                <li><strong>Demandes de contact</strong> : 3 ans maximum</li>
                <li><strong>Données de navigation</strong> : 13 mois maximum</li>
                <li><strong>Données clients</strong> : durée de la relation commerciale + 5 ans</li>
                <li><strong>Données comptables</strong> : 10 ans (obligation légale)</li>
              </ul>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                6. Partage des données
              </Typography>
              <Typography variant="p" className="text-secondary">
                Nous ne vendons, n'échangeons et ne transférons pas vos données personnelles à des tiers, sauf :
              </Typography>
              <ul className="list-disc list-inside mt-2 space-y-1 text-secondary">
                <li>Avec votre consentement explicite</li>
                <li>À nos prestataires techniques (hébergement, outils de développement) sous contrat de confidentialité</li>
                <li>Si la loi l'exige ou dans le cadre d'une procédure judiciaire</li>
              </ul>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                7. Sécurité des données
              </Typography>
              <Typography variant="p" className="text-secondary">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
              </Typography>
              <ul className="list-disc list-inside mt-2 space-y-1 text-secondary">
                <li>Chiffrement SSL/HTTPS</li>
                <li>Accès sécurisé et limité aux données</li>
                <li>Sauvegarde régulière des données</li>
                <li>Mise à jour régulière des systèmes de sécurité</li>
              </ul>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                8. Vos droits
              </Typography>
              <Typography variant="p" className="text-secondary mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </Typography>
              <ul className="list-disc list-inside space-y-1 text-secondary">
                <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
                <li><strong>Droit d'effacement</strong> : supprimer vos données sous certaines conditions</li>
                <li><strong>Droit de limitation</strong> : limiter le traitement de vos données</li>
                <li><strong>Droit de portabilité</strong> : récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition</strong> : vous opposer au traitement pour motifs légitimes</li>
                <li><strong>Droit de retrait du consentement</strong> : à tout moment</li>
              </ul>
              
              <Typography variant="p" className="text-secondary mt-4">
                Pour exercer ces droits, contactez-nous à : <strong>contact@irimwebforge.com</strong>
              </Typography>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                9. Cookies et technologies similaires
              </Typography>
              <Typography variant="p" className="text-secondary">
                Notre site utilise des technologies essentielles au bon fonctionnement :
              </Typography>
              <ul className="list-disc list-inside mt-2 space-y-1 text-secondary">
                <li><strong>Cookies techniques</strong> : nécessaires au fonctionnement du site</li>
                <li><strong>Analytics</strong> : pour améliorer l'expérience utilisateur (anonymisés)</li>
              </ul>
              <Typography variant="p" className="text-secondary mt-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
              </Typography>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                10. Transferts internationaux
              </Typography>
              <Typography variant="p" className="text-secondary">
                Nos données sont hébergées au sein de l'Union Européenne. Si des transferts vers des pays tiers sont nécessaires, ils s'effectuent uniquement vers des pays offrant un niveau de protection adéquat ou avec des garanties appropriées.
              </Typography>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                11. Modifications de cette politique
              </Typography>
              <Typography variant="p" className="text-secondary">
                Cette politique de confidentialité peut être mise à jour occasionnellement. Nous vous informerons de tout changement significatif par email ou via une notification sur notre site.
              </Typography>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                12. Contact et réclamations
              </Typography>
              <Typography variant="p" className="text-secondary">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous :
              </Typography>
              <div className="mt-4 space-y-2 text-secondary">
                <Typography variant="p">
                  <strong>Email :</strong> contact@irimwebforge.com
                </Typography>
                <Typography variant="p">
                  <strong>Téléphone :</strong> 06 78 76 45 59
                </Typography>
                <Typography variant="p">
                  <strong>Courrier :</strong> IRIM Webforge, 11 route de Paris, 67117 Ittenheim, France
                </Typography>
              </div>
              
              <Typography variant="p" className="text-secondary mt-4">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
              </Typography>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
