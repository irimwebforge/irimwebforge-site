import { Typography } from '@/components/atoms/Typography';
import { Container } from '@/components/atoms/Container';
import { PageHeader } from '@/components/organisms/PageHeader';

export const metadata = {
  title: 'Mentions légales | IRIM Webforge',
  description:
    "Mentions légales du site IRIM Webforge - Studio de création digitale spécialisé dans la conception d'interfaces sur mesure.",
  robots: 'noindex, nofollow',
};

export default function MentionsLegales() {
  return (
    <>
      <PageHeader
        title="Mentions légales"
        description="Informations légales concernant le site IRIM Webforge"
        align="center"
        size="medium"
      />

      <section className="bg-section-primary py-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <Typography variant="h2" className="mb-4">
                Informations légales
              </Typography>

              <div className="space-y-4">
                <div>
                  <Typography variant="h3" className="mb-2">
                    Éditeur du site
                  </Typography>
                  <Typography variant="p" className="text-secondary">
                    <strong>IRIM Webforge</strong>
                    <br />
                    Auto-entrepreneur
                    <br />
                    Responsable de la publication : Eric Zuber
                    <br />
                    11 route de Paris
                    <br />
                    67117 Ittenheim, France
                    <br />
                    Téléphone : 06 78 76 45 59
                    <br />
                    Email : contact@irimwebforge.com
                  </Typography>
                </div>

                <div>
                  <Typography variant="h3" className="mb-2">
                    Siret
                  </Typography>
                  <Typography variant="p" className="text-secondary">
                    [À remplir avec votre numéro SIRET]
                  </Typography>
                </div>

                <div>
                  <Typography variant="h3" className="mb-2">
                    Hébergeur
                  </Typography>
                  <Typography variant="p" className="text-secondary">
                    Vercel Inc.
                    <br />
                    340 S Lemon Ave #4133
                    <br />
                    Walnut, CA 91789, USA
                  </Typography>
                </div>
              </div>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                Propriété intellectuelle
              </Typography>
              <Typography variant="p" className="text-secondary mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le
                droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont
                réservés, y compris pour les documents téléchargeables et les représentations
                iconographiques et photographiques.
              </Typography>
              <Typography variant="p" className="text-secondary">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il
                soit est formellement interdite sauf autorisation expresse du directeur de la
                publication.
              </Typography>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                Responsabilité
              </Typography>
              <Typography variant="p" className="text-secondary mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site
                est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des
                omissions ou des lacunes.
              </Typography>
              <Typography variant="p" className="text-secondary">
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement,
                merci de bien vouloir le signaler par email à l'adresse contact@irimwebforge.com en
                décrivant le problème de la façon la plus précise possible.
              </Typography>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                Liens hypertextes
              </Typography>
              <Typography variant="p" className="text-secondary mb-4">
                Les liens hypertextes mis en place dans le cadre du présent site web en direction
                d'autres ressources présentes sur le réseau Internet ne sauraient engager la
                responsabilité de IRIM Webforge.
              </Typography>
              <Typography variant="p" className="text-secondary">
                De même, IRIM Webforge ne peut être tenu responsable du contenu des sites qui
                auraient un lien vers le présent site.
              </Typography>
            </section>

            <section>
              <Typography variant="h2" className="mb-4">
                Droit applicable
              </Typography>
              <Typography variant="p" className="text-secondary">
                Tant le présent site que les modalités et conditions de son utilisation sont régis
                par le droit français, quel que soit le lieu d'utilisation. En cas de contestation
                éventuelle, et après l'échec de toute tentative de recherche d'une solution amiable,
                les tribunaux français seront seuls compétents pour connaître de ce litige.
              </Typography>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
