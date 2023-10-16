import getCategory from '../actions/get-categories';
import NavItem from './NavItem';


const Navbar: React.FC = async ({
}) => {

  const categories = await getCategory();

  if (!categories) {
      return null;
  }
  

  return (
    <NavItem item={categories}/>
  );
}

export default Navbar;
