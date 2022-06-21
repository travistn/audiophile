import './ProductGallery.css';

const ProductGallery = ({ product }) => {
  const gallery1 = require(`../../assets/product-${product.slug}/desktop/image-gallery-1.jpg`);
  const gallery2 = require(`../../assets/product-${product.slug}/desktop/image-gallery-2.jpg`);
  const gallery3 = require(`../../assets/product-${product.slug}/desktop/image-gallery-3.jpg`);

  return (
    <div className='productGallery__wrapper'>
      <div className='productGallery__container'>
        <div className='productGallery-left'>
          <img src={gallery1} alt='gallery1' />
          <img src={gallery2} alt='gallery2' />
        </div>
        <div className='productGallery-right'>
          <img src={gallery3} alt='gallery3' />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
