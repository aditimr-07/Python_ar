const productList = document.getElementById('productList');
    const cartItems = document.getElementById('cartItems');
    const totalPriceEl = document.getElementById('totalPrice');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    let products = [];
    let cart = [];

    async function fetchProducts() {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      products = data.products;
      populateCategories(products);
      displayProducts(products);
    }

    function populateCategories(products) {
      const categories = [...new Set(products.map(p => p.category))];
      categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
      });
    }

    function displayProducts(productArray) {
      productList.innerHTML = '';
      productArray.forEach(product => {
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded shadow';
        card.innerHTML = `
          <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-48 object-cover rounded">
          <h3 class="text-lg font-bold mt-2">${product.title}</h3>
          <p class="text-green-700 font-semibold">₹${product.price}</p>
          <button onclick="addToCart(${product.id})" class="mt-2 bg-green-600 text-white px-3 py-1 rounded">Add to Cart</button>
        `;
        productList.appendChild(card);
      });
    }

    function addToCart(id) {
      const product = products.find(p => p.id === id);
      cart.push(product);
      updateCart();
    }

    function updateCart() {
      cartItems.innerHTML = '';
      cart.map(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - ₹${item.price}`;
        cartItems.appendChild(li);
      });

      const total = cart.reduce((sum, item) => sum + item.price, 0);
      totalPriceEl.textContent = total;
    }

    categoryFilter.addEventListener('change', () => {
      const category = categoryFilter.value;
      const filtered = category === 'all' ? products : products.filter(p => p.category === category);
      displayProducts(filtered);
    });

    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filtered = products.filter(p => p.title.toLowerCase().includes(searchTerm));
      displayProducts(filtered);
    });

    fetchProducts();