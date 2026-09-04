const REQUEST_TIMEOUT = 15_000;

const requestForm = async (form) => {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    return await fetch(form.action || '/api/register/', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
  } finally {
    window.clearTimeout(timeoutId);
  }
};

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
    status.hidden = message.length === 0;
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

    try {
      const response = await requestForm(form);
      const payload = await response.json().catch(() => null);
      if (!response.ok || payload?.ok !== true) throw new Error('Submission failed');

      submitted = true;
      setStatus(form.dataset.successMessage || '');
      setBusy(false);
      status?.focus();
    } catch {
      setStatus(form.dataset.errorMessage || '', true);
      setBusy(false);
    } finally {
      submitting = false;
    }
  });
}
