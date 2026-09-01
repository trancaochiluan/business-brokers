const MINIMUM_SUBMIT_DURATION = 700;

const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration));

for (const form of document.querySelectorAll('[data-contact-form]')) {
  const submitButton = form.querySelector('[data-contact-submit]');
  const submitSpinner = form.querySelector('[data-contact-spinner]');
  const submitLabel = form.querySelector('[data-contact-submit-label]');
  const status = form.querySelector('[data-contact-status]');
  let submitting = false;
  let submitted = false;

  if (!(form instanceof HTMLFormElement)) continue;

  const setStatus = (message, isError = false) => {
    if (!(status instanceof HTMLElement)) return;
    status.textContent = message;
    status.classList.toggle('text-[var(--color-accent-hover)]', isError);
    status.classList.toggle('text-[var(--color-accent)]', !isError);
  };

  const setBusy = (isBusy) => {
    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = isBusy;
      submitButton.toggleAttribute('aria-busy', isBusy);
    }
    if (submitSpinner instanceof HTMLElement) submitSpinner.classList.toggle('hidden', !isBusy);
    if (submitLabel instanceof HTMLElement) {
      submitLabel.textContent = isBusy ? form.dataset.submittingLabel || '' : form.dataset.submitLabel || '';
    }
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting || submitted) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    submitting = true;
    setBusy(true);
    setStatus(form.dataset.submittingLabel || '');
    const startedAt = Date.now();

    try {
      const response = await fetch(form.action || '/api/register/', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok || payload?.ok !== true) throw new Error('Submission failed');

      await wait(Math.max(0, MINIMUM_SUBMIT_DURATION - (Date.now() - startedAt)));
      submitted = true;
      setStatus(form.dataset.successMessage || '');
      setBusy(false);
    } catch {
      await wait(Math.max(0, MINIMUM_SUBMIT_DURATION - (Date.now() - startedAt)));
      setStatus(form.dataset.errorMessage || '', true);
      setBusy(false);
    } finally {
      submitting = false;
    }
  });
}
