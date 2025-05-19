import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configurez votre transporteur d'email (SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true', // true pour 465, false pour les autres ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    // Récupérer les données du formulaire
    const formData = await request.json();

    // Formater les données pour l'email
    const formatFormData = (data: any) => {
      let formattedData = '';
      for (const key in data) {
        formattedData += `<strong>${formatFieldName(key)}:</strong> ${data[key]}<br><br>`;
      }
      return formattedData;
    };

    // Formater les noms des champs pour l'affichage
    const formatFieldName = (fieldName: string) => {
      const fieldNameMap: Record<string, string> = {
        fullName: 'Nom complet',
        profession: 'Profession',
        email: 'Email',
        phone: 'Téléphone',
        timeWasted: 'Temps consacré aux tâches administratives',
        mainChallenges: 'Défis principaux',
        frustration: 'Source de frustration',
        projectType: 'Type de projet',
        projectTimeline: 'Calendrier du projet',
        projectDescription: 'Description du projet',
        additionalInfo: 'Informations supplémentaires',
        // Ajoutez d'autres mappings selon vos champs
      };

      return fieldNameMap[fieldName] || fieldName;
    };

    // Construire l'email
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'votre-email@gmail.com',
      to: process.env.EMAIL_TO || 'contact@irimwebforge.com',
      subject: `Nouvelle demande de contact - ${formData.fullName}`,
      html: `
        <h1>Nouvelle demande de contact</h1>
        <p>Une nouvelle personne souhaite échanger avec vous:</p>
        <hr>
        <div>
          ${formatFormData(formData)}
        </div>
        <hr>
        <p>N'oubliez pas de répondre dans les 24h.</p>
      `,
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    // Envoyer également un email de confirmation au client
    const clientMailOptions = {
      from: process.env.EMAIL_FROM || 'contact@irimwebforge.com',
      to: formData.email,
      subject: 'Confirmation de votre demande de contact - IrimWebForge',
      html: `
        <h1>Merci pour votre message, ${formData.fullName}!</h1>
        <p>J'ai bien reçu votre demande et je vous contacterai dans les 24 heures pour organiser notre conversation.</p>
        <p>Voici un récapitulatif des informations que vous m'avez communiquées :</p>
        <hr>
        <div>
          ${formatFormData(formData)}
        </div>
        <hr>
        <p>À très bientôt,</p>
        <p><strong>Eric Zuber</strong><br>IrimWebForge</p>
      `,
    };

    await transporter.sendMail(clientMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: "Erreur lors de l'envoi du formulaire" }, { status: 500 });
  }
}
