// admin-script.js

document.addEventListener('DOMContentLoaded', function () {
    // Set the max attribute of the printDate input to today's date
    const printDateInput = document.getElementById('printDate');
    const today = new Date().toISOString().split('T')[0];
    printDateInput.setAttribute('max', today);

    // Handle Today's Price Calculation
    const printDateField = document.getElementById('printDate');
    const bookPrintPriceField = document.getElementById('bookPrintPrice');
    const todaysPriceField = document.getElementById('todaysPrice');

    function calculateTodaysPrice() {
        const printDate = new Date(printDateField.value);
        const bookPrintPrice = parseFloat(bookPrintPriceField.value);

        if (!isNaN(printDate) && !isNaN(bookPrintPrice)) {
            const currentDate = new Date();
            let age = currentDate.getFullYear() - printDate.getFullYear();

            // Adjust age if the current date is before the print date's month/day
            const m = currentDate.getMonth() - printDate.getMonth();
            if (m < 0 || (m === 0 && currentDate.getDate() < printDate.getDate())) {
                age--;
            }

            age = age < 0 ? 0 : age;

            // Example Algorithm: Decrease price by 5% per year
            const depreciationRate = 0.05; // 5% per year
            let todaysPrice = bookPrintPrice * (1 - (depreciationRate * age));

            // Ensure Today's Price is not less than 50% of Book Print Price
            const minimumPrice = bookPrintPrice * 0.5;
            if (todaysPrice < minimumPrice) {
                todaysPrice = minimumPrice;
            }

            // Round to two decimal places
            todaysPrice = Math.round(todaysPrice * 100) / 100;

            todaysPriceField.value = todaysPrice;
        } else {
            todaysPriceField.value = '';
        }
    }

    // Event Listeners for calculating Today's Price
    printDateField.addEventListener('change', calculateTodaysPrice);
    bookPrintPriceField.addEventListener('input', calculateTodaysPrice);

    // Handle Form Submission
    const insertProductForm = document.getElementById('insertProductForm');
    insertProductForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simple validation (additional validation can be added as needed)
        const bookImage = document.getElementById('bookImage').files[0];
        const bookName = document.getElementById('bookName').value.trim();
        const publication = document.getElementById('publication').value.trim();
        const printDate = document.getElementById('printDate').value;
        const bookPrintPrice = parseFloat(document.getElementById('bookPrintPrice').value);
        const description = document.getElementById('description').value.trim();
        const todaysPrice = parseFloat(document.getElementById('todaysPrice').value);

        if (!bookImage || !bookName || !publication || !printDate || isNaN(bookPrintPrice) || !description || isNaN(todaysPrice)) {
            alert('Please fill in all the required fields correctly.');
            return;
        }

        // Here, you can add code to handle the form data,
        // such as sending it to a backend server via AJAX.

        // For demonstration, we'll just show a success message.
        const insertProductModal = new bootstrap.Modal(document.getElementById('insertProductModal'));
        insertProductModal.hide();

        // Show success alert
        alert('Product inserted successfully!');
        
        // Reset the form
        insertProductForm.reset();
        todaysPriceField.value = '';
    });
});
