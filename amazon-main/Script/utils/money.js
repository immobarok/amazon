export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}


//default 1 time export only 
export default formatCurrency;