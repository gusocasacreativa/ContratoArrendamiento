document.addEventListener('DOMContentLoaded', function() {
    var imprimirContratoButton = document.getElementById('imprimirContrato');
    imprimirContratoButton.addEventListener('click', function() {
      chrome.tabs.create({ url: '"C:\Users\gvive\OneDrive\Escritorio\extension2\contratofinal.html"' });
    });
  });
  