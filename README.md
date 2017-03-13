# sniptest

To reproduce the steps, load the sample web page from the _site directory and follow these steps:

1. Increment the Quantity counter once or twice. It should have a number greater than 1.
2. Click "Add to cart" and the Snipcart shopping cart will appear with the correct quantity.
3. Close the shopping cart with the 'x' at the top right corner.
4. Change the quantity to any new number besides 1.
5. Click "Add to cart" again.

The second time the Snipcart shopping cart appears, the quantity specified by the data-item-quantity attribute of the "Add to cart" button is ignored and only a single new item is added to the cart. 