const siteNavigation = document.querySelector('[data-site-navigation]');
const mobileDrawer = document.querySelector('[data-mobile-drawer]');
const mobileBackdrop = document.querySelector('[data-mobile-backdrop]');
const menuOpenButton = siteNavigation?.querySelector('[data-menu-open]');
const menuCloseButton = mobileDrawer?.querySelector('[data-menu-close]');

const updateDetailsState = (details) => {
  const summary = details.querySelector('summary');
  if (summary) summary.setAttribute('aria-expanded', details.open ? 'true' : 'false');
};

document.querySelectorAll('[data-desktop-more-menu]').forEach((details) => {
  let closeTimer;

  const openMenu = () => {
    window.clearTimeout(closeTimer);
    details.open = true;
    updateDetailsState(details);
  };

  const closeMenu = () => {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      if (!details.matches(':hover') && !details.contains(document.activeElement)) {
        details.open = false;
        updateDetailsState(details);
      }
    }, 120);
  };

  details.addEventListener('toggle', () => updateDetailsState(details));
  details.addEventListener('pointerenter', openMenu);
  details.addEventListener('pointerleave', closeMenu);
  details.addEventListener('focusin', openMenu);
  details.addEventListener('focusout', closeMenu);
  updateDetailsState(details);
});

document.querySelectorAll('[data-mobile-more-menu]').forEach((details) => {
  details.addEventListener('toggle', () => updateDetailsState(details));
  updateDetailsState(details);
});

if (mobileDrawer && mobileBackdrop && menuOpenButton && menuCloseButton) {
  let lastFocusedElement = null;

  const setDrawer = (isOpen, restoreFocus = true) => {
    if (isOpen) {
      lastFocusedElement = document.activeElement;
      mobileDrawer.classList.remove('translate-x-full');
      mobileDrawer.classList.add('translate-x-0');
      mobileBackdrop.classList.remove('pointer-events-none', 'opacity-0');
      mobileBackdrop.classList.add('pointer-events-auto', 'opacity-100');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      mobileBackdrop.setAttribute('aria-hidden', 'false');
      menuOpenButton.setAttribute('aria-expanded', 'true');
      document.body.classList.add('overflow-hidden');
      window.requestAnimationFrame(() => mobileDrawer.querySelector('nav a, nav summary')?.focus());
      return;
    }

    mobileDrawer.classList.remove('translate-x-0');
    mobileDrawer.classList.add('translate-x-full');
    mobileBackdrop.classList.remove('pointer-events-auto', 'opacity-100');
    mobileBackdrop.classList.add('pointer-events-none', 'opacity-0');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileBackdrop.setAttribute('aria-hidden', 'true');
    menuOpenButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');

    if (restoreFocus && lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
  };

  menuOpenButton.addEventListener('click', () => setDrawer(true));
  menuCloseButton.addEventListener('click', () => setDrawer(false));
  mobileBackdrop.addEventListener('click', () => setDrawer(false));
  mobileDrawer.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setDrawer(false, false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileDrawer.getAttribute('aria-hidden') === 'false') setDrawer(false);
  });
}
