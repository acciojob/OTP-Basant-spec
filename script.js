inputs.forEach((input, index) => {
  input.addEventListener('input', function () {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
      updateFocusState(index + 1);
    }
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace' && !input.value && index > 0) {
      inputs[index - 1].focus();
      updateFocusState(index - 1);
    }
  });
});

// Function to manage the `focused` class
function updateFocusState(index) {
  inputs.forEach((el, i) => el.classList.toggle('focused', i === index));
}
