document.addEventListener("DOMContentLoaded", function () {
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
        searchBar_searchIcon: "assets/search-icon.svg",
        login: "Login",
        seller: "Become a Seller",
        More_span: "More",
        More_icon: "assets/down-arrow-nav.svg",
        cart_icon: "cart-icon.svg",
        cart_span: "Cart",
      },
    ],

    subNav: [
      {
        text: "Electronics",
        image: "assets/down-arrow-nav.svg",
      },
      {
        text: "TVs & Appliances",
        image: "assets/down-arrow-nav.svg",
      },
      {
        text: "Men",
        image: "assets/down-arrow-nav.svg",
      },
      {
        text: "Women",
        image: "assets/down-arrow-nav.svg",
      },
      {
        text: "BAby & Kids",
        image: "assets/down-arrow-nav.svg",
      },
      {
        text: "Home & Furniture",
        image: "assets/down-arrow-nav.svg",
      },
      {
        text: "Sports, Books & More",
        image: "assets/down-arrow-nav.svg",
      },
      {
        text: "Flights",
        image: "assets/down-arrow-nav.svg",
      },
      {
        text: "Offer Zone",
        image: "assets/down-arrow-nav.svg",
      },
    ],

    left: {
      topDiv: [
        {
          head: "Filter",
          catHead: "categories",
          greytxt: "Mobiles & Accessories",
          blacktxt: "Mobiles",
          image: "assets/down-arrow-nav.svg",
        },
      ],
      section1: [{}],
      section2: [
        {
          title: "BRAND",
          searchBarIcon: "searchBarIcon.svg",
          searchBarText: "Search Brand",
          options: ["SAMSUNG", "vivo", "OPPO", "realme", "POCO", "MOTOROLA"],
          more: "171 MORE",
        },
      ],
      section3: [
        {
          fLogo: "assets/fassured.png",
          question: "?",
        },
      ],
      section4: [
        {
          title: "CUSTOMER RATINGS",
          options: ["4★ & above", "3★ & above"],
        },
      ],
    },

    right: {
      div1: [
        {
          path: "Home > Mobiles & Appliances",
          result: "Showing 1 – 24 of 9,883 results for ",
          filters: [
            {
              text: "Sort By",
            },
            {
              text: "Relevence",
              cls: "relevence",
            },
            {
              text: "Popularity",
              cls: "popularity",
            },
            {
              text: "Price -- Low to High",
              cls: "lowtoHigh",
            },
            {
              text: "Price -- High to Low",
              cls: "hightoLow",
            },
            {
              text: "Newest First",
              cls: "newstFirst",
            },
          ],
        },
      ],
      rightSections: [
        {
          image:
            "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70",
          name: "Apple iPhone 15",
          color: "Pink",
          storage: "256 GB",
          price: "81,999",
          originalPrice: "89900",
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
          fLogo: "assets/fassured.png",
          heart: "assets/grey-heart.svg",
          money: "81999",
          Date: "2024-08-10",
        },
        {
          image:
            "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/o/y/g04s-pb360000in-motorola-original-imahfc48vgh8yvgj.jpeg?q=70",
          name: "Motorola g04s",
          color: "Concord Black",
          storage: "64 GB",
          ratings: 4.2,
          ratingStar: "",
          reviews: 550,
          Ratings: 9783,
          ram: "| 4 GB RAM",
          expandable: "| Expandable Upto 1 TB",
          display: "16.76 cm (6.6 inch) HD+ Display",
          cameras: "50MP Rear Camera | 5MP Front Camera",
          battery: "5000 mAh Battery",
          processor: "T606 Processor",
          warranty: "1 Year on Handset and 6 Months on Accessories",
          price: "6,999",
          originalPrice: "9,999",
          discount: "30% off",
          delivery: "Free delivery",
          specialOffers: "Saver Deal",
          Exchange: "Upto ₹3,950 Off on Exchange",
          stock: "",
          fLogo: "assets/fassured.png",
          heart: "assets/grey-heart.svg",
          money: 6999,
          Date: "2024-06-10",
        },
        {
          image:
            "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70",
          name: "POCO M6 5G",
          color: "Galactic Black",
          rom: "128 GB",
          storage: "128 GB",
          ratings: 4.3,
          ratingStar: "",
          storage: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
          Ratings: "24,306",
          reviews: "1,287",
          display: "17.12 cm (6.74 inch) HD+ Display",
          cameras: "50MP Rear Camera | 8MP Front Camera",
          battery: "5000 mAh Battery",
          processor: "Mediatek Dimensity 6100+ Processor",
          warranty:
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories",
          price: "9,999",
          originalPrice: "13,999",
          discount: "28% off",
          delivery: "Free delivery",
          specialOffers: "Saver Deal",
          Exchange: "Upto ₹7,600 Off on Exchange",
          stock: "",
          fLogo: "assets/fassured.png",
          heart: "assets/grey-heart.svg",
          money: 9999,
          Date: "2024-04-10",
        },
        {
          image:
            "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70",
          name: "POCO M6 5G",
          color: "Galactic Black",
          rom: "128 GB",
          storage: "128 GB",
          ratings: 3,
          ratingStar: "",
          storage: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
          Ratings: "24,306",
          reviews: "1,287",
          display: "17.12 cm (6.74 inch) HD+ Display",
          cameras: "50MP Rear Camera | 8MP Front Camera",
          battery: "5000 mAh Battery",
          processor: "Mediatek Dimensity 6100+ Processor",
          warranty:
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories",
          price: "101010",
          originalPrice: "13,999",
          discount: "28% off",
          delivery: "Free delivery",
          specialOffers: "Saver Deal",
          Exchange: "Upto ₹7,600 Off on Exchange",
          stock: "",
          fLogo: "assets/fassured.png",
          heart: "assets/grey-heart.svg",
          money: 101010,
          Date: "2024-04-10",
        },
      ],
    },
  };

  function createHeader() {
    const navBar = document.querySelector(".nav-bar-margin");

    flipkart.header.forEach((item) => {
      const headerLogo = document.createElement("div");
      headerLogo.className = "header-logo";

      const logoImage = document.createElement("img");
      logoImage.src = item.headerLogo_icon;

      const logoText = document.createElement("p");
      logoText.innerHTML = `${item.headerLogo_p} <span>${item.headerLogo_span}</span> <img src=${item.headerLogo_plus}>`;

      const logoLink = document.createElement("a");
      logoLink.className = "link";
      logoLink.appendChild(logoText);

      headerLogo.appendChild(logoImage);
      headerLogo.appendChild(logoLink);

      const searchBar = document.createElement("div");
      searchBar.className = "header-search-bar";

      const searchBg = document.createElement("div");
      searchBg.className = "search-bg wht-bg";

      const searchInput = document.createElement("input");
      searchInput.className = "search-input";
      searchInput.type = "text";
      searchInput.placeholder = item.searchBar_placeholder;

      const searchImg = document.createElement("div");
      searchImg.className = "search-img";

      const searchIcon = document.createElement("img");
      searchIcon.src = item.searchBar_searchIcon;

      searchImg.appendChild(searchIcon);
      searchBg.appendChild(searchInput);
      searchBg.appendChild(searchImg);

      searchBar.appendChild(searchBg);

      const login = document.createElement("div");
      login.className = "login";
      const loginLink = document.createElement("a");
      loginLink.className = "login-link wht-bg clr-bl";
      loginLink.innerHTML = item.login;
      login.appendChild(loginLink);

      const seller = document.createElement("div");
      seller.className = "seller";
      const sellerLink = document.createElement("a");
      sellerLink.className = "seller-link";
      sellerLink.innerHTML = item.seller;
      seller.appendChild(sellerLink);

      const more = document.createElement("div");
      more.className = "more";
      const moreLink = document.createElement("a");
      moreLink.className = "more-link";
      moreLink.innerHTML = item.More_span;
      const moreIcon = document.createElement("img");
      moreIcon.src = item.More_icon;
      more.appendChild(moreLink);
      more.appendChild(moreIcon);

      const cart = document.createElement("div");
      cart.className = "cart";
      const cartLink = document.createElement("a");
      cartLink.className = "cart-link";
      const cartImg = document.createElement("img");
      cartImg.src = item.cart_icon;
      const cartSpan = document.createElement("span");
      cartSpan.innerHTML = item.cart_span;
      cartLink.appendChild(cartImg);
      cartLink.appendChild(cartSpan);
      cart.appendChild(cartLink);

      navBar.appendChild(headerLogo);
      navBar.appendChild(searchBar);
      navBar.appendChild(login);
      navBar.appendChild(seller);
      navBar.appendChild(more);
      navBar.appendChild(cart);
    });
  }

  function createSubNav() {
    const subnavBar = document.querySelector(".sub-nav-margin");

    flipkart.subNav.forEach((item) => {
      const subNavItem = document.createElement("div");
      subNavItem.className = "sub-nav-item";

      const subNavText = document.createElement("span");
      subNavText.innerHTML = item.text;

      const subNavImage = document.createElement("img");
      subNavImage.src = item.image;

      subNavItem.appendChild(subNavText);
      subNavItem.appendChild(subNavImage);

      subnavBar.appendChild(subNavItem);
    });
  }

  function createLeftSidebar() {
    const leftSidebar = document.createElement("div");
    leftSidebar.className = "left";
    const bodySection = document.querySelector(".body-section");
    bodySection.appendChild(leftSidebar);

    flipkart.left.topDiv.forEach((item) => {
      const topLeft = document.createElement("div");
      topLeft.className = "top-left";

      const filterHd = document.createElement("section");
      filterHd.className = "filter-hd";

      const filterHdSpan = document.createElement("span");
      filterHdSpan.innerHTML = item.head;

      const filterListHidden = document.createElement("div");
      filterListHidden.className = "filter-list-hidden";

      filterHd.appendChild(filterHdSpan);
      filterHd.appendChild(filterListHidden);

      const categories = document.createElement("section");
      categories.className = "categories";

      const catHead = document.createElement("div");
      const catHeadSpan = document.createElement("span");
      catHeadSpan.innerHTML = item.catHead;
      catHead.appendChild(catHeadSpan);

      const greyDiv = document.createElement("div");
      greyDiv.className = "grey";
      const greyImg = document.createElement("img");
      greyImg.src = item.image;
      const greyLink = document.createElement("a");
      greyLink.innerHTML = item.greytxt;
      greyDiv.appendChild(greyImg);
      greyDiv.appendChild(greyLink);

      const boldDiv = document.createElement("div");
      boldDiv.className = "bold";
      const boldImg = document.createElement("img");
      boldImg.src = item.image;
      const boldLink = document.createElement("a");
      boldLink.innerHTML = item.blacktxt;
      boldDiv.appendChild(boldImg);
      boldDiv.appendChild(boldLink);

      categories.appendChild(catHead);
      categories.appendChild(greyDiv);
      categories.appendChild(boldDiv);

      topLeft.appendChild(filterHd);
      topLeft.appendChild(categories);

      leftSidebar.appendChild(topLeft);
    });

    flipkart.left.section2.forEach((item) => {
      const section = document.createElement("section");
      section.className = "section sec2 wht-bg";

      const leftSecTitle = document.createElement("div");
      leftSecTitle.className = "left-sec-title";
      const leftSecTitleSpan = document.createElement("span");
      leftSecTitleSpan.innerHTML = item.title;
      leftSecTitle.appendChild(leftSecTitleSpan);

      const leftSecBody = document.createElement("div");
      leftSecBody.className = "left-sec-body";

      const removeItems = document.createElement("div");
      removeItems.className = "remove-items remove-items-sec2";
      removeItems.style.display = "none";
      const removeIcon = document.createElement("span");
      removeIcon.className = "icon";
      removeIcon.innerHTML = "✕";
      const removeText = document.createElement("span");
      removeText.className = "text";
      removeText.innerHTML = "Clear all";
      removeItems.appendChild(removeIcon);
      removeItems.appendChild(removeText);

      const leftSecSearchbar = document.createElement("div");
      leftSecSearchbar.className = "left-sec-searchbar";
      const searchBarIcon = document.createElement("img");
      searchBarIcon.src = item.searchBarIcon;
      const searchBarInput = document.createElement("input");
      searchBarInput.className = "sec2-search-input";
      searchBarInput.placeholder = item.searchBarText;
      leftSecSearchbar.appendChild(searchBarIcon);
      leftSecSearchbar.appendChild(searchBarInput);

      const checkboxUl = document.createElement("ul");
      checkboxUl.className = "checkbox-ul";
      item.options.forEach((option) => {
        const li = document.createElement("li");
        li.className = "checkbox-li";
        const input = document.createElement("input");
        input.className = "sec2-input";
        input.type = "checkbox";
        input.value = option;
        const span = document.createElement("span");
        span.innerHTML = option;
        li.appendChild(input);
        li.appendChild(span);
        checkboxUl.appendChild(li);
      });

      const leftSecMore = document.createElement("div");
      leftSecMore.className = "left-sec-more";
      const leftSecMoreSpan = document.createElement("span");
      leftSecMoreSpan.innerHTML = item.more;
      leftSecMore.appendChild(leftSecMoreSpan);

      leftSecBody.appendChild(removeItems);
      leftSecBody.appendChild(leftSecSearchbar);
      leftSecBody.appendChild(checkboxUl);
      leftSecBody.appendChild(leftSecMore);

      section.appendChild(leftSecTitle);
      section.appendChild(leftSecBody);

      leftSidebar.appendChild(section);
    });

    flipkart.left.section3.forEach((item) => {
      const section = document.createElement("section");
      section.className = "section sec3 wht-bg ";

      const label = document.createElement("label");
      label.className = "label-sec3";
      const input = document.createElement("input");
      input.type = "checkbox";
      const fLogo = document.createElement("img");
      fLogo.src = item.fLogo;
      label.appendChild(input);
      label.appendChild(fLogo);

      const questionSec = document.createElement("div");
      questionSec.className = "question-sec3";
      const questionSpan = document.createElement("span");
      questionSpan.innerHTML = item.question;
      questionSec.appendChild(questionSpan);

      section.appendChild(label);
      section.appendChild(questionSec);

      leftSidebar.appendChild(section);
    });
    flipkart.left.section4.forEach((item) => {
      const section = document.createElement("section");
      section.className = "section sec4";

      const title = document.createElement("div");
      title.className = "left-sec-title";
      title.innerHTML = `<span>${item.title}</span>`;
      section.appendChild(title);

      const leftSecBody = document.createElement("div");
      leftSecBody.className = "left-sec-body";

      const removeItems = document.createElement("div");
      removeItems.className = " remove-items sec4-remove-items";
      removeItems.style.display = "none";
      const removeIcon = document.createElement("span");
      removeIcon.className = "icon";
      removeIcon.innerHTML = "✕";
      const removeText = document.createElement("span");
      removeText.className = "text";
      removeText.innerHTML = "Clear all";
      removeItems.appendChild(removeIcon);
      removeItems.appendChild(removeText);

      const checkboxUl = document.createElement("ul");
      checkboxUl.className = "checkbox-ul";
      item.options.forEach((option) => {
        const li = document.createElement("li");
        li.className = "checkbox-li";
        const input = document.createElement("input");
        input.className = "sec4-input";
        input.type = "checkbox";
        input.value = option;
        const span = document.createElement("span");
        span.innerHTML = option;
        span.className = "rating";
        li.appendChild(input);
        li.appendChild(span);
        checkboxUl.appendChild(li);
      });

      leftSecBody.appendChild(removeItems);
      leftSecBody.appendChild(checkboxUl);

      section.appendChild(leftSecBody);
      leftSidebar.appendChild(section);
    });

    // flipkart.left.section5.forEach((item)=>{
    //   const section=document.createElement("section");
    //   const leftSecTitle=document.createElement("div");
    //   leftSecTitle.className = "left-sec-title";
    //   const leftSecTitleSpan = document.createElement("span");
    //   leftSecTitleSpan.innerHTML = item.title;
    //   leftSecTitle.appendChild(leftSecTitleSpan);
    // })
  }

  function createRightMainbar() {
    const rightMainbar = document.createElement("div");
    rightMainbar.className = "right";
    const bodySection = document.querySelector(".body-section");
    bodySection.appendChild(rightMainbar);
    flipkart.right.div1.forEach((item) => {
      const rightHead = document.createElement("div");
      rightHead.className = "rightHead";
      const path = document.createElement("div");
      path.className = "path";
      path.innerHTML = `<span>${item.path}</span>`;
      rightHead.append(path);

      const results = document.createElement("div");
      results.className = "results";
      results.innerHTML = `<span>${item.result}</span>`;
      rightHead.append(results);
      const headTitle = document.createElement("div");
      headTitle.className = "head-title";
      const headTitleSpan1 = document.createElement("span");
      // headTitleSpan1.textContent = item.path;
      const headTitleSpan2 = document.createElement("span");
      headTitleSpan2.textContent = item.span;
      headTitle.appendChild(headTitleSpan1);
      headTitle.appendChild(headTitleSpan2);

      // const sortButtons = document.createElement("div");
      // sortButtons.className = "sort-buttons";
      // const sortLowHigh = document.createElement("button");
      // sortLowHigh.className = "sort-low-high";
      // sortLowHigh.textContent = item.sortbtn1;
      // const sortHighLow = document.createElement("button");
      // sortHighLow.className = "sort-high-low";
      // sortHighLow.textContent = item.sortbtn2;
      // sortButtons.appendChild(sortLowHigh);
      // sortButtons.appendChild(sortHighLow);
      const filterBar = document.createElement("div");
      filterBar.className = "filter-bar";
      item.filters.forEach((filter) => {
        const filterText = document.createElement("div");
        filterText.className = "filter-txt";
        filterText.innerHTML = `<span class="${filter.cls}">${filter.text}</span>`;
        filterBar.append(filterText);
      });
      rightHead.appendChild(headTitle);
      rightHead.appendChild(filterBar);
      rightMainbar.appendChild(rightHead);
    });

    const rightSections = document.createElement("div");
    rightSections.className = "right-sec";
    rightMainbar.appendChild(rightSections);

    flipkart.right.rightSections.forEach((item) => {
      const rightSecBox = document.createElement("div");
      rightSecBox.className = "right-sec-div";

      const rightSection = document.createElement("section");
      rightSection.className = "right-Section";

      // Image and Compare section
      const imgRel = document.createElement("div");
      imgRel.className = "img-rel";

      const imageDiv = document.createElement("div");
      imageDiv.className = "image-div";

      const productImage = document.createElement("img");
      productImage.src = item.image;
      productImage.alt = "Product Image";

      const compareDiv = document.createElement("div");
      compareDiv.className = "compare";

      const checkboxDiv = document.createElement("div");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkboxDiv.appendChild(checkbox);

      const compareSpan = document.createElement("span");
      compareSpan.innerHTML = "Add to Compare";

      compareDiv.append(checkboxDiv, compareSpan);

      const heartDiv = document.createElement("div");
      heartDiv.className = "heart";

      const heartImg = document.createElement("img");
      heartImg.src = "assets/grey-heart.svg"; // Update if necessary

      heartDiv.appendChild(heartImg);
      const date = document.createElement("div");
      date.innerHTML = `<span data-date="${item.Date}"></span>`;

      imageDiv.append(productImage, compareDiv, heartDiv);
      imgRel.appendChild(imageDiv);
      rightSection.appendChild(imgRel);

      const row = document.createElement("div");
      row.className = "row";

      const rowLeft = document.createElement("div");
      rowLeft.className = "row-left";

      const heading = document.createElement("h2");
      heading.innerHTML = `<span class="brand"> ${item.name} </span>  (${item.storage})`;

      const subTitle = document.createElement("div");
      subTitle.className = "sub-title";

      const ratingBtn = document.createElement("div");
      ratingBtn.className = "rating-btn";

      const ratingSpan = document.createElement("span");
      ratingSpan.innerHTML = item.ratings;

      const ratingImg = document.createElement("img");
      ratingImg.src = "";

      ratingBtn.append(ratingSpan, ratingImg);

      const reviewsDiv = document.createElement("div");
      reviewsDiv.className = "reviews";

      const reviewsSpan = document.createElement("span");
      reviewsSpan.innerHTML = `${item.Ratings} Ratings & ${item.reviews} Reviews`;

      reviewsDiv.appendChild(reviewsSpan);
      subTitle.append(ratingBtn, reviewsDiv);

      const features = document.createElement("ul");
      features.className = "features";

      const featureItems = [
        `${item.storage} ROM`,
        item.display,
        item.cameras,
        item.processor,
        item.warranty,
      ];

      featureItems.forEach((text) => {
        const li = document.createElement("li");
        li.innerHTML = text;
        features.appendChild(li);
      });

      rowLeft.append(heading, subTitle, features);
      row.appendChild(rowLeft);

      // Row right
      const rowRight = document.createElement("div");
      rowRight.className = "row-right";

      const priceDetails = document.createElement("div");
      priceDetails.className = "price-details";

      const priceDiv = document.createElement("div");
      priceDiv.className = "price";

      const currPriceSpan = document.createElement("span");
      currPriceSpan.className = "curr-price";
      currPriceSpan.innerHTML = `₹${item.price}`;

      const orgPriceDiv = document.createElement("div");
      orgPriceDiv.className = "org-price";
      orgPriceDiv.innerHTML = `₹${item.originalPrice}`;

      const discountSpan = document.createElement("span");
      discountSpan.className = "discount";
      discountSpan.innerHTML = item.discount;

      orgPriceDiv.appendChild(discountSpan);

      priceDiv.append(currPriceSpan, orgPriceDiv);

      const deliverySpan = document.createElement("span");
      deliverySpan.className = "delivery";
      deliverySpan.innerHTML = item.delivery;

      priceDetails.append(priceDiv, deliverySpan);

      const fLogoDiv = document.createElement("div");
      fLogoDiv.className = "f-logo";

      const fLogoImg = document.createElement("img");
      fLogoImg.src = "assets/fassured.png";

      fLogoDiv.appendChild(fLogoImg);

      const offersDiv = document.createElement("div");
      offersDiv.className = "offers";

      const offersSpan = document.createElement("span");
      offersSpan.innerHTML = item.specialOffers;

      offersDiv.appendChild(offersSpan);

      const stockDiv = document.createElement("div");
      stockDiv.className = "stock";

      const stockSpan = document.createElement("span");
      stockSpan.innerHTML = item.stock;

      stockDiv.appendChild(stockSpan);

      rowRight.append(priceDetails, fLogoDiv, offersDiv, stockDiv);
      row.appendChild(rowRight);

      rightSection.appendChild(row);
      rightSecBox.appendChild(rightSection);
      rightSections.appendChild(rightSecBox);
    });
  }

  // function setupEventListeners() {
  //   document
  //     .querySelector(".search-input")
  //     .addEventListener("input", filterProducts);
  //   document
  //     .querySelectorAll(".lowtoHigh")
  //     .forEach((btn) =>
  //       btn.addEventListener("click", () => sortProducts("low-high"))
  //     );
  //   //   document.querySelectorAll(".sort-high-low").forEach(btn => btn.addEventListener("click", () => sortProducts('high-low')));
  //   //   document.querySelectorAll(".lowtoHigh").forEach(btn => btn.addEventListener("click", () => sortProducts('low-high')));
  //   document
  //     .querySelectorAll(".hightoLow")
  //     .forEach((btn) =>
  //       btn.addEventListener("click", () => sortProducts("high-low"))
  //     );

  //   //   document.querySelectorAll(".sec2-input").forEach(checkbox => checkbox.addEventListener("change", toggleClearAllVisibility));
  //   document
  //     .querySelector(".remove-items-sec2")
  //     .addEventListener("click", clearAllFilters);
  //   document
  //     .querySelector(".sec2-search-input")
  //     .addEventListener("input", filterItems);
  //   document
  //     .querySelectorAll(".sec2-input")
  //     .forEach((checkbox) =>
  //       checkbox.addEventListener("change", filterByBrand)
  //     );
  //   document
  //     .querySelectorAll(".lowtoHigh")
  //     .forEach((btn) =>
  //       btn.addEventListener("click", () => sortProducts("low-high"))
  //     );
  //   document
  //     .querySelectorAll(".highToLow")
  //     .forEach((btn) =>
  //       btn.addEventListener("click", () => sortProducts("high-low"))
  //     );
  //   document
  //     .querySelectorAll(".newestFirst")
  //     .forEach((btn) =>
  //       btn.addEventListener("click", () => sortProducts("newestFirst"))
  //     );
  //   document
  //     .querySelectorAll(".oldestFirst")
  //     .forEach((btn) =>
  //       btn.addEventListener("click", () => sortProducts("oldestFirst"))
  //     );
  //   document
  //     .querySelectorAll(".popularity")
  //     .forEach((btn) =>
  //       btn.addEventListener("click", () => sortProducts("popularity"))
  //     );
  // }
  // function filterProducts() {
  //   const searchInput = document
  //     .querySelector(".search-input")
  //     .value.toLowerCase();
  //   const productSections = document.querySelectorAll(".right-Section");
  //   productSections.forEach((section) => {
  //     const productName = section
  //       .querySelector(".row-left h2")
  //       .innerHTML.toLowerCase();
  //     section.style.display = productName.includes(searchInput)
  //       ? "flex"
  //       : "none";
  //   });
  // }

  // function sortProducts(order) {
  //   const products = [...document.querySelectorAll(".right-sec-div")];
  //   const container = document.querySelector(".right-sec");

  //   if (order === "low-high" || order === "high-low") {
  //     products.sort((a, b) => {
  //       const priceA = parseFloat(
  //         a.querySelector(".curr-price").textContent.replace(/[^0-9.-]+/g, "")
  //       );
  //       const priceB = parseFloat(
  //         b.querySelector(".curr-price").textContent.replace(/[^0-9.-]+/g, "")
  //       );
  //       return order === "low-high" ? priceA - priceB : priceB - priceA;
  //     });
  //   }
  //   //  else if (order === 'newestFirst' || order === 'oldestFirst') {
  //   //     products.sort((a, b) => {
  //   //         const dateA = new Date(a.querySelector(".product-date").getAttribute('data-date'));
  //   //         const dateB = new Date(b.querySelector(".product-date").getAttribute('data-date'));
  //   //         return order === 'newestFirst' ? dateB - dateA : dateA - dateB;
  //   //     });
  //   // } else if (order === 'popularity') {
  //   //     products.sort((a, b) => {
  //   //         const ratingA = parseFloat(a.querySelector(".rating").textContent);
  //   //         const ratingB = parseFloat(b.querySelector(".rating").textContent);
  //   //         return ratingB - ratingA;
  //   //     });
  //   // }
  //   container.innerHTML = "";
  //   products.forEach((product) => container.appendChild(product));
  // }

  // function filterItems() {
  //   const filterInput = document
  //     .querySelector(".sec2-search-input")
  //     .value.toLowerCase();
  //   document.querySelectorAll(".checkbox-li").forEach((item) => {
  //     const itemName = item.querySelector("span").innerHTML.toLowerCase();
  //     item.style.display = itemName.includes(filterInput) ? "block" : "none";
  //   });
  // }

  // function toggleClearAllVisibility() {
  //   const checkboxes = document.querySelectorAll(".sec2-input:checked");
  //   document.querySelector(".remove-items-sec2").style.display =
  //     checkboxes.length > 0 ? "block" : "none";
  // }

  // function clearAllFilters() {
  //   document
  //     .querySelectorAll(".sec2-input:checked")
  //     .forEach((checkbox) => (checkbox.checked = false));
  //   toggleClearAllVisibility();
  //   filterByBrand();
  // }

  // function filterByBrand() {
  //   const selectedBrands = Array.from(
  //     document.querySelectorAll(".sec2-input:checked")
  //   ).map((cb) => cb.value.toLowerCase());
  //   const products = document.querySelectorAll(".right-sec-div");
  //   console.log("Selected Brands:", selectedBrands);
  //   console.log("Total Products:", products.length);
  //   const anyBrandSelected = selectedBrands.length > 0;
  //   console.log("Any Brand Selected:", anyBrandSelected);
  //   products.forEach((product) => {
  //     const productBrand = product
  //       .querySelector(".brand")
  //       .textContent.toLowerCase();
  //     console.log("Product Brand:", productBrand);
  //     const matchesBrand =
  //       !anyBrandSelected ||
  //       selectedBrands.some((brand) => productBrand.includes(brand));
  //     console.log("Matches Brand:", matchesBrand);
  //     product.style.display = matchesBrand ? "flex" : "none";
  //   });
  //   toggleClearAllVisibility();
  // }

  //   for section4------------

  function setupEventListeners() {
    // Existing event listeners
    document
      .querySelector(".search-input")
      .addEventListener("input", filterProducts);
    document
      .querySelectorAll(".lowtoHigh")
      .forEach((btn) =>
        btn.addEventListener("click", () => sortProducts("low-high"))
      );
    document
      .querySelectorAll(".hightoLow")
      .forEach((btn) =>
        btn.addEventListener("click", () => sortProducts("high-low"))
      );
    document
      .querySelectorAll(".newestFirst")
      .forEach((btn) =>
        btn.addEventListener("click", () => sortProducts("newestFirst"))
      );
    document
      .querySelectorAll(".oldestFirst")
      .forEach((btn) =>
        btn.addEventListener("click", () => sortProducts("oldestFirst"))
      );
    document
      .querySelectorAll(".popularity")
      .forEach((btn) =>
        btn.addEventListener("click", () => sortProducts("popularity"))
      );

    // Section 2 event listeners
    document
      .querySelector(".remove-items-sec2")
      .addEventListener("click", clearAllFilters);
    document
      .querySelector(".sec2-search-input")
      .addEventListener("input", filterItems);
    document
      .querySelectorAll(".sec2-input")
      .forEach((checkbox) =>
        checkbox.addEventListener("change", filterByBrand)
      );

    // Section 4 event listeners
    document.querySelectorAll(".sec4-input").forEach((checkbox) => {
      checkbox.addEventListener("change", filterByRating);
    });
    document
      .querySelector(".sec4-remove-items")
      .addEventListener("click", clearAllRatings);
  }

  function filterProducts() {
    const searchInput = document
      .querySelector(".search-input")
      .value.toLowerCase();
    const productSections = document.querySelectorAll(".right-Section");
    productSections.forEach((section) => {
      const productName = section
        .querySelector(".row-left h2")
        .innerHTML.toLowerCase();
      section.style.display = productName.includes(searchInput)
        ? "flex"
        : "none";
    });
  }

  function sortProducts(order) {
    const products = [...document.querySelectorAll(".right-sec-div")];
    const container = document.querySelector(".right-sec");

    if (order === "low-high" || order === "high-low") {
      products.sort((a, b) => {
        const priceA = parseFloat(
          a.querySelector(".curr-price").textContent.replace(/[^0-9.-]+/g, "")
        );
        const priceB = parseFloat(
          b.querySelector(".curr-price").textContent.replace(/[^0-9.-]+/g, "")
        );
        return order === "low-high" ? priceA - priceB : priceB - priceA;
      });
    }

    container.innerHTML = "";
    products.forEach((product) => container.appendChild(product));
  }

  function filterItems() {
    const filterInput = document
      .querySelector(".sec2-search-input")
      .value.toLowerCase();
    document.querySelectorAll(".checkbox-li").forEach((item) => {
      const itemName = item.querySelector("span").innerHTML.toLowerCase();
      item.style.display = itemName.includes(filterInput) ? "block" : "none";
    });
  }

  function toggleClearAllVisibility() {
    const checkboxes = document.querySelectorAll(".sec2-input:checked");
    document.querySelector(".remove-items-sec2").style.display =
      checkboxes.length > 0 ? "block" : "none";
  }

  function clearAllFilters() {
    document
      .querySelectorAll(".sec2-input:checked")
      .forEach((checkbox) => (checkbox.checked = false));
    toggleClearAllVisibility();
    filterByBrand();
  }

  function filterByBrand() {
    const selectedBrands = Array.from(
      document.querySelectorAll(".sec2-input:checked")
    ).map((cb) => cb.value.toLowerCase());
    const products = document.querySelectorAll(".right-sec-div");
    const anyBrandSelected = selectedBrands.length > 0;
    products.forEach((product) => {
      const productBrand = product
        .querySelector(".brand")
        .innerHTML.toLowerCase();
      const matchesBrand =
        !anyBrandSelected ||
        selectedBrands.some((brand) => productBrand.includes(brand));
      product.style.display = matchesBrand ? "flex" : "none";
    });
    toggleClearAllVisibility();
  }

  // Section 4 functions
  // function filterByRating() {

  //   const selectedRatings = Array.from(document.querySelectorAll(".sec4-input:checked")).map((cb) => cb.value.toLowerCase());
  //   const products = document.querySelectorAll(".right-sec-div");
  //   const anyRatingSelected = selectedRatings.length > 0;
  //   products.forEach((product) => {

  //     const productRating = flipkart.right.rightSections.forEach((item)=>{

  //     });
  //     alert(productRating)
  //     const matchesRating = !anyRatingSelected || selectedRatings.some((rating) => productRating.includes(rating));
  //     alert(productRating)
  //     product.style.display = matchesRating ? "flex" : "none";

  //   });
  //   toggleClearAllRatingsVisibility();
  // }
  const productRatings = flipkart.right.rightSections.map((product) => ({
    name: product.name,
    rating: product.ratings,
  }));

  function filterByRating() {
    const selectedRatings = Array.from(
      document.querySelectorAll(".sec4-input:checked")
    ).map((checkbox) => checkbox.value.toLowerCase());

    // const products = document.querySelectorAll(".right-sec-div");

    flipkart.right.rightSections.forEach((product) => {
      const productRating = product;
      alert(productRating);
      const matchesRating = selectedRatings.some((rating) => {
        if (rating.includes("4★ & above")) {
          alert(productRating);

          return productRating >= 4;
        }
        if (rating.includes("3★ & above")) {
          return productRating >= 3;
        }
        return false;
      });

      product.style.display = matchesRating ? "flex" : "none";
    });

    toggleClearAllRatingsVisibility();
  }

  function toggleClearAllRatingsVisibility() {
    const removeItemsSec4 = document.querySelector(".remove-items-sec4");
    if (removeItemsSec4) {
      const checkboxes = document.querySelectorAll(".sec4-input:checked");
      removeItemsSec4.style.display = checkboxes.length > 0 ? "block" : "none";
    } else {
      console.error("Element '.remove-items-sec4' not found.");
    }
  }

  function clearAllRatings() {
    document
      .querySelectorAll(".sec4-input:checked")
      .forEach((checkbox) => (checkbox.checked = false));
    toggleClearAllRatingsVisibility();
    filterByRating();
  }

  document.addEventListener("DOMContentLoaded", setupEventListeners);

  function toggleClearAllRatingsVisibility() {
    const removeItemsSec4 = document.querySelector(".sec4-remove-items");
    if (removeItemsSec4) {
      // Check if the element exists
      const checkboxes = document.querySelectorAll(".sec4-input:checked");
      removeItemsSec4.style.display = checkboxes.length > 0 ? "block" : "none";
    } else {
      console.error("Element '.sec4-remove-items' not found.");
    }
  }

  function clearAllRatings() {
    document
      .querySelectorAll(".sec4-input:checked")
      .forEach((checkbox) => (checkbox.checked = false));
    toggleClearAllRatingsVisibility();
    filterByRating();
  }

  createHeader();
  createSubNav();
  createLeftSidebar();
  createRightMainbar();
  setupEventListeners();
});
