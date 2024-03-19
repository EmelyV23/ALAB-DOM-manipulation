// import "./styles.css";  not needed
//Select and cache the <main> element in a variable named mainEl.
let mainE1 = document.querySelector('main');
console.log(mainE1);
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainE1.style.backgroundColor = '#4a4e4d'

//Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
// mainE1.textContent = 'DOM Manipulation'
mainE1.innerHTML = 'DOM Manipulation'

//Add a class of flex-ctr to mainEl.
//Hint: Use the Element.classList API.
mainE1.classList.add('flex-ctr');

const topMenuEl = ("top-menu");
const subMenuEl = ("sub-menu");
const topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuEl.addEventListener('click', function(evt){
if (evt.target === topMenuEl){
    console.log('not a link')
}else{
    console.log(evt.target)
}
const clicked = evt.target;
clicked.classList.toggle('active')

topMenuLinks.forEach(link => {
    if (link !== evt.target){
        link.classList.remove('active')
    }
    });
}
)
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
  ];

