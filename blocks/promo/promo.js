import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  // Recupera eventuale metadato, altrimenti fallback a /promo
  const promoMeta = getMetadata('promo');
  const promoPath = promoMeta ? new URL(promoMeta, window.location).pathname : '/promo';
  await loadFragment(block, promoPath);
}

// Funzione per creare e inserire il div promo in pagina…
function injectPromoBlock() {
  const header = document.querySelector('header.header');
  // Se header esiste, crea il div "promo" e inseriscilo subito dopo
  if (header) {
    // Verifica che il div promo non sia già presente
    if (!document.querySelector('.promo')) {
      const promoDiv = document.createElement('div');
      promoDiv.className = 'promo';
      header.parentNode.insertBefore(promoDiv, header.nextSibling);
    }
  }
}

// Esegui subito la funzione dopo il caricamento del DOM
document.addEventListener('DOMContentLoaded', injectPromoBlock);