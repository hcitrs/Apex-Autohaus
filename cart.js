function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const cartTable = document.getElementById("cart-table");
  
    while (cartTable.rows.length > 1) {
      cartTable.deleteRow(1);
    }
  
    cart.forEach((item) => {
      const row = cartTable.insertRow();
  
      const productCell = row.insertCell(0);
      const imageCell = row.insertCell(1);
      const quantityCell = row.insertCell(2);
      const subtotalCell = row.insertCell(3);
      const removeCell = row.insertCell(4);
  
      productCell.style.width = "30%";
      imageCell.style.width = "20%";
      quantityCell.style.width = "15%";
      subtotalCell.style.width = "20%";
      removeCell.style.width = "15%";
  
      const itemPrice = parseFloat(item.price); 
      const itemQuantity = parseInt(item.quantity, 10) || 0; 

      productCell.textContent = item.name;
      quantityCell.textContent = item.quantity;
      subtotalCell.textContent = `P ${(itemPrice * itemQuantity).toFixed(2)}`;
  
      const image = document.createElement("img");
      image.src = item.imageSrc;
      image.alt = item.name;
      image.style.width = ""; 
      imageCell.appendChild(image);
  
      const removeLink = document.createElement("a");
      removeLink.href = "#";
      removeLink.textContent = "Remove";
      removeLink.addEventListener("click", () => removeCartItem(item.id));
      removeCell.appendChild(removeLink);
    });
  
    updateCartTotal();
  }
  
function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const subtotal = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

    const taxRate = 0.10; 
    const tax = subtotal * taxRate;

    const total = subtotal + tax;

    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartTax = document.getElementById("cart-tax");
    const cartTotal = document.getElementById("cart-total");

    cartSubtotal.textContent = `₱ ${subtotal.toFixed(2)}`;
    cartTax.textContent = `₱ ${tax.toFixed(2)}`;
    cartTotal.textContent = `₱ ${total.toFixed(2)}`;
}


  
  function removeCartItem(itemId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const itemIndex = cart.findIndex((item) => item.id === itemId);
  
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    displayCartItems();
  }
  
  document.addEventListener("DOMContentLoaded", displayCartItems);
  