// Select all the input fields with the class "code"
const inputs = document.querySelectorAll('.code');

// Add event listeners to each input
inputs.forEach((input, index) => {
  input.addEventListener('input', function () {
    // Ensure only digits are allowed
    if (/^[0-9]$/.test(input.value)) {
      // If valid digit and not the last input, move focus to the next input
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else {
      // Clear invalid input
      input.value = '';
    }
  });

  input.addEventListener('keydown', function (e) {
    // Handle Backspace
    if (e.key === 'Backspace') {
      // If input is empty, move to the previous input
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
