/**
 * 初始化主题
 */
export function initTheme() {
  const linkThemeDOM = document.getElementById('theme-link');
  const cacheTheme = localStorage.getItem('theme');
  const themeHref = `/themes/${cacheTheme || 'aura-light-green'}.css`;
  if (linkThemeDOM) {
    linkThemeDOM.href = themeHref;
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = themeHref;
  link.id = 'theme-link';
  document.head.appendChild(link);
}
