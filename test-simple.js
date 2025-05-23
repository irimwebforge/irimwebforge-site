const nodemailer = require('nodemailer');
require('dotenv').config();

async function testSimpleEmail() {
  console.log('🧪 Test simplifié - envoi à la même adresse...\n');

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Test avec la MÊME adresse pour éviter les problèmes de routage
    const sameAddressTest = {
      from: process.env.EMAIL_USER, // Même adresse que l'authentification
      to: process.env.EMAIL_USER, // Même adresse que l'envoi
      subject: '🧪 Test AUTO-ENVOI - IRIM Webforge',
      html: `
        <h1>🎯 Test d'auto-envoi</h1>
        <p>Si vous recevez cet email, la configuration fonctionne !</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
        <p><strong>Envoyé de:</strong> ${process.env.EMAIL_USER}</p>
        <p><strong>Envoyé à:</strong> ${process.env.EMAIL_USER}</p>
        <hr>
        <p style="color: green;"><strong>✅ Configuration email validée</strong></p>
      `,
    };

    console.log(`📧 Envoi de ${process.env.EMAIL_USER} vers ${process.env.EMAIL_USER}...`);
    const result = await transporter.sendMail(sameAddressTest);

    console.log("✅ Email d'auto-envoi réussi !");
    console.log(`📨 Message ID: ${result.messageId}`);
    console.log(`📬 Vérifiez ${process.env.EMAIL_USER} (y compris le dossier spam)`);
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

testSimpleEmail();
