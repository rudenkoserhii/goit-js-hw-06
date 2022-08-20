const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('h2');
    console.log(`Category: ${categoryTitle.textContent}`);
    
    const categoryListItems = category.querySelectorAll('li');
    console.log(`Elements: ${categoryListItems.length}`);
});