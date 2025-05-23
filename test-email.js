const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmailConfiguration() {
  console.log('🧪 Test de la configuration email...\n');
  
  // Vérifier les variables d'environnement
  console.log('📋 Variables d\'environnement:');
  console.log(`  EMAIL_SERVER: ${process.env.EMAIL_SERVER}`);
  console.log(`  EMAIL_PORT: ${process.env.EMAIL_PORT}`);
  console.log(`  EMAIL_SECURE: ${process.env.EMAIL_SECURE}`);
  console.log(`  EMAIL_USER: ${process.env.EMAIL_USER}`);
  console.log(`  EMAIL_PASSWORD: ${'*'.repeat(process.env.EMAIL_PASSWORD?.length || 0)}`);
  console.log(`  EMAIL_FROM: ${process.env.EMAIL_FROM}`);
  console.log(`  EMAIL_TO: ${process.env.EMAIL_TO}\n`);

  try {
    // Créer le transporteur
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log('🔌 Test de connexion SMTP...');
    await transporter.verify();
    console.log('✅ Connexion SMTP réussie !\n');

    // Envoyer un email de test
    console.log('📧 Envoi d\'un email de test...');
    const testEmailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: '🧪 Test de configuration email - IrimWebForge',
      html: `
        <h1>Test de configuration email</h1>
        <p>Cet email confirme que la configuration email fonctionne correctement.</p>
        <p><strong>Date du test:</strong> ${new Date().toLocaleString('fr-FR')}</p>
        <p><strong>Configuration testée:</strong></p>
        <ul>
          <li>Serveur: ${process.env.EMAIL_SERVER}</li>
          <li>Port: ${process.env.EMAIL_PORT}</li>
          <li>Sécurisé: ${process.env.EMAIL_SECURE}</li>
          <li>Utilisateur: ${process.env.EMAIL_USER}</li>
        </ul>
        <hr>
        <p><em>Email de test généré automatiquement</em></p>
      `,
    };

    const result = await transporter.sendMail(testEmailOptions);
    console.log('✅ Email de test envoyé avec succès !');
    console.log(`📨 Message ID: ${result.messageId}\n`);

    // Test avec un email de confirmation client (simulation)
    console.log('📧 Test d\'email de confirmation client...');
    const clientTestEmail = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO, // On s'envoie le test à nous-mêmes
      subject: '🧪 Test de confirmation client - IrimWebForge',
      html: `
        <h1>Merci Jean-Test !</h1>
        <p>J'ai bien reçu votre demande et je vous contacterai dans les 24 heures pour organiser notre conversation.</p>
        <p>Voici un récapitulatif de vos informations :</p>
        <hr>
        <div>
          <strong>Prénom:</strong> Jean-Test<br><br>
          <strong>Activité:</strong> Test de configuration<br><br>
          <strong>Email:</strong> test@example.com<br><br>
        </div>
        <hr>
        <p>À très bientôt,</p>
        <p><strong>Eric Zuber</strong><br>IrimWebForge<br>eric.zuber@irimwebforge.com</p>
      `,
    };

    const clientResult = await transporter.sendMail(clientTestEmail);
    console.log('✅ Email de confirmation client envoyé avec succès !');
    console.log(`📨 Message ID: ${clientResult.messageId}\n`);

    console.log('🎉 Tous les tests sont passés avec succès !');
    console.log('📩 Vérifiez votre boîte de réception pour confirmer la réception des emails.');

  } catch (error) {
    console.error('❌ Erreur lors du test:', error);
    
    if (error.code === 'EAUTH') {
      console.log('\n💡 Suggestion: Vérifiez vos identifiants Gmail et assurez-vous que:');
      console.log('   - La validation en deux étapes est activée');
      console.log('   - Vous utilisez un mot de passe d\'application (pas le mot de passe principal)');
      console.log('   - Le compte Gmail autorise les applications moins sécurisées (si nécessaire)');
      console.log('\n🔗 Pour créer un mot de passe d\'application:');
      console.log('   1. Allez sur https://myaccount.google.com');
      console.log('   2. Sécurité > Validation en 2 étapes > Mots de passe d\'application');
      console.log('   3. Générez un nouveau mot de passe pour "Mail"');
      console.log('   4. Remplacez EMAIL_PASSWORD dans votre fichier .env');
    } else if (error.code === 'ECONNECTION') {
      console.log('\n💡 Suggestion: Problème de connexion réseau ou serveur SMTP');
    } else if (error.code === 'ETIMEDOUT') {
      console.log('\n💡 Suggestion: Timeout de connexion - vérifiez votre connexion internet');
    } else {
      console.log('\n💡 Erreur inattendue - vérifiez votre configuration');
    }
  }
}

// Lancer le test
testEmailConfiguration(); 