(function () {
  'use strict';

  const STORAGE_KEY = 'breadboard-project-folio-v2';
  const cards = [...document.querySelectorAll('[data-folio-card]')];
  const fields = [...document.querySelectorAll('[data-save]')];
  const status = document.getElementById('save-status');
  let state = load();
  let timer = null;

  function load() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (error) {
      return {};
    }
  }

  function save(message = 'Saved in this browser') {
    window.clearTimeout(timer);
    if (status) status.textContent = 'Saving...';
    timer = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        if (status) status.textContent = message;
      } catch (error) {
        if (status) status.textContent = 'Browser storage is full - use Download backup now';
      }
    }, 180);
  }

  function restoreFields() {
    fields.forEach(field => {
      field.value = state[field.dataset.save] || '';
      field.addEventListener('input', () => {
        state[field.dataset.save] = field.value;
        save('Draft saved');
      });
    });
    cards.forEach(card => {
      const key = card.dataset.folioCard;
      const preview = card.querySelector('[data-preview]');
      if (state[`photo-${key}`]) {
        preview.src = state[`photo-${key}`];
        preview.hidden = false;
        card.classList.add('has-photo');
      }
    });
  }

  function compressImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const image = new Image();
        image.onerror = reject;
        image.onload = () => {
          const max = 1200;
          const ratio = Math.min(1, max / Math.max(image.width, image.height));
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(image.width * ratio));
          canvas.height = Math.max(1, Math.round(image.height * ratio));
          canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', .72));
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  cards.forEach(card => {
    const key = card.dataset.folioCard;
    const input = card.querySelector('[data-photo]');
    const preview = card.querySelector('[data-preview]');
    const clear = card.querySelector('[data-clear-photo]');
    input.addEventListener('change', async () => {
      const file = input.files && input.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        if (status) status.textContent = 'Choose an image file';
        return;
      }
      try {
        state[`photo-${key}`] = await compressImage(file);
        preview.src = state[`photo-${key}`];
        preview.hidden = false;
        card.classList.add('has-photo');
        save('Photo and notes saved');
      } catch (error) {
        if (status) status.textContent = 'That photo could not be prepared';
      }
    });
    clear.addEventListener('click', () => {
      delete state[`photo-${key}`];
      input.value = '';
      preview.removeAttribute('src');
      preview.hidden = true;
      card.classList.remove('has-photo');
      save('Photo removed');
    });
  });

  document.getElementById('print-button').addEventListener('click', () => {
    save('Saved - opening print view');
    window.setTimeout(() => window.print(), 250);
  });

  document.getElementById('backup-button').addEventListener('click', () => {
    save('Backup prepared');
    const blob = new Blob([JSON.stringify({version: 2, project: 'Bread Board', savedAt: new Date().toISOString(), state}, null, 2)], {type: 'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'breadboard-folio-backup.json';
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  });

  const restoreInput = document.getElementById('restore-input');
  document.getElementById('restore-button').addEventListener('click', () => restoreInput.click());
  restoreInput.addEventListener('change', () => {
    const file = restoreInput.files && restoreInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const backup = JSON.parse(reader.result);
        if (!backup || backup.project !== 'Bread Board' || !backup.state) throw new Error('invalid');
        localStorage.setItem(STORAGE_KEY, JSON.stringify(backup.state));
        location.reload();
      } catch (error) {
        if (status) status.textContent = 'This is not a valid Bread Board folio backup';
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('reset-button').addEventListener('click', () => {
    if (!window.confirm('Clear all Bread Board folio notes and saved photos from this browser? This cannot be undone.')) return;
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  });

  restoreFields();
}());
