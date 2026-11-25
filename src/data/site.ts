// Dati condivisi. Gli ID vanno confermati prima del lancio.
export const site = {
  name: 'Vocal Coaching Project di Stefano Volpe',
  url: 'https://www.vocalcoachingproject.net',
  gtm: 'GTM-TW48TQ38',
  // Form HubSpot HOME_MainForm_V2_25112026, con il flusso delle 5 email.
  // Il form della home attuale (HOME_MainForm_20092026) resta intatto per il sito vecchio.
  hubspot: { portalId: '146880742', formGuid: '0c4ba236-f7b7-496b-8245-95cffe9304ab' },
  cal: 'https://cal.com/stefano-volpe-vocal/colloquio-conoscitivo-30-min',
  linkedin: 'https://www.linkedin.com/in/stefanovolpe/', // TODO: verificare URL
  address: 'Via San Domenico, 7 · 40124 Bologna',
  vat: '03482951203',
};

export const nav = [
  { label: 'Il metodo', href: '/metodo/' },
  { label: 'Per le aziende', href: '/aziende/' },
  { label: 'Storie', href: '/storie/' },
  { label: 'Chi sono', href: '/chi-sono/' },
  { label: 'Approfondimenti', href: '/approfondimenti/' },
];
