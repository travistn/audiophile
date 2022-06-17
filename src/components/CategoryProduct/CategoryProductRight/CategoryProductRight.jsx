import './CategoryProductRight.css';

const CategoryProductRight = ({ productImage, productName, description, category }) => {
  return (
    <div className='categoryProductRight__wrapper'>
      <div className='categoryProductRight__container'>
        <div className='categoryProductRight__content'>
          <h3
            className={
              category === 'speakers'
                ? 'productCategory-speakers'
                : 'categoryProductRight__content-product-name'
            }>
            {productName}
          </h3>
          <p>{description}</p>
          <button>See product</button>
        </div>
        <img src={productImage} alt='product' />
      </div>
    </div>
  );
};

export default CategoryProductRight;
