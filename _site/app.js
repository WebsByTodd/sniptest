// Define global variables
var quantity = 1;
var $addButton;
var $quantityDisplay;

//Increment the quantity
function upCount(){
	quantity++;
	updateCount(quantity);
};

//Decrement the quantity
function downCount(){
	if (quantity > 1) {
		quantity--;
		updateCount(quantity);
	}
};

//Update the DOM
function updateCount(quantity) {
	console.log('update: ' + quantity);
	//Update the data-item-quantity attribute of the "add to cart" button
	$addButton.attr('data-item-quantity', quantity);
	//Update the span text
	$quantityDisplay.text(quantity);
}

$(document).ready(function(){
	$addButton = $('.snipcart-add-item');
	$quantityDisplay = $('.product__counter-count');
});