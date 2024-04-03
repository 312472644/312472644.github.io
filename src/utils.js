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

/**
 * a标签页面跳转
 * @param {String} href
 */
export function toPage(href) {
  if (!href) return;
  const a = document.createElement('a');
  a.href = href;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
