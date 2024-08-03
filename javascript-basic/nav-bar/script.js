const flipkart = {
  header: [
    {
      headerLogo_icon:
        "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png",
      headerLogo_p: "Explore",
      headerLogo_span: "Plus",
      headerLogo_plus:
        "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png",
      searchBar_placeholder: "Search for products, brands and more ",
      searchBar_searchIcon: "search-icon.svg",
      login: "Login",
      seller: "Become a Seller",
      More_span: "More",
      More_icon: "down-arrow-nav.svg",
      cart_icon: "cart-icon.svg",
      cart_span: "Cart",
    },
  ],
  subNav: [
    {
      text:"Electronics",
      image:"down-arrow-nav.svg"
    },
    {
      text:"TVs & Appliances",
      image:"down-arrow-nav.svg"
    },
    {
      text:"Men",
      image:"down-arrow-nav.svg"
    },
    {
      text:"Women",
      image:"down-arrow-nav.svg"
    },
    {
      text:"BAby & Kids",
      image:"down-arrow-nav.svg"
    },
    {
      text:"Home & Furniture",
      image:"down-arrow-nav.svg"
    },
    {
      text:"Sports, Books & More",
      image:"down-arrow-nav.svg"
    },
    {
      text:"Flights",
      image:"down-arrow-nav.svg"
    },
    {
      text:"Offer Zone",
      image:"down-arrow-nav.svg"
    }
  ]
};

document.addEventListener("DOMContentLoaded", function () {
  function main() {
    const navBar = document.querySelector(".nav-bar-margin");
    flipkart.header.forEach((item) => {
      const headerLogo = document.createElement("div");
      headerLogo.className = "header-logo";
      headerLogo.innerHTML = `<img src="${item.headerLogo_icon}">
      <a class="link"> <p>${item.headerLogo_p} <span> ${item.headerLogo_span}</span> <img src=${item.headerLogo_plus}></p> </a>`;
      navBar.appendChild(headerLogo);
      const searchBar = document.createElement("div");
      searchBar.className = "header-search-bar";
      searchBar.innerHTML = `<div class="search-bg wht-bg">
              <input type="text" placeholder="${item.searchBar_placeholder}">
              <div class="seach-img">
              <img src="${item.searchBar_searchIcon}"></div>
              </div>`;
      navBar.appendChild(searchBar);    
      const Login=document.createElement("div");
      Login.className="login";
      Login.innerHTML=` <a class="login-link wht-bg clr-bl">${item.login}</a>`
      navBar.appendChild(Login);
      const Seller=document.createElement("div");
      Seller.className='seller';
      Seller.innerHTML=`<a class="seller-link">${item.seller}</a>`;
      navBar.appendChild(Seller);
      const More=document.createElement("div");
      More.className='more';
      More.innerHTML=`<a class="more-link">${item.More_span}</a><img src="${item.More_icon}"/>`;
      navBar.appendChild(More);
      const Cart=document.createElement("div");
     Cart.className='cart'
      navBar.appendChild(Cart);
      Cart.innerHTML=`<a class=cart-link><img src="${item.cart_icon}"><span>${item.cart_span}<span>`;
      navBar.appendChild(Cart);
    });
    const subnavBar = document.querySelector(".sub-nav-margin");
    flipkart.subNav.forEach((item) => {
      const subnavItem=document.createElement("div");
      subnavItem.className='sub-nav-item';
      subnavItem.innerHTML=`<span>${item.text}</span><img src="${item.image}>`
      subnavBar.appendChild(subnavItem);
    });
  }
  main();
});

// document.addEventListener("DOMContentLoaded", function () {
//   function createHeader() {
//     const navBar = document.querySelector(".nav-bar");
//     navBar.innerHTML = `
//         <div class="nav-bar-margin">
//           <div class="header-logo">
// <img src="${flipkart.header.headerLogo.icon}">
//    <a class="link"> <p>${flipkart.header.headerLogo.p} <span> ${flipkart.header.headerLogo.span}</span> <img src=${flipkart.header.headerLogo.plus}></p> </a>
//      </div>
//             <div class="header-search-bar">
//                <div class="search-bg wht-bg">
//                 <input type="text" placeholder="${flipkart.header.searchBar.placeholder}">
//                <div class="seach-img">
//                 <img src="${flipkart.header.searchBar.searchIcon}"></div>
//                </div>
//             </div>
//             <div class="login">
//               <a class="login-link wht-bg clr-bl">${flipkart.header.login}</a>
//             </div>"
//             <div class="seller"><a class="seller-link">${flipkart.header.seller}</a></div>
//              <div class="more">
            //  <a class="more-link">${flipkart.header.more.span}</a>
            //  <img src="${flipkart.header.more.icon}"/>
//              </div>
//              <div class="cart"><a class=cart-link><img src="${flipkart.header.cart.icon}"><span>${flipkart.header.cart.span}<span></cart>
//        </div>
//         `;
//   }

//   createHeader();
// });
