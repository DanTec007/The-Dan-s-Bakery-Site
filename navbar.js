document.addEventListener("DOMContentLoaded", function () {
  const navbar = `
    <header>
      <nav class="navbar">
        <a href="index.html">
          <img src="images/logo.jpg" alt="Dan's Bakery Logo" class="logo">
        </a>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="promotions.html">Promotions</a></li>
          <li><a href="delivery.html">Delivery</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="reviews.html" class="active">Reviews</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="signup.html">Sign Up</a></li>
          <li><a href="order.html">Order Now</a></li>
        </ul>
      </nav>
    </header>
  `;
  document.getElementById("navbar-container").innerHTML = navbar;
});

