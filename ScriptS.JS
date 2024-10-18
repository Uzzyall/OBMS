document.addEventListener('DOMContentLoaded', function () {
    let cartCount = 0;
    let totalPrice = 0;

    // Sample book data (You can replace this with real data or fetch from backend)
    const books = [
        {
            title: "Book One",
            publication: "Publisher A",
            description: "This is a great book.",
            date: "2018",
            price: 500,
            image: "./image/therich.jpg"
        },
        {
            title: "Book Two",
            publication: "Publisher B",
            description: "Another fantastic book.",
            date: "2020",
            price: 600,
            image: "./image/old is gold.webp"
        },
        {
            title: "Book Three",
            publication: "Publisher C",
            description: "A must-read book.",
            date: "2019",
            price: 700,
            image: "./image/Richdadpoordad.png"
        },
        // Add more books here
    ];

    // Shuffle function to randomize books
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to display books
    function displayBooks(filteredBooks) {
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = ''; // Clear previous content

        (filteredBooks || books).forEach(book => {
            const col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6 mb-4';

            const card = document.createElement('div');
            card.className = 'card h-100 book-card';

            card.innerHTML = `
                <img src="${book.image}" class="card-img-top" alt="${book.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text"><strong>Publication:</strong> ${book.publication}</p>
                    <p class="card-text"><strong>Description:</strong> ${book.description}</p>
                    <p class="card-text"><strong>Print Date:</strong> ${book.date}</p>
                    <p class="card-text"><strong>Price:</strong> NPR ${book.price}</p>
                    <div class="mt-auto">
                        <button class="btn btn-primary add-to-cart-btn">Add to Cart</button>
                        <button class="btn btn-secondary view-more-btn">View More</button>
                    </div>
                </div>
            `;

            col.appendChild(card);
            bookList.appendChild(col);

            // Add to cart functionality
            const addToCartBtn = card.querySelector('.add-to-cart-btn');
            addToCartBtn.addEventListener('click', function () {
                cartCount++;
                totalPrice += book.price;
                document.getElementById('cart-count').innerText = cartCount;
                document.getElementById('total-price').innerText = `NPR ${totalPrice}`;

                // Show Buy Button if it's the first item added
                if (cartCount === 1) {
                    document.getElementById('buy-button-container').style.display = 'block';
                }
            });
        });
    }

    // Display random order of books when page loads
    displayBooks(shuffle(books));

    // Search functionality
    document.getElementById('search-btn').addEventListener('click', function () {
        const searchTerm = document.getElementById('search-bar').value.toLowerCase();

        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.publication.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm)
        );

        displayBooks(filteredBooks); // Display search results
    });

    // Buy button functionality
    const buyButton = document.getElementById('buy-button');
    buyButton.addEventListener('click', function () {
    });
});
