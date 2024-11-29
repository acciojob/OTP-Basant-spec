const inputs = Array.from(document.querySelectorAll(".code"));
 
// Focus the first input on page load
window.onload = () => {
  if (inputs.length > 0) {
    inputs[0].focus();
  }
};
 
inputs.forEach((input, index) => {
  // Move to the next input on typing
  input.addEventListener("input", () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
 
  // Handle backspace key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});
