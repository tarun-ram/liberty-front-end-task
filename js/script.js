// JavaScript for Liberty Product Listing Page August 2023
let selectedColor = null; // Initialize the variable to store selected color

function switchProductImage(imageId, color, colorName, productName) {
	const allImages = document.querySelectorAll(`#${imageId} img`);
	allImages.forEach((image) => {
		image.classList.remove('active');
	});
	const activeImage = document.getElementById(`${imageId}`);
	activeImage.src = `images/${imageId}-${color}.jpg`;
	activeImage.alt = `${productName} - ${colorName}`;
	activeImage.classList.add('active');

	// Update selectedColor variable
	selectedColor = color;

	updateProductCount();
}

function updateProductCount() {
	const productCount = document.querySelectorAll('.product').length;
	const productCountElement = document.getElementById('product-count');
	productCountElement.textContent = productCount;
}

// Call the function initially to set the count
updateProductCount();

function selectSize(size, productNumber) {
	const sizeOptions = document.querySelectorAll(`#product-${productNumber} .size-option`);
	sizeOptions.forEach((option) => {
		option.classList.remove('active');
	});
	const selectedOption = document.querySelector(`#product-${productNumber} .size-option[data-size="${size}"]`);
	selectedOption.classList.add('active');
}

const addToBagButtons = document.querySelectorAll('.add-to-bag');

addToBagButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const productElement = button.closest('.product');
		const productName = productElement.querySelector('h3').textContent;
		const productColor = selectedColor || 'N/A'; // Use selectedColor
		const sizeOptionActive = productElement.querySelector('.size-option.active');
		const productSize = sizeOptionActive ? sizeOptionActive.getAttribute('data-size') : 'N/A';
		const productPrice = productElement.querySelector('.product-name-price p').textContent;

		alert(`Added to Bag:
Product: ${productName}
Color: ${productColor}
Size: ${productSize}
Price: ${productPrice}`);
	});
});

// scrol to top
var scrollToTopBtn = document.getElementById('scrollToTopBtn');
var rootElement = document.documentElement;

function scrollToTop() {
	rootElement.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
scrollToTopBtn.addEventListener('click', scrollToTop);
