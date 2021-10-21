const url = (item) => `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

const fetchProducts = (callback) => {
  const nameUrl = url(callback);
  return fetch(nameUrl)
    .then((response) => response.json())
    .then((data) => data);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
