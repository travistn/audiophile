import './CategoryProductLeft.css';

const CategoryProductLeft = ({ productImage, productName, description, category }) => {
  return (
    <div className='categoryProductLeft__wrapper'>
      <div className='categoryProductLeft__container'>
        <img src={productImage} alt='product' />
        <div className='categoryProductLeft__content'>
          {productName === 'XX99 Mark II Headphones' ||
          'ZX9 Speaker' ||
          'YX1 Wireless Earphones' ? (
            <h5>New Product</h5>
          ) : (
            ''
          )}
          <h3
            className={
              category === 'speakers'
                ? 'productCategory-speakers'
                : 'categoryProductLeft__content-product-name'
            }>
            {productName}
          </h3>
          <p>{description}</p>
          <button>See product</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductLeft;
