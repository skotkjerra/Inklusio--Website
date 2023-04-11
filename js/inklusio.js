/**
  Script to mimic Bootstraps toggle functionality
*/

function toggle(el) {
  const btn = el;
  const targetId = btn.getAttribute('data-target');
  const target = document.querySelector(targetId);

  let isExpanded = btn.getAttribute('aria-expanded') === 'true';

  console.log('IS Expanded')
  console.log(isExpanded);

  btn.addEventListener('click', () => {
    if (isExpanded) {
      console.log('Here when Hiding the bar')
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


// Function for DropDown
function setupDropdown(id) {
  var dropdown = document.getElementById(id);
  var menu = dropdown.querySelector('.dropdown-menu');

  dropdown.addEventListener('click', function () {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target)) {
      menu.style.display = 'none';
    }
  });
}

// Call the function with the IDs of the dropdown elements
setupDropdown('languageDropdownMobile');
setupDropdown('languageDropdownDesktop');