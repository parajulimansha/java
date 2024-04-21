const products = [ // Assuming you have a product data array here (refer to previous explanation)
  { id: 1, name: "Timex...", price: 189, category: "watches" },
  { id: 2, name: "Timex2...", price: 19, category: "watches"},
  { id: 3, name: "Timex3...", price: 139, category: "watches"},
  
  // ... other product objects
];

const productListElement = document.getElementById("product-list");

function displayProducts(filteredProducts) {
  productListElement.innerHTML = ""; // Clear existing content

  filteredProducts.forEach(product => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    // Assuming your existing HTML structure for a product item is:
    const productItemContent = `
      <a href="productdesc${product.id}.html?product-id=${product.id}"><img src="../img/watches/image${product.id}.JPG" alt="${product.name}"> </a>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>€${product.price}.00</p>
        <button class="quick-buy">Quick Buy</button>
      </div>
    `;

    productItem.innerHTML = productItemContent;

    productListElement.appendChild(productItem);
  });
}

// Call displayProducts initially to show all products
displayProducts(products);

const filterBySelect = document.getElementById("filter-by");
const sortBySelect = document.getElementById("sort-by");

filterBySelect.addEventListener("change", function() {
  const selectedFilter = this.value;
  let filteredProducts = products;

  if (selectedFilter !== "all") {
    filteredProducts = products.filter(product => product.category === selectedFilter);
  }

  displayProducts(filteredProducts);
});

sortBySelect.addEventListener("change", function() {
  const selectedSort = this.value;
  let sortedProducts = products.slice(); // Create a copy to avoid modifying original array

  if (selectedSort === "price-low-to-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-high-to-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(sortedProducts);
});
