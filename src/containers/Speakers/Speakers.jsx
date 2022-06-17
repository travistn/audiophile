import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import CategoryProductLeft from '../../components/CategoryProduct/CategoryProductLeft/CategoryProductLeft';
import CategoryProductRight from '../../components/CategoryProduct/CategoryProductRight/CategoryProductRight';
import ShopCategory from '../../components/ShopCategory/ShopCategory';
import MissionStatement from '../../components/MissionStatement/MissionStatement';
import Footer from '../../components/Footer/Footer';

import zx9_speaker from '../../assets/product-zx9-speaker/desktop/image-product.jpg';
import zx7_speaker from '../../assets/product-zx7-speaker/desktop/image-product.jpg';

const Speakers = () => {
  return (
    <>
      <CategoryHeader category='speakers' />
      <CategoryProductLeft
        category='speakers'
        productImage={zx9_speaker}
        productName='ZX9 Speaker'
        description='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that 
        offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
      />
      <CategoryProductRight
        category='speakers'
        productImage={zx7_speaker}
        productName='ZX7 Speaker'
        description='Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile 
        components that represents the top of the line powered speakers for home or studio use.'
      />
      <ShopCategory />
      <MissionStatement />
      <Footer />
    </>
  );
};

export default Speakers;
