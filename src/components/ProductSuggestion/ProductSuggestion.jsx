import { useNavigate } from 'react-router-dom';

import './ProductSuggestion.css';

const ProductSuggestion = ({ products }) => {
  const navigate = useNavigate();

  const navigateToProduct = (e) => {
    navigate(`/product/${e.target.value}`);
  };

  return (
    <div className='productSuggestion__wrapper'>
      <div className='productSuggestion__container'>
        <h3>You may also like</h3>
        <div className='productSuggestion__products'>
          {products?.map((product) => (
            <div className='productSuggestion' key={product.name}>
              <div className='productSuggestion-image'>
                <img
                  src={require(`../../assets/shared/desktop/image-${product.slug}.jpg`)}
                  alt='product-suggestion'
                />
              </div>
              <h5>{product?.name}</h5>
              <div className='productSuggestion-button'>
                <button value={product.slug} onClick={navigateToProduct}>
                  See product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSuggestion;
