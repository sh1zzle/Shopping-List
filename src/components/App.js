import List from './data';
import { useState } from 'react';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // const onAddToCart = (product) => {
  //   const exist = cartItems.find((item) => item.id === product.id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((item) =>
  //         item.id === product.id
  //           ? { ...exist, quantity: exist.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };

  // const onRemove = (product) => {
  //   const exist = cartItems.find((item) => item.id === product.id);
  //   if (exist.quantity === 1) {
  //     setCartItems(cartItems.filter((item) => item.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((item) =>
  //         item.id === product.id
  //           ? { ...exist, quantity: exist.quantity - 1 }
  //           : item
  //       )
  //     );
  //   }
  // };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row shadow-md sm:mb-12 mb-6 p-4 fixed w-full bg-zinc-100'>
        <div className='w-full'>
          <h1 className='font-medium text-zinc-600 text-2xl p-2 uppercase hover:text-stone-400 tracking-wide cursor-pointer'>
            My Shopping List
          </h1>
        </div>
      </div>
      <div className='w-100 px-12'>
        <List />
      </div>
    </div>
  );
};

export default App;
