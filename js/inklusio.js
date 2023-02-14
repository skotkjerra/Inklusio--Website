/**
  Script to mimic Bootstraps toggle functionality
*/

function toggle(el) {
  const btn = el;
  const targetId = btn.getAttribute('data-target');
  const target = document.querySelector(targetId);

  let isExpanded = btn.getAttribute('aria-expanded') === 'true';

  console.log(isExpanded);

  btn.addEventListener('click', () => {
    if (isExpanded) {
      btn.setAttribute('aria-expanded', 'false');
      target.setAttribute('aria-hidden', 'true');
    } else {
      btn.setAttribute('aria-expanded', 'true');
      target.setAttribute('aria-hidden', 'false');
    }
    target.classList.toggle('show');

    isExpanded = !isExpanded;
  });
}

const allTogglers = Array.from(document.querySelectorAll('[data-toggle]'));
allTogglers.forEach(toggle);
