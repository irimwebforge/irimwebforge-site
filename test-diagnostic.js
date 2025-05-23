const nodemailer = require('nodemailer');
require('dotenv').config();

async function diagnosticEmail() {
  console.log('🔍 Diagnostic de routage email...\n');

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

    console.log('🎯 Configuration détectée:');
    console.log(`   Authentification: ${process.env.EMAIL_USER}`);
    console.log(`   Envoi FROM: ${process.env.EMAIL_FROM}`);
    console.log(`   Destination TO: ${process.env.EMAIL_TO}\n`);

    // Test 1: Auto-envoi (même adresse)
    console.log('📧 Test 1: Auto-envoi...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: '🧪 Test 1 - Auto-envoi',
      text: 'Test 1 réussi - même adresse'
    });
    console.log('✅ Test 1 envoyé\n');

    // Test 2: Envoi vers contact@ avec FROM authentifié
    console.log('📧 Test 2: Vers contact@ avec FROM authentifié...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Authentifié
      to: 'contact@irimwebforge.com',
      subject: '🧪 Test 2 - FROM authentifié vers contact',
      text: 'Test 2 - FROM authentifié vers contact@'
    });
    console.log('✅ Test 2 envoyé\n');

    // Test 3: Configuration originale
    console.log('📧 Test 3: Configuration originale...');
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: '🧪 Test 3 - Configuration originale',
      text: 'Test 3 - configuration .env exacte'
    });
    console.log('✅ Test 3 envoyé\n');

    console.log('🎉 Tous les tests diagnostiques envoyés !');
    console.log('📩 Vérifiez TOUTES les boîtes de réception ET dossiers spam:');
    console.log(`   - ${process.env.EMAIL_USER}`);
    console.log(`   - contact@irimwebforge.com`);
    console.log('\n⏰ Attendez 2-3 minutes pour la livraison');

  } catch (error) {
    console.error('❌ Erreur diagnostic:', error);
  }
}

diagnosticEmail(); 