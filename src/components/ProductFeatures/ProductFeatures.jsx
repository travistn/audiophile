import './ProductFeatures.css';

const ProductFeatures = ({ product }) => {
  const features = product.features.split('\n');

  return (
    <div className='productFeatures__wrapper'>
      <div className='productFeatures__container'>
        <div className='productFeatures-features'>
          <h4>Features</h4>
          <p>
            {features?.[0]}
            <br />
            <br />
            {features?.[2]}
          </p>
        </div>
        <div className='productFeatures-box'>
          <h4>In the box</h4>
          <ul className='productFeatures-parts'>
            {product.includes?.map((part, index) => (
              <li key={index}>
                <span>{`${part.quantity}x `}</span>
                <p> {part.item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
