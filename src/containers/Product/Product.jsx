import { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import './Product.css';

import data from '../../data.json';

const Product = ({ slug }) => {
  const [image, setImage] = useState('');

  const product = data.find((item) => item.slug === slug);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `../../assets/product-${product.slug}/desktop/image-product.jpg`
        );
        setImage(response.default);
      } catch (err) {
        console.log(err);
      }
    };

    fetchImage();
  }, [product]);

  console.log(product);

  return (
    <>
      <div className='product-navbar'>
        <Navbar />
      </div>
      <div className='product__wrapper'>
        <div className='product__container'>
          <p className='product-go-back'>Go Back</p>
          <ProductDetails
            productImage={image}
            productName={product.name}
            description={product.description}
            price={`$${product.price}`}
          />
        </div>
      </div>
    </>
  );
};

export default Product;

// './assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

// './assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
