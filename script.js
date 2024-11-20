// Select all the input fields with the class "code"
const inputs = document.querySelectorAll('.code');

// Add event listeners to each input
inputs.forEach((input, index) => {
  input.addEventListener('input', function () {
    // If a user types a digit, move to the next input
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', function (e) {
    // If Backspace is pressed and the input is empty, move to the previous input
    if (e.key === 'Backspace') {
      if (!input.value && index > 0) {
        inputs[index - 1].focus();
      }
    }

    // Prevent entering anything other than digits
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      e.preventDefault();
    }
  });

  // Handle arrow navigation
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft' && index > 0) {
      inputs[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});
