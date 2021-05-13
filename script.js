let inputs = document.querySelectorAll('.field');
let button = document.querySelector('.form__foot');
let errorValidate = false;

function validateField () {
  if (!errorValidate) {
  	return
  }
  for (let input of inputs) {
    let wrong = input.parentNode.querySelector('.wrong');
    let empty = input.parentNode.querySelector('.empty');
    let inputParent = input.parentNode
    if (!input.value) {
      empty.classList.remove('hidden');
      wrong.classList.add('hidden');
      inputParent.style.borderBottomColor = '#FC7E57';
    } 
    else if (input.validity.patternMismatch) {
      wrong.classList.remove('hidden');
      empty.classList.add('hidden');
      inputParent.style.borderBottomColor = '#FC7E57';
    }
    else {
      wrong.classList.add('hidden');
      empty.classList.add('hidden');
      inputParent.style.borderBottomColor = 'rgba(255, 255, 255, 0.5)';
    }
  }
}

for (let input of inputs) {
  input.addEventListener('input', function() {
    validateField()
  })
}
button.onclick = function() {
  errorValidate = true;
	validateField()
}       