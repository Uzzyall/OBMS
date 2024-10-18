// script.js

document.addEventListener('DOMContentLoaded', function () {
    let cartCount = parseInt(document.getElementById('cart-count').innerText);
    let totalPrice = parseFloat(document.getElementById('total-price').innerText.replace('NPR ', ''));

    // Show Buy Button if there are items in the cart
    if (cartCount > 0) {
        const buyButtonContainer = document.getElementById('buy-button-container');
        if (buyButtonContainer) {
            buyButtonContainer.classList.add('show');
        }
    }

    // Handle Buy button functionality
    const buyButton = document.getElementById('buy-button');
    if (buyButton) {
        buyButton.addEventListener('click', function () {
            // Redirect to checkout page or perform desired action
            window.location.href = 'checkout.html'; // Update this link as needed
        });
    }

    // Handle View More button (optional: implement modal or detailed view)
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');
    viewMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('View More functionality is not implemented yet.');
        });
    });
});
