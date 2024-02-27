const Items = () => {
  return (
    <div className='flex flex-col mb-8'>
      <div className='py-4'>items</div>
      <div>
        <button
          className='border-2 border-gray-400 p-2 w-full rounded-lg text-sm text-gray-600 hover:border-4 hover:border-stone-500'
          onClick=''
        >
          + Add an item
        </button>
      </div>
    </div>
  );
};

export default Items;
