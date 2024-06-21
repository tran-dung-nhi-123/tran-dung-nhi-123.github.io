function changeQuantity(element, change) {
    let quantityElement = element.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    let newQuantity = quantity + change;
    if (newQuantity < 0) newQuantity = 0;
    quantityElement.textContent = newQuantity;
}

function removeProduct(element) {
    let row = element.closest('tr');
    row.parentNode.removeChild(row);
}

function setPromoCode(code) {
    document.getElementById('promo-input').value = code;
}

function applyPromoCode() {
    let promoCode = document.getElementById('promo-input').value;
    document.getElementById('discount-code').textContent = promoCode;
}

document.getElementById("order-btn").addEventListener("click", function() {
    window.location.href = "Thanhtoan.html";
});
