(() => {
  const root = document.documentElement;
  const probe = document.createElement('div');
  probe.className = 'force-light-probe';
  root.append(probe);

  const styles = getComputedStyle(probe);
  const isAutoDark =
    styles.backgroundColor !== 'rgb(255, 255, 255)' || styles.colorScheme === 'dark';
  probe.remove();

  root.classList.add('force-light');
  root.classList.toggle('auto-dark-theme', isAutoDark);
})();
