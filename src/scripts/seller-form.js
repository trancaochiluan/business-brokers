import { requestForm } from './request-form.js';

const STEP_TRANSITION_DELAY = 320;

for (const form of document.querySelectorAll('[data-seller-form]')) {
  const steps = Array.from(form.querySelectorAll('[data-step]'));
  const backButton = form.querySelector('[data-step-back]');
  const nextButton = form.querySelector('[data-step-next]');
  const nextLabel = form.querySelector('[data-step-next-label]');
  const stepSpinner = form.querySelector('[data-step-spinner]');
  const status = form.parentElement?.querySelector('[data-form-status]');
  let current = 0;
  let transitioning = false;
  let submitting = false;
  let submitted = false;

  if (!(form instanceof HTMLFormElement) || steps.length === 0) continue;

  const otherIndustryField = form.querySelector('[data-other-industry-field]');
  const otherIndustryInput = form.querySelector('[data-other-industry-input]');

  const syncOtherIndustry = () => {
    const otherIndustryOption = form.querySelector('input[name="industry"][data-other-industry]:checked');
    const isOtherSelected = otherIndustryOption instanceof HTMLInputElement;

    if (otherIndustryField instanceof HTMLElement) otherIndustryField.hidden = !isOtherSelected;
    if (otherIndustryInput instanceof HTMLInputElement) {
      otherIndustryInput.disabled = !isOtherSelected;
      otherIndustryInput.required = isOtherSelected;
      if (!isOtherSelected) otherIndustryInput.value = '';
    }
  };

  const setStatus = (message, isError = false) => {
    if (!(status instanceof HTMLElement)) return;
    status.textContent = message;
    status.hidden = message.length === 0;
    status.classList.toggle('text-[var(--color-accent-hover)]', isError);
    status.classList.toggle('text-[var(--color-accent)]', !isError);
  };

  const setNextButtonBusy = (isBusy, label) => {
    if (nextButton instanceof HTMLButtonElement) {
      nextButton.disabled = isBusy;
      nextButton.toggleAttribute('aria-busy', isBusy);
    }
    if (stepSpinner instanceof HTMLElement) stepSpinner.classList.toggle('hidden', !isBusy);
    if (label !== undefined && nextLabel instanceof HTMLElement) nextLabel.textContent = label;
  };

  const render = (focus = false) => {
    steps.forEach((step, index) => step.toggleAttribute('hidden', index !== current));
    if (backButton instanceof HTMLButtonElement) backButton.hidden = current === 0;
    if (nextLabel instanceof HTMLElement) {
      nextLabel.textContent = current === steps.length - 1
        ? form.dataset.submitLabel || ''
        : form.dataset.nextLabel || '';
    }
    if (focus) {
      const control = steps[current].querySelector('input:not([type="hidden"]), select, textarea');
      if (control instanceof HTMLElement) control.focus();
    }
  };

  const validateCurrentStep = () => {
    const controls = steps[current].querySelectorAll('input, select, textarea');
    for (const control of controls) {
      if (control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement) {
        if (!control.checkValidity()) {
          control.reportValidity();
          return false;
        }
      }
    }
    return true;
  };

  const advance = () => {
    if (transitioning || submitting || submitted || current >= steps.length - 1 || !validateCurrentStep()) return;

    transitioning = true;
    setStatus('');
    setNextButtonBusy(true, form.dataset.processingLabel || form.dataset.nextLabel || '');
    if (backButton instanceof HTMLButtonElement) backButton.disabled = true;

    window.setTimeout(() => {
      current += 1;
      render(true);
      setNextButtonBusy(false, current === steps.length - 1
        ? form.dataset.submitLabel || ''
        : form.dataset.nextLabel || '');
      if (backButton instanceof HTMLButtonElement) backButton.disabled = false;
      transitioning = false;
    }, STEP_TRANSITION_DELAY);
  };

  const sendForm = async () => {
    if (transitioning || submitting || submitted || !validateCurrentStep()) return;

    submitting = true;
    setNextButtonBusy(true, form.dataset.submittingLabel || '');
    if (backButton instanceof HTMLButtonElement) backButton.disabled = true;
    setStatus('');

    try {
      const response = await requestForm(form);
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) throw new Error('submission_failed');

      submitted = true;
      form.classList.add('hidden');
      setStatus(form.dataset.successMessage || '');
      status?.focus();
    } catch {
      setStatus(form.dataset.errorMessage || '', true);
      setNextButtonBusy(false, form.dataset.submitLabel || '');
      if (backButton instanceof HTMLButtonElement) backButton.disabled = false;
    } finally {
      submitting = false;
    }
  };

  backButton?.addEventListener('click', () => {
    if (current === 0 || transitioning || submitting) return;
    current -= 1;
    setStatus('');
    render(true);
  });

  form.addEventListener('change', (event) => {
    if (event.target instanceof HTMLInputElement && event.target.name === 'industry') syncOtherIndustry();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (current < steps.length - 1) {
      advance();
      return;
    }
    void sendForm();
  });

  syncOtherIndustry();
  render();
}
