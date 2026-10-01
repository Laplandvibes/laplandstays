/**
 * Vite-liitännäinen: sovelluksen `react/jsx-runtime`- ja `react/jsx-dev-runtime`-tuonnit →
 * cjkJsxRuntime.ts / cjkJsxDevRuntime.ts, jotka lisäävät CJK-otsikoihin <wbr>-fraasirajat (fraasit.ts).
 * Sama rakenne kuin src/shared/router/trailingSlashPlugin.ts: yksi kohta kattaa jokaisen otsikon
 * (myös jaetut komponentit) ilman, että 121 otsikkoa muokataan käsin.
 *
 * Ohjausta EI tehdä node_modules-paketeille eikä src/lib/cjk/-tiedostoille (ne tarvitsevat Reactin oman).
 *
 * Käyttö vite.config.ts:ssä: plugins: [cjkOtsikot(), trailingSlashLinks(), react(), …]
 */
import type { Plugin } from 'vite';

const norm = (p: string) => p.replace(/\\/g, '/').toLowerCase();

export function cjkOtsikot(): Plugin {
  let src = '';
  let kansio = '';
  return {
    name: 'lv-cjk-otsikot',
    enforce: 'pre',
    configResolved(config) {
      src = `${norm(config.root)}/src/`;
      kansio = `${config.root}/src/lib/cjk`;
    },
    resolveId(source, importer) {
      if (source !== 'react/jsx-runtime' && source !== 'react/jsx-dev-runtime') return null;
      if (!importer) return null;
      const from = norm(importer);
      if (!from.startsWith(src) || from.includes('/node_modules/') || from.startsWith(`${norm(kansio)}/`)) return null;
      return `${kansio}/${source === 'react/jsx-runtime' ? 'cjkJsxRuntime.ts' : 'cjkJsxDevRuntime.ts'}`;
    },
  };
}
