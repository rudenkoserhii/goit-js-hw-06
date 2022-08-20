const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('.item > h2');
    console.log(`Category: ${categoryTitle.textContent}`);
    
    const categoryListItems = category.querySelectorAll('.item > ul > li');
    console.log(`Elements: ${categoryListItems.length}`);
});