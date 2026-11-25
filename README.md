# vocalcoachingproject.net

Nuovo sito di Vocal Coaching Project di Stefano Volpe. Astro statico, pubblicato su Vercel.

- `npm install` e poi `npm run dev` per lavorare in locale (http://localhost:4321)
- Ogni push su GitHub crea un'anteprima su Vercel
- Le anteprime hanno `noindex` (vedi `vercel.json`): va tolto solo al lancio
- GTM si attiva solo sul dominio vocalcoachingproject.net, mai sulle anteprime

## Da completare prima del lancio
- GUID del form HubSpot in `src/data/site.ts`
- URL LinkedIn di Stefano in `src/data/site.ts`
- Audio "Ascolta Stefano" in `public/audio/ascolta-stefano.mp3`
- Pagine interne, redirect in `vercel.json`, pagine privacy e cookie (iubenda)
