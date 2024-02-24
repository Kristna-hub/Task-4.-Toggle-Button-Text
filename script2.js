

const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
  
  if (toggleButton.textContent === 'Hello') {
    toggleButton.textContent = 'Goodbye';
  } else {
    toggleButton.textContent = 'Hello';
  }
});
