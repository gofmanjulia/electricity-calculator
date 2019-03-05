document.querySelector('#loan-form').addEventListener('submit', calculateResults)

function calculateResults(e) {

  const previous = document.getElementById('previous');
  const current = document.getElementById('current');
  const payment = document.getElementById('payment');

  const principal1 = parseFloat(previous.value) * 100;
  const principal2 = parseFloat(current.value) * 100;
  const diff = principal2 - principal1;

  if (principal1 > principal2) {
    payment.value = '';
    showError('Previous reading cannot be greater than current one')
  }

  if (isNaN(principal1) || isNaN(principal2)) {
    showError("You should enter a number.")
  }

  if (diff < 100) {
    payment.value = diff * 0.9 / 100
  } else {
    payment.value = diff * 1.68 / 100
  }

  e.preventDefault();
}

function showError(error) {

  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);

}

function clearError() {
  document.querySelector('.alert').remove();
}
