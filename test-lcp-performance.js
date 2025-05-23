#!/usr/bin/env node

/**
 * Script de test pour mesurer les métriques LCP et Core Web Vitals
 * Usage: node test-lcp-performance.js
 */

const { chromium } = require('playwright');

async function testLCPPerformance() {
  console.log('🚀 Lancement du test de performance LCP...\n');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    // Simuler un appareil mobile
    ...chromium.devices['iPhone 12'],
    // Simuler une connexion plus lente
    networkConditions: {
      downloadThroughput: 1.5 * 1024 * 1024, // 1.5 Mbps
      uploadThroughput: 750 * 1024, // 750 Kbps
      latency: 150 // 150ms
    }
  });
  
  const page = await context.newPage();
  
  // Collecter les métriques de performance
  const performanceMetrics = [];
  
  page.on('load', async () => {
    console.log('📱 Page chargée, collecte des métriques...');
    
    // Mesurer les Core Web Vitals
    const vitals = await page.evaluate(() => {
      return new Promise((resolve) => {
        const metrics = {};
        
        // Observer LCP
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            metrics.lcp = entries[entries.length - 1].startTime;
          }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Observer FID
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            metrics.fid = entries[0].processingStart - entries[0].startTime;
          }
        }).observe({ entryTypes: ['first-input'] });
        
        // Observer CLS
        new PerformanceObserver((list) => {
          let clsScore = 0;
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (!entry.hadRecentInput) {
              clsScore += entry.value;
            }
          });
          metrics.cls = clsScore;
        }).observe({ entryTypes: ['layout-shift'] });
        
        // Récupérer les métriques de navigation
        setTimeout(() => {
          const navTiming = performance.getEntriesByType('navigation')[0];
          if (navTiming) {
            metrics.ttfb = navTiming.responseStart - navTiming.requestStart;
            metrics.domLoaded = navTiming.domContentLoadedEventEnd - navTiming.navigationStart;
            metrics.loadComplete = navTiming.loadEventEnd - navTiming.navigationStart;
          }
          resolve(metrics);
        }, 3000); // Attendre 3 secondes pour collecter toutes les métriques
      });
    });
    
    performanceMetrics.push(vitals);
  });
  
  try {
    // Tester les pages principales
    const pagesToTest = [
      { url: 'http://localhost:3000/', name: 'Accueil' },
      { url: 'http://localhost:3000/a-propos/', name: 'À Propos' },
      { url: 'http://localhost:3000/contact/', name: 'Contact' },
      { url: 'http://localhost:3000/services/', name: 'Services' }
    ];
    
    for (const testPage of pagesToTest) {
      console.log(`\n📊 Test de: ${testPage.name} (${testPage.url})`);
      
      const startTime = Date.now();
      await page.goto(testPage.url, { waitUntil: 'networkidle' });
      const loadTime = Date.now() - startTime;
      
      // Attendre que les métriques soient collectées
      await page.waitForTimeout(3000);
      
      const metrics = performanceMetrics[performanceMetrics.length - 1] || {};
      
      console.log(`┌─────────────────────────────────────┐`);
      console.log(`│ Métriques pour ${testPage.name.padEnd(22)}│`);
      console.log(`├─────────────────────────────────────┤`);
      console.log(`│ LCP:           ${formatMetric(metrics.lcp, 'ms', 2500)}│`);
      console.log(`│ TTFB:          ${formatMetric(metrics.ttfb, 'ms', 800)}│`);
      console.log(`│ FID:           ${formatMetric(metrics.fid, 'ms', 100)}│`);
      console.log(`│ CLS:           ${formatMetric(metrics.cls, '', 0.1)}│`);
      console.log(`│ DOM Loaded:    ${formatMetric(metrics.domLoaded, 'ms', 1500)}│`);
      console.log(`│ Load Complete: ${formatMetric(metrics.loadComplete, 'ms', 3000)}│`);
      console.log(`│ Page Load:     ${formatMetric(loadTime, 'ms', 2000)}│`);
      console.log(`└─────────────────────────────────────┘`);
      
      // Évaluer la performance
      evaluatePerformance(testPage.name, metrics);
    }
    
  } catch (error) {
    console.error('❌ Erreur lors du test:', error.message);
    console.log('\n💡 Assurez-vous que le serveur local tourne:');
    console.log('   yarn build && yarn preview');
  } finally {
    await browser.close();
  }
}

function formatMetric(value, unit, threshold) {
  if (value === undefined) return 'N/A'.padEnd(17);
  
  const formattedValue = unit === 'ms' 
    ? `${Math.round(value)}${unit}` 
    : unit === '' 
      ? value.toFixed(3)
      : `${value}${unit}`;
  
  const status = value <= threshold ? '✅' : '⚠️';
  return `${status} ${formattedValue}`.padEnd(17);
}

function evaluatePerformance(pageName, metrics) {
  const scores = [];
  
  // Évaluation LCP
  if (metrics.lcp <= 1200) scores.push('LCP: Excellent');
  else if (metrics.lcp <= 2500) scores.push('LCP: Bon');
  else scores.push('LCP: Nécessite amélioration');
  
  // Évaluation TTFB
  if (metrics.ttfb <= 600) scores.push('TTFB: Excellent');
  else if (metrics.ttfb <= 800) scores.push('TTFB: Bon');
  else scores.push('TTFB: Nécessite amélioration');
  
  // Évaluation FID
  if (metrics.fid <= 50) scores.push('FID: Excellent');
  else if (metrics.fid <= 100) scores.push('FID: Bon');
  else scores.push('FID: Nécessite amélioration');
  
  // Évaluation CLS
  if (metrics.cls <= 0.05) scores.push('CLS: Excellent');
  else if (metrics.cls <= 0.1) scores.push('CLS: Bon');
  else scores.push('CLS: Nécessite amélioration');
  
  console.log(`\n🎯 Évaluation globale pour ${pageName}:`);
  scores.forEach(score => console.log(`   ${score}`));
  
  const excellentCount = scores.filter(s => s.includes('Excellent')).length;
  const bonCount = scores.filter(s => s.includes('Bon')).length;
  
  if (excellentCount >= 3) {
    console.log('   🏆 Performance exceptionnelle !');
  } else if (excellentCount + bonCount >= 3) {
    console.log('   👍 Bonne performance générale');
  } else {
    console.log('   ⚠️ Performance à améliorer');
  }
}

// Vérifier si le script est exécuté directement
if (require.main === module) {
  testLCPPerformance().catch(console.error);
}

module.exports = { testLCPPerformance }; 