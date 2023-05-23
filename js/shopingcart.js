  $(document).ready(function() {
      $('#productRow .card').each(function(index) {
        $(this).addClass('fade-in');
      });
    });
 
 let cartItems = [];

    function addToCart(product, imageUrl) {
      cartItems.push({ product: product, imageUrl: imageUrl });
      updateCartItemsCount();
    }
	 function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartItemsCount();
    showCart();
  }

    function showCart() {
  let cartItemList = document.getElementById('cartItemList');
  cartItemList.innerHTML = '';

  if (cartItems.length === 0) {
    cartItemList.innerHTML = '<li>Your cart is empty.</li>';
  } else {
    cartItems.forEach((item, index) => {
      let li = document.createElement('li');
      let img = document.createElement('img');
      img.src = item.imageUrl;
      img.alt = item.product;
      img.style.width = '50px';
      img.style.marginRight = '10px';
      li.appendChild(img);
      li.innerHTML += item.product;
      let removeBtn = document.createElement('button');
      removeBtn.innerText = 'Remove';
      removeBtn.classList.add('btn', 'btn-danger', 'btn-sm');
      removeBtn.onclick = () => removeFromCart(index);
      li.appendChild(removeBtn);
      cartItemList.appendChild(li);
    });
  }

      $('#cartModal').modal('show');
    }

    function updateCartItemsCount() {
      let cartItemsCount = document.getElementById('cartItems');
      cartItemsCount.innerText = cartItems.length;
    }