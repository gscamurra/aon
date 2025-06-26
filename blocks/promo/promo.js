import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  // Recupera eventuale metadato, altrimenti fallback a /promo
  const promoMeta = getMetadata('promo');
  const promoPath = promoMeta ? new URL(promoMeta, window.location).pathname : '/promo';
  await loadFragment(block, promoPath);
}

