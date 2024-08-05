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
      text: "Electronics",
      image: "down-arrow-nav.svg",
    },
    {
      text: "TVs & Appliances",
      image: "down-arrow-nav.svg",
    },
    {
      text: "Men",
      image: "down-arrow-nav.svg",
    },
    {
      text: "Women",
      image: "down-arrow-nav.svg",
    },
    {
      text: "BAby & Kids",
      image: "down-arrow-nav.svg",
    },
    {
      text: "Home & Furniture",
      image: "down-arrow-nav.svg",
    },
    {
      text: "Sports, Books & More",
      image: "down-arrow-nav.svg",
    },
    {
      text: "Flights",
      image: "down-arrow-nav.svg",
    },
    {
      text: "Offer Zone",
      image: "down-arrow-nav.svg",
    },
  ],
  left: [
    {
      head: "Filter",
      catHead: "categories",
      greytxt: "Mobiles & Accessories",
      blacktxt: "Mobiles",
      image: "down-arrow-nav.svg",
    },
  ],
  sections: [
    {
      title: "BRAND",
      options: ["SAMSUNG", "vivo", "OPPO", "realme", "POCO", "MOTOROLA"],
    },
    {
      title: "CUSTOMER RATINGS",
      options: ["4★ & above", "3★ & above"],
    },
  ],

  right: {},

  right: {
    div1: [{
      path:"home>Mobiles&Appliances",
      result:"Showing 1 – 24 of 9,883 results for ",
      filters:[
        {
          text:"Sort By",
        },
        {
          text:"Relevence"
        },
        {
          text:"Popularity",
        },
        {
          text:"Price -- Low to High",
        },
        {
          text:"Price -- High to Low",
        },
        {
          text:"Newest First",
        },
      ]
    }],
    rightSections: [
      //   {
      //   image:("https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70"),
      //   title:"Apple iPhone 15 (Pink, 256 GB)",
      //   li:["256 GB ROM","15.49 cm (6.1 inch) Super Retina XDR Display","48MP + 12MP | 12MP Front Camera","A16 Bionic Chip, 6 Core Processor Processor","1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories"],
      //   price:"₹81,999"
      // },
      {
        image:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
        name: "Apple iPhone 15",
        color: "Pink",
        storage: "256 GB",
        price: 81999,
        originalPrice: 89900,
        discount: "8% off",
        delivery: "Free delivery",
        specialOffers: "Save extra with combo offers",
        stock: "",
        display: "15.49 cm (6.1 inch) Super Retina XDR Display",
        cameras: "48MP + 12MP | 12MP Front Camera",
        processor: "A16 Bionic Chip, 6 Core Processor",
        warranty:
          "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
        ratings: 4.6,
        ratingStar: "",
        reviews: 2408,
        Ratings: 2408,
        fLogo: "",
        heart:"grey-heart.svg",
      },
      
    ],
  },
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
      const Login = document.createElement("div");
      Login.className = "login";
      Login.innerHTML = ` <a class="login-link wht-bg clr-bl">${item.login}</a>`;
      navBar.appendChild(Login);
      const Seller = document.createElement("div");
      Seller.className = "seller";
      Seller.innerHTML = `<a class="seller-link">${item.seller}</a>`;
      navBar.appendChild(Seller);
      const More = document.createElement("div");
      More.className = "more";
      More.innerHTML = `<a class="more-link">${item.More_span}</a><img src="${item.More_icon}"/>`;
      navBar.appendChild(More);
      const Cart = document.createElement("div");
      Cart.className = "cart";
      navBar.appendChild(Cart);
      Cart.innerHTML = `<a class=cart-link><img src="${item.cart_icon}"><span>${item.cart_span}<span>`;
      navBar.appendChild(Cart);
    });
    const subnavBar = document.querySelector(".sub-nav-margin");
    flipkart.subNav.forEach((item) => {
      const subnavItem = document.createElement("div");
      subnavItem.className = "sub-nav-item";
      subnavItem.innerHTML = `<span>${item.text}</span><img src="${item.image}">`;
      subnavBar.appendChild(subnavItem);
    });
    const bodySection = document.querySelector(".body-section");
    const leftSidebar = document.createElement("div");
    leftSidebar.className = "left";
    bodySection.append(leftSidebar);

    flipkart.left.forEach((item) => {
      const top = document.createElement("div");
      top.className = "top-left";
      leftSidebar.append(top);
      const filter = document.createElement("section");
      filter.className = "filter-hd";
      filter.innerHTML = `<span>${item.head}</span>`;
      top.append(filter);
      const categories = document.createElement("section");
      categories.className = "categories";
      categories.innerHTML = `<div><span>${item.catHead}</span></div>
      <div class="grey"><img src="${item.image}"><a>${item.greytxt}</a></div>
      <div class="bold"><img src="${item.image}"><a>${item.blacktxt}</a></div>`;
      top.append(categories);
    });
    flipkart.left.forEach((item) => {});

    const bottom = document.createElement("div");
    bottom.className = "bottom-left";
    leftSidebar.append(bottom);

    const rightMainbar = document.createElement("div");
    rightMainbar.className = "right";
    bodySection.append(rightMainbar);
    const rightHead = document.createElement("div");
    rightHead.className = "rightHead";
    const headDiv = document.createElement("div");
    headDiv.className = "head-div";
    flipkart.right.div1.forEach(item => {
      const Path=document.createElement("div");
      Path.className='path';
      Path.innerHTML=`<span>${item.path}</span>`;
      headDiv.append(Path);
      const results=document.createElement("div");
      results.className='results';
      headDiv.append(results);
      results.innerHTML=`<span>${item.result}</span>`;
      const filterBar=document.createElement('div');
      filterBar.className='filter-bar';
      flipkart.right.div1[0].filters.forEach(item => {
        const filtersText=document.createElement("div");
        filtersText.className='filter-txt';
        filtersText.innerHTML=`<span>${item.text}</span>`;
        filterBar.append(filtersText);
        // div1[0].append(filtersText);
      });
      headDiv.append(filterBar);

    });

    rightHead.append(headDiv);
    const emptyheadDiv = document.createElement("div");
    emptyheadDiv.className = "emptyhead-div";
    rightHead.append(emptyheadDiv);
    rightMainbar.append(rightHead);
    flipkart.right.rightSections.forEach((item) => {
      const rightSection = document.createElement("section");
      rightSection.className = "right-Section";
      const imageDiv = document.createElement("div");
      imageDiv.className = "image-div";
      imageDiv.innerHTML = `<img src="${item.image}"><div class="compare"><div><input type="checkbox"></div><span>Add to Compare</span></div><div class="heart"><img src="${item.heart}"></div>`;
      rightSection.append(imageDiv);
      const row = document.createElement("div");
      row.className = "row";
      const rowLeft = document.createElement("div");
      rowLeft.className = "row-left";
      rowLeft.innerHTML = `<h2>${item.name} (${item.storage})</h2>`;
      const subTitle = document.createElement("div");
      subTitle.className = "sub-title";
      subTitle.innerHTML = `<div class=rating-btn><span>${item.ratings}</span><img src="${item.ratingStar}"></div>`;
      const reviews = document.createElement("div");
      reviews.className = "reviews";
      subTitle.append(reviews);
      reviews.innerHTML = `<span>${item.Ratings} Ratings & ${item.reviews} Reviews</span>`;
      rowLeft.append(subTitle);
      const features = document.createElement("ul");
      features.className = "features";
      features.innerHTML = `
                          <li>${item.storage} ROM</li>
                          <li>${item.display}</li>
                          <li>${item.cameras}</li>
                          <li>${item.processor}</li>
                          <li>${item.warranty}</li>`;
      rowLeft.append(features);
      row.append(rowLeft);
      const rowRight = document.createElement("div");
      rowRight.className = "row-right";
      const priceDetails = document.createElement("div");
      priceDetails.className = "price-details";
      const price = document.createElement("div");
      price.className = "price";
      price.innerHTML = `<span class="curr-price"> ₹ ${item.price}</span><span class="org-price"> ₹ ${item.originalPrice}</span><span class="discount">${item.discount}</span>`;
      priceDetails.append(price);
      const p = document.createElement("span");
      p.innerHTML = `${item.delivery}`;
      priceDetails.append(p);
      p.className = "delivery";
      rowRight.append(priceDetails);
      const pdiv = document.createElement("div");
      pdiv.innerHTML = `<div class="f-logo"><img src="${item.fLogo}"></div>
                          <div class="offers"><span>${item.specialOffers}</span></div>
                          <div class="stock"><span>${item.stock}</span></div>`;
      rowRight.append(pdiv);
      row.append(rowRight);
      rightSection.append(row);
      rightMainbar.append(rightSection);
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
