const items = [
    { name: 'Item 1', category: 'category1' },
    { name: 'Item 2', category: 'category2' },
    { name: 'Item 3', category: 'category1' },
    { name: 'Item 4', category: 'category2' },
];


document.addEventListener('DOMContentLoaded', function() {

    const filters = document.querySelectorAll('#filters input[type="checkbox"]');
    const itemsContainer = document.getElementById('items');

    function displayItems(filteredItems) {
        itemsContainer.innerHTML = filteredItems.map(item => 
            `<div class="item">${item.name}</div>`
        ).join('');
    }

    function filterItems() {
        const selectedCategories = Array.from(filters)
            .filter(filter => filter.checked)
            .map(filter => filter.value);

        const filteredItems = items.filter(item => 
            selectedCategories.length === 0 || selectedCategories.includes(item.category)
        );

        displayItems(filteredItems);
    }

    filters.forEach(filter => {
        filter.addEventListener('change', filterItems);
    });

    // Display all items initially
    displayItems(items);
});