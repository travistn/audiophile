import Navbar from '../Navbar/Navbar';
import './CategoryHeader.css';

const CategoryHeader = ({ category }) => {
  return (
    <div className='categoryHeader__container'>
      <Navbar />
      <h1>{category}</h1>
    </div>
  );
};

export default CategoryHeader;
