export const cart = [];


export function addToCart(productId) {

  /*
      let matchingItem;
      cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem;
        }
      });
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      }
*/

  let matchingItem;
  matchingItem = cart.find(item => item.productId === productId);

  matchingItem
    ? matchingItem.quantity += 1
    : cart.push({ productId: productId, quantity: 1 });

  console.log(cart);
}