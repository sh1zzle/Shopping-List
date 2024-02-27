import Items from './items';
import List from './list';

const ShoppingList = (props) => {
  return (
    <div className='sm:mt-20 mt-24'>
      <div className='grid gap-8 lg:grid-cols-3 sm:grid-cols-2'>
        <Items />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};

export default ShoppingList;
