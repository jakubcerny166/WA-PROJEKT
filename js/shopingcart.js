 let cartItems = [];

    function addToCart(product, imageUrl) {
      cartItems.push({ product: product, imageUrl: imageUrl });
      updateCartItemsCount();
    }

    function showCart() {
      let cartItemList = document.getElementById('cartItemList');
      cartItemList.innerHTML = '';

      if (cartItems.length === 0) {
        cartItemList.innerHTML = '<li>Your cart is empty.</li>';
      } else {
        cartItems.forEach(item => {
          let li = document.createElement('li');
          let img = document.createElement('img');
          img.src = item.imageUrl;
          img.alt = item.product;
          img.style.width = '50px';
          img.style.marginRight = '10px';
          li.appendChild(img);
          li.innerHTML += item.product;
          cartItemList.appendChild(li);
        });
      }

      $('#cartModal').modal('show');
    }

    function updateCartItemsCount() {
      let cartItemsCount = document.getElementById('cartItems');
      cartItemsCount.innerText = cartItems.length;
    }