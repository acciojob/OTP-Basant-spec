// Select all the input fields with the class "code"
const inputs = document.querySelectorAll('.code');

// Add event listeners to each input for focus management
inputs.forEach((input, index) => {
  input.addEventListener('input', function () {
    // Only move to the next input if a valid digit is entered
    if (/^[0-9]$/.test(input.value)) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
        console.log(`Focus moved to input #${index + 2}`);
      }
    } else {
      input.value = ''; // Clear invalid input
    }
  });

  input.addEventListener('keydown', function (e) {
    // Handle Backspace
    if (e.key === 'Backspace') {
      // If input is empty, move to the previous input
      if (!input.value && index > 0) {
        inputs[index - 1].focus();
        console.log(`Focus moved to input #${index}`);
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
