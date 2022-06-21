import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import ProductFeatures from '../../components/ProductFeatures/ProductFeatures';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import ProductSuggestion from '../../components/ProductSuggestion/ProductSuggestion';
import ShopCategory from '../../components/ShopCategory/ShopCategory';
import MissionStatement from '../../components/MissionStatement/MissionStatement';
import Footer from '../../components/Footer/Footer';
import './Product.css';

import data from '../../data.json';

const Product = () => {
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const { slug } = useParams();

  const product = data?.filter((product) => product?.slug === slug)[0];

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

  return (
    <>
      <div className='product-navbar'>
        <Navbar />
      </div>
      <div className='product__wrapper'>
        <div className='product__container'>
          <p className='product-go-back' onClick={() => navigate(-1)}>
            Go Back
          </p>
          <ProductDetails
            productImage={image}
            productName={product.name}
            description={product.description}
            price={`$${product.price}`}
          />
          <ProductFeatures product={product} />
          <ProductGallery product={product} />
          <ProductSuggestion products={product.others} />
        </div>
      </div>
      <ShopCategory />
      <MissionStatement />
      <Footer />
    </>
  );
};

export default Product;
