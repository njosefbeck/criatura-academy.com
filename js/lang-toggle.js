function run() {
  const elements = document.querySelectorAll("div[data-toggle-lang]");

  if (!elements) {
    return;
  }

  function toggleLang(event) {
    const element = event.target;
    const english = element.getAttribute('data-en');
    const korean = element.getAttribute('data-ko');
    let currentLang = element.getAttribute('data-toggle-lang');
    let updatedHtml = english;
    if (currentLang === 'en') {
      updatedHtml = korean;
      currentLang = 'ko';
    } else {
      updatedHtml = english;
      currentLang = 'en';
    }
    element.innerHTML = updatedHtml;
    element.setAttribute('data-toggle-lang', currentLang);
  }

  for (const element of elements) {
    element.classList.add('cursor-pointer');
    element.addEventListener('click', toggleLang, false);
  }
}

run();