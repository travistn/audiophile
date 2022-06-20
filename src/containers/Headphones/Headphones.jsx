import CategoryHeader from '../../components/CategoryHeader/CategoryHeader';
import CategoryProductLeft from '../../components/CategoryProduct/CategoryProductLeft/CategoryProductLeft';
import CategoryProductRight from '../../components/CategoryProduct/CategoryProductRight/CategoryProductRight';
import ShopCategory from '../../components/ShopCategory/ShopCategory';
import MissionStatement from '../../components/MissionStatement/MissionStatement';
import Footer from '../../components/Footer/Footer';

import xx99MarkTwo from '../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import xx99MarkOne from '../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import xx59Headphones from '../../assets/product-xx59-headphones/desktop/image-product.jpg';

const Headphones = ({ setSlug }) => {
  return (
    <>
      <CategoryHeader category='headphones' />
      <CategoryProductLeft
        productImage={xx99MarkTwo}
        productName='XX99 Mark II Headphones'
        description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone 
        experience by reproducing the balanced depth and precision of studio-quality sound.'
        slug='xx99-mark-two-headphones'
        setSlug={setSlug}
      />
      <CategoryProductRight
        productImage={xx99MarkOne}
        productName='XX99 Mark I Headphones'
        description='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction 
        for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
        slug='xx99-mark-one-headphones'
        setSlug={setSlug}
      />
      <CategoryProductLeft
        productImage={xx59Headphones}
        productName='XX59 Headphones'
        description='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The 
        stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
        slug='xx59-headphones'
        setSlug={setSlug}
      />
      <ShopCategory />
      <MissionStatement />
      <Footer />
    </>
  );
};

export default Headphones;
