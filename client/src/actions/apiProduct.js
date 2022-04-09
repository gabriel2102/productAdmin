const axios = require('axios');

const getProducts = async (url) =>{
    axios.get(url)
    .then(res => console.log(res))
    .catch(err=> console.log(err));
}
const createNewProduct = async (url, product) => {
    console.log(product);
    try {
        const res = await axios.post(url, {product});
        return res;
    } catch (err) {
        return err;
    }
}

module.exports = {
    createNewProduct,
    getProducts
}

