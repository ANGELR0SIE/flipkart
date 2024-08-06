const items = [
    { name: "Item 1", category: "category1", price: 120 },
    { name: "Item 2", category: "category2", price: 130 },
    { name: "Item 3", category: "category1", price: 220 },
    { name: "Item 4", category: "category2", price: 80 },
];

document.addEventListener("DOMContentLoaded", function () {
    function main() {
        const itemsContainer = document.querySelector(".items");

        function displayItems(items) {
            itemsContainer.innerHTML = ""; 
            items.forEach((item) => {
                const list = document.createElement('div');
                list.innerHTML = `<div class="item">${item.name} (${item.category}) - $${item.price}</div>`;
                itemsContainer.appendChild(list);
            });
        }

        function sortItemsByPrice() {
            items.sort((a, b) => a.price - b.price);
            displayItems(items);
        }
        displayItems(items);
        document.querySelector('.price').addEventListener('click', sortItemsByPrice);
    }
    main();
});
