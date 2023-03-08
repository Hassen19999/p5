// Sélectionner les éléments DOM nécessaires
const minusBtns = document.querySelectorAll(".minus-btn");
const plusBtns = document.querySelectorAll(".plus-btn");
const qtyInputs = document.querySelectorAll(".qty-input");
const deleteBtns = document.querySelectorAll(".delete-btn");
const likeBtns = document.querySelectorAll(".like-btn");
const totalPrice = document.getElementById("total-price");

// Ajouter un gestionnaire d'événements pour chaque bouton "-"
minusBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const qtyInput = btn.nextElementSibling;
    if (parseInt(qtyInput.value) > 1) {
      qtyInput.value = parseInt(qtyInput.value) - 1;
      updateTotalPrice();
    }
  });
});

// Ajouter un gestionnaire d'événements pour chaque bouton "+"
plusBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const qtyInput = btn.previousElementSibling;
    qtyInput.value = parseInt(qtyInput.value) + 1;
    updateTotalPrice();
  });
});

// Ajouter un gestionnaire d'événements pour chaque bouton de suppression
deleteBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    const tr = btn.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
    updateTotalPrice();
  });
});

// Ajouter un gestionnaire d'événements pour chaque bouton "j'aime"
likeBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    btn.classList.toggle("liked");
  });
});

// Mettre à jour le prix total en fonction de la quantité et des suppressions
function updateTotalPrice() {
  let totalPriceValue = 0;
  qtyInputs.forEach(function(input) {
    const tr = input.parentNode.parentNode;
    const priceCell = tr.querySelector("td:nth-child(3)");
    const totalPriceCell = tr.querySelector("td:nth-child(4)");
    const price = parseFloat(priceCell.innerText.replace("€", ""));
    const qty = parseInt(input.value);
    const totalPrice = price * qty;
    totalPriceCell.innerText = totalPrice.toFixed(2) + " €";
    totalPriceValue += totalPrice;
  });
  totalPrice.innerText = totalPriceValue.toFixed(2) + " €";
}
