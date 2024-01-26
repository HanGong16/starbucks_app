const search = document.querySelector('.search');

const textInput = search.querySelector('input');

search.addEventListener('click', function () {
  textInput.focus();
});

textInput.addEventListener('focus', function () {
  search.classList.add('focused');
  textInput.setAttribute('placeholder', '통합검색');
});

textInput.addEventListener('blur', function () {
  search.classList.remove('focused');
  textInput.setAttribute('placeholder', '');
});
