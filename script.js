// Handle contact form submission
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thanks for contacting us! We'll get back to you soon.");
    this.reset();
  });
let cartCount=0;
const cartCountSpan=document.getElementById('cart-count');

document.querySelectorAll('.product-card .btn').forEach(button=>{
button.addEventListener('click',( )=>{
  cartCount++;
  cartCountSpan.textContent=cartCount;
});
});