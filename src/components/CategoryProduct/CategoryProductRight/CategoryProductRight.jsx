import './CategoryProductRight.css';

const CategoryProductRight = ({ productImage, productName, description }) => {
  return (
    <div className='categoryProductRight__wrapper'>
      <div className='categoryProductRight__container'>
        <div className='categoryProductRight__content'>
          <h3>{productName}</h3>
          <p>{description}</p>
          <button>See product</button>
        </div>
        <img src={productImage} alt='product' />
      </div>
    </div>
  );
};

export default CategoryProductRight;
