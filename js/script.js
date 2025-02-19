const searchForm = document.querySelector('.search-form')
const cartItemsContainer = document.querySelector('.cart-items-container')
const navbar = document.querySelector('nav')


const searchBtn = document.querySelector('#search-btn')
const cartBtn = document.querySelector('#cart-btn')
const menuBtn = document.querySelector('#menu-btn')



// Search button
searchBtn.addEventListener('click',(e)=>{
  e.stopPropagation(e)
  searchForm.classList.toggle('active')
})
// Shopping button

cartBtn.addEventListener('click',(e)=>{
  e.stopPropagation(e)
  cartItemsContainer.classList.toggle('active')
})
// Hamburger menu
menuBtn.addEventListener('click',(e)=>{
  e.stopPropagation(e)
  navbar.classList.toggle('active')
})

document.addEventListener("click", (e) => {
  if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!cartItemsContainer.contains(e.target) && !cartBtn.contains(e.target)) {
    cartItemsContainer.classList.remove("active");
  }
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

