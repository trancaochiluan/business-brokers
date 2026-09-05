import { focusValidationField, getValidationMessage, submitForm } from './request-form.js';

const STEP_TRANSITION_DELAY = 320;

for (const form of document.querySelectorAll('[data-buyer-form]')) {
  const steps = Array.from(form.querySelectorAll('[data-step]'));
  const backButton = form.querySelector('[data-buyer-back]');
  const nextButton = form.querySelector('[data-buyer-next]');
  const nextSpinner = form.querySelector('[data-buyer-next-spinner]');
  const nextLabel = form.querySelector('[data-buyer-next-label]');
  const submitButton = form.querySelector('[data-buyer-submit]');
  const submitSpinner = form.querySelector('[data-buyer-submit-spinner]');
  const submitLabel = form.querySelector('[data-buyer-submit-label]');
  const formShell = form.parentElement;
  const indicator = formShell?.querySelector('[data-step-indicator]');
  const progressFill = formShell?.querySelector('[data-progress-fill]');
  const status = formShell?.querySelector('[data-buyer-status]');
  let current = 0;
  let transitioning = false;
  let submitting = false;
  let submitted = false;

  if (!(form instanceof HTMLFormElement) || steps.length === 0) continue;

  const setStatus = (message, isError = false) => {
    if (!(status instanceof HTMLElement)) return;
    status.textContent = message;
    status.hidden = message.length === 0;
    status.classList.toggle('text-[var(--color-accent-hover)]', isError);
    status.classList.toggle('text-[var(--color-accent)]', !isError);
  };

  const setButtonBusy = (button, spinner, isBusy, label) => {
    if (button instanceof HTMLButtonElement) {
      button.disabled = isBusy;
      button.toggleAttribute('aria-busy', isBusy);
    }
    if (spinner instanceof HTMLElement) spinner.classList.toggle('hidden', !isBusy);
    if (label !== undefined && label.element instanceof HTMLElement) label.element.textContent = label.value;
  };

  const render = (focus = false) => {
    const stepNumber = current + 1;
    steps.forEach((step, index) => step.toggleAttribute('hidden', index !== current));
    if (indicator instanceof HTMLElement) {
      indicator.textContent = `${form.dataset.stepLabel || ''} ${stepNumber} ${form.dataset.stepOfLabel || ''} ${steps.length}`;
    }
    if (progressFill instanceof HTMLElement) progressFill.style.width = `${(stepNumber / steps.length) * 100}%`;
    if (backButton instanceof HTMLButtonElement) backButton.hidden = current === 0;
    if (nextButton instanceof HTMLButtonElement) nextButton.hidden = current === steps.length - 1;
    if (submitButton instanceof HTMLButtonElement) submitButton.hidden = current !== steps.length - 1;
    if (nextLabel instanceof HTMLElement) nextLabel.textContent = form.dataset.nextLabel || '';
    if (submitLabel instanceof HTMLElement) submitLabel.textContent = form.dataset.submitLabel || '';
    if (focus) {
      const control = steps[current].querySelector('input:not([type="hidden"]), select, textarea');
      if (control instanceof HTMLElement) control.focus();
    }
  };

  const validateStep = () => {
    let valid = true;
    const controls = steps[current].querySelectorAll('input, select, textarea');
    for (const control of controls) {
      if (!(control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement)) continue;
      if (!control.checkValidity()) {
        control.reportValidity();
        valid = false;
        break;
      }
    }

    const choiceGroups = steps[current].querySelectorAll('[data-choice-group]');
    choiceGroups.forEach((group) => {
      const hasChoice = group.querySelector('input[type="checkbox"]:checked') !== null;
      const error = group.parentElement?.querySelector('[data-step-error]');
      error?.toggleAttribute('hidden', hasChoice);
      if (!hasChoice) valid = false;
    });

    return valid;
  };

  const advance = () => {
    if (transitioning || submitting || submitted || current >= steps.length - 1 || !validateStep()) return;

    transitioning = true;
    setStatus('');
    setButtonBusy(nextButton, nextSpinner, true, {
      element: nextLabel,
      value: form.dataset.processingLabel || form.dataset.nextLabel || '',
    });
    if (backButton instanceof HTMLButtonElement) backButton.disabled = true;

    window.setTimeout(() => {
      current += 1;
      render(true);
      setButtonBusy(nextButton, nextSpinner, false, {
        element: nextLabel,
        value: form.dataset.nextLabel || '',
      });
      if (backButton instanceof HTMLButtonElement) backButton.disabled = false;
      transitioning = false;
    }, STEP_TRANSITION_DELAY);
  };

  const sendForm = async () => {
    if (transitioning || submitting || submitted || !validateStep()) return;

    submitting = true;
    setButtonBusy(nextButton, nextSpinner, false);
    setButtonBusy(submitButton, submitSpinner, true, {
      element: submitLabel,
      value: form.dataset.submittingLabel || '',
    });
    if (backButton instanceof HTMLButtonElement) backButton.disabled = true;
    setStatus('');

    try {
      const result = await submitForm(form);
      if (!result.ok) {
        if (result.validationFields.length > 0) {
          setStatus(getValidationMessage(form, result.validationFields), true);
          focusValidationField(form, result.validationFields);
          setButtonBusy(submitButton, submitSpinner, false, {
            element: submitLabel,
            value: form.dataset.submitLabel || '',
          });
          if (backButton instanceof HTMLButtonElement) backButton.disabled = false;
          return;
        }
        throw new Error('submission_failed');
      }

      submitted = true;
      form.classList.add('hidden');
      setStatus(form.dataset.successMessage || '');
      status?.focus();
    } catch {
      setStatus(form.dataset.errorMessage || '', true);
      setButtonBusy(submitButton, submitSpinner, false, {
        element: submitLabel,
        value: form.dataset.submitLabel || '',
      });
      if (backButton instanceof HTMLButtonElement) backButton.disabled = false;
    } finally {
      submitting = false;
    }
  };

  const phoneInput = form.querySelector('[data-phone-input]');
  phoneInput?.addEventListener('input', () => {
    if (!(phoneInput instanceof HTMLInputElement)) return;
    let digits = phoneInput.value.replace(/\D/g, '');
    if (digits.startsWith('84') && digits.length > 9) digits = `0${digits.slice(2)}`;
    digits = digits.slice(0, 10);
    if (!digits) phoneInput.value = '';
    else if (digits.length <= 4) phoneInput.value = digits;
    else if (digits.length <= 7) phoneInput.value = `${digits.slice(0, 4)} ${digits.slice(4)}`;
    else phoneInput.value = `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  });

  const allLocationCheckbox = form.querySelector('[data-location-checkbox="all"]');
  const otherLocationCheckboxes = Array.from(form.querySelectorAll('[data-location-checkbox="other"]'));
  const syncLocationChoices = () => {
    if (!(allLocationCheckbox instanceof HTMLInputElement)) return;
    otherLocationCheckboxes.forEach((checkbox) => {
      if (!(checkbox instanceof HTMLInputElement)) return;
      checkbox.disabled = allLocationCheckbox.checked;
      if (allLocationCheckbox.checked) checkbox.checked = false;
    });
  };
  allLocationCheckbox?.addEventListener('change', syncLocationChoices);
  otherLocationCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      if (checkbox instanceof HTMLInputElement && checkbox.checked && allLocationCheckbox instanceof HTMLInputElement) {
        allLocationCheckbox.checked = false;
        syncLocationChoices();
      }
    });
  });
  syncLocationChoices();

  backButton?.addEventListener('click', () => {
    if (current === 0 || transitioning || submitting) return;
    current -= 1;
    setStatus('');
    render(true);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (current < steps.length - 1) {
      advance();
      return;
    }
    void sendForm();
  });

  render();
}
