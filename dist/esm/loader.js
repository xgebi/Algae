import { p as promiseResolve, b as bootstrapLazy } from './index-4aaadd77.js';
export { s as setNonce } from './index-4aaadd77.js';

/*
 Stencil Client Patch Esm v3.0.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["al-button",[[1,"al-button",{"variant":[1]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map