export const THEME_STORAGE_KEY = "tema";

/** Roda antes da pintura para aplicar o tema salvo ou o do sistema. */
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="claro"&&t!=="escuro"){t=matchMedia("(prefers-color-scheme: dark)").matches?"escuro":"claro"}document.documentElement.dataset.theme=t}catch(e){}})()`;
