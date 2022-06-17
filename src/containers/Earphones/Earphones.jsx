import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import CategoryProductLeft from '../../components/CategoryProduct/CategoryProductLeft/CategoryProductLeft';
import ShopCategory from '../../components/ShopCategory/ShopCategory';
import MissionStatement from '../../components/MissionStatement/MissionStatement';
import Footer from '../../components/Footer/Footer';

import yx1_earphones from '../../assets/product-yx1-earphones/desktop/image-product.jpg';

const Earphones = () => {
  return (
    <>
      <CategoryHeader category='earphones' />
      <CategoryProductLeft
        productImage={yx1_earphones}
        productName='YX1 Wireless Earphones'
        description='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. 
        Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
      />
      <ShopCategory />
      <MissionStatement />
      <Footer />
    </>
  );
};

export default Earphones;
