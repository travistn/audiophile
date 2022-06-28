export const shortProductName = (productName, id) => {
  if (id === 3 || id === 4) {
    return productName.replace('Mark', 'MK').substring(0, 10);
  } else {
    return productName.split(' ')[0];
  }
};
