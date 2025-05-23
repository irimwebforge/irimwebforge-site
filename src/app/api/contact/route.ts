import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Récupérer les données du formulaire
    const formData = await request.json();
    
    // Log des données reçues (sans données sensibles)
    console.log('Formulaire reçu:', { 
      prenom: formData.prenom, 
      activite: formData.activite,
      hasEmail: !!formData.email 
    });

    // Vérifier que nous avons au moins le prénom
    if (!formData.prenom) {
      return NextResponse.json({ error: "Le prénom est requis" }, { status: 400 });
    }

    // Formater les noms des champs pour l'affichage
    const formatFieldName = (fieldName: string) => {
      const fieldNameMap: Record<string, string> = {
        prenom: 'Prénom',
        activite: 'Activité',
        experience: 'Expérience',
        timeWasted: 'Temps administratif hebdomadaire',
        mainChallenges: 'Principale tâche chronophage',
        currentSolution: 'Organisation actuelle',
        projectType: 'Type de projet',
        projectTimeline: 'Calendrier du projet',
        projectDescription: 'Description du projet',
        additionalInfo: 'Informations supplémentaires',
        email: 'Email',
      };

      return fieldNameMap[fieldName] || fieldName;
    };

    // Formater les données pour l'email
    const formatFormData = (data: Record<string, unknown>) => {
      let formattedData = '';
      for (const key in data) {
        if (data[key] && data[key] !== '') {
          formattedData += `<strong>${formatFieldName(key)}:</strong> ${data[key]}<br><br>`;
        }
      }
      return formattedData;
    };

    // Sauvegarder les données localement en cas d'échec email
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Nouvelle demande de contact:`, formatFormData(formData));

    // Tentative d'envoi d'email seulement si la configuration est disponible
    let emailSent = false;
    
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      try {
        // Configurer le transporteur email
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_SERVER || 'smtp.gmail.com',
          port: Number(process.env.EMAIL_PORT) || 587,
          secure: process.env.EMAIL_SECURE === 'true',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        // Vérifier la connexion
        await transporter.verify();
        console.log('Connexion SMTP validée');

        // Construire l'email avec l'adresse authentifiée pour une meilleure délivrabilité
        const mailOptions = {
          from: process.env.EMAIL_USER, // Utiliser l'adresse authentifiée
          to: process.env.EMAIL_TO || 'eric.zuber@irimwebforge.com',
          subject: `🚀 Nouveau prospect : ${formData.prenom} - ${formData.activite}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Nouvelle demande de contact</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
              <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #0891b2 0%, #0f766e 100%); padding: 32px 24px; text-align: center;">
                  <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">🎯 Nouveau Prospect !</h1>
                  <p style="color: #e0f2fe; margin: 8px 0 0 0; font-size: 16px;">Quelqu'un souhaite échanger avec vous</p>
                </div>

                <!-- Content -->
                <div style="padding: 32px 24px;">
                  
                  <!-- Prospect Info -->
                  <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0891b2; margin-bottom: 24px;">
                    <h2 style="color: #0c4a6e; margin: 0 0 16px 0; font-size: 20px; display: flex; align-items: center;">
                      👋 ${formData.prenom} - ${formData.activite}
                    </h2>
                    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                      ${formData.email ? `<span style="background: white; padding: 8px 12px; border-radius: 6px; font-size: 14px;">📧 ${formData.email}</span>` : ''}
                      ${formData.experience ? `<span style="background: white; padding: 8px 12px; border-radius: 6px; font-size: 14px;">⏱️ ${formData.experience === 'debut' ? 'Débutant' : formData.experience === 'etabli' ? 'Établi' : 'Expérimenté'}</span>` : ''}
                    </div>
                  </div>

                  <!-- Details -->
                  <div style="background: #fefefe; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h3 style="color: #374151; margin: 0 0 16px 0; font-size: 18px;">📝 Détails de la demande</h3>
                    <div style="line-height: 1.6;">
                      ${formatFormData(formData)}
                    </div>
                  </div>

                  <!-- Actions -->
                  <div style="text-align: center; margin: 32px 0;">
                    <a href="mailto:${formData.email}" style="background: linear-gradient(135deg, #0891b2 0%, #0f766e 100%); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; margin: 0 8px;">
                      ✉️ Répondre directement
                    </a>
                  </div>

                </div>

                <!-- Footer -->
                <div style="background: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e5e7eb;">
                  <p style="color: #6b7280; margin: 0; font-size: 14px;">
                    📅 Reçu le ${new Date().toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <p style="color: #9ca3af; margin: 8px 0 0 0; font-size: 12px;">Email automatique depuis irimwebforge.com</p>
                </div>

              </div>
            </body>
            </html>
          `,
        };

        // Envoyer l'email principal
        await transporter.sendMail(mailOptions);
        console.log('Email principal envoyé avec succès');

        // Envoyer l'email de confirmation si un email est fourni
        if (formData.email) {
          const clientMailOptions = {
            from: process.env.EMAIL_USER, // Utiliser l'adresse authentifiée
            to: formData.email,
            subject: `✨ Merci ${formData.prenom} ! Votre demande est bien reçue`,
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Confirmation de votre demande</title>
              </head>
              <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
                <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                  
                  <!-- Header -->
                  <div style="background: linear-gradient(135deg, #0891b2 0%, #0f766e 100%); padding: 32px 24px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">✨ Merci ${formData.prenom} !</h1>
                    <p style="color: #e0f2fe; margin: 8px 0 0 0; font-size: 16px;">Votre demande est bien reçue</p>
                  </div>

                  <!-- Content -->
                  <div style="padding: 32px 24px;">
                    
                    <!-- Confirmation Message -->
                    <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 24px; text-align: center;">
                      <h2 style="color: #059669; margin: 0 0 12px 0; font-size: 20px;">🎉 Demande enregistrée avec succès</h2>
                      <p style="color: #047857; margin: 0; font-size: 16px;">Je vous recontacte dans les <strong>24 heures</strong> pour organiser notre conversation.</p>
                    </div>

                    <!-- What's Next -->
                    <div style="background: #fefefe; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                      <h3 style="color: #374151; margin: 0 0 16px 0; font-size: 18px;">🗓️ Prochaines étapes</h3>
                      <div style="line-height: 1.8; color: #4b5563;">
                        <div style="display: flex; align-items: center; margin-bottom: 12px;">
                          <span style="background: #dbeafe; color: #1d4ed8; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-right: 12px;">1</span>
                          <span><strong>Sous 24h :</strong> Email avec créneaux disponibles</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 12px;">
                          <span style="background: #dbeafe; color: #1d4ed8; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-right: 12px;">2</span>
                          <span><strong>45 minutes :</strong> Discussion libre sur vos besoins</span>
                        </div>
                        <div style="display: flex; align-items: center;">
                          <span style="background: #dbeafe; color: #1d4ed8; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-right: 12px;">3</span>
                          <span><strong>Si ça matche :</strong> Proposition de projet adaptée</span>
                        </div>
                      </div>
                    </div>

                    <!-- Recap -->
                    <div style="background: #f8fafc; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                      <h3 style="color: #374151; margin: 0 0 16px 0; font-size: 18px;">📝 Récapitulatif de votre demande</h3>
                      <div style="line-height: 1.6; font-size: 14px; color: #6b7280;">
                        ${formatFormData(formData)}
                      </div>
                    </div>

                  </div>

                  <!-- Footer -->
                  <div style="background: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e5e7eb;">
                    <div style="margin-bottom: 16px;">
                      <strong style="color: #374151; font-size: 16px;">Eric Zuber</strong><br>
                      <span style="color: #6b7280; font-size: 14px;">IRIM Webforge - Développeur Web</span>
                    </div>
                    <div style="margin-bottom: 16px;">
                      <a href="mailto:eric.zuber@irimwebforge.com" style="color: #0891b2; text-decoration: none; margin: 0 8px;">📧 Email</a>
                      <a href="https://www.linkedin.com/in/eric-zuber-b93bb7162/" style="color: #0891b2; text-decoration: none; margin: 0 8px;">💼 LinkedIn</a>
                    </div>
                    <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                      À très bientôt ! 🚀
                    </p>
                  </div>

                </div>
              </body>
              </html>
            `,
          };

          await transporter.sendMail(clientMailOptions);
          console.log('Email de confirmation envoyé avec succès');
        }

        emailSent = true;
      } catch (emailError) {
        console.error('Erreur lors de l\'envoi de l\'email:', emailError);
        // On continue sans échouer - les données sont sauvegardées dans les logs
      }
    } else {
      console.log('Configuration email manquante - sauvegarde en logs seulement');
    }

    // Retourner le succès même si l'email a échoué
    return NextResponse.json({ 
      success: true, 
      emailSent,
      message: emailSent 
        ? "Demande reçue et email envoyé avec succès" 
        : "Demande reçue et sauvegardée"
    });

  } catch (error) {
    console.error('Erreur générale dans l\'API contact:', error);
    
    // Retourner une erreur plus spécifique
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
    
    return NextResponse.json({ 
      error: "Erreur lors du traitement de votre demande",
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    }, { status: 500 });
  }
}
