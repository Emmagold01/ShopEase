import { Icon } from '@iconify/react';

export default function DisplayCartItems({ cartItem, setCartItem }) {
  function handleDelete(product) {
    setCartItem(cartItem.filter((item) => item.id !== product.id));
  }

  return (
    <>
      {cartItem.length === 0 ? (
        <p className="mt-10 text-gray-700 text-sm text-center">
          No items in the cart.
        </p>
      ) : (
        <div className="p-5 flex flex-col space-y-9 justify-center md:px-20">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-10 items-center place-items-center text-center"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-50 md:w-30 md:h-30 object-cover object-center rounded-lg"
              />
              <div className="w-full text-center md:text-left">
                <h3 className="font-medium text-md text-gray-500">
                  {item.description}
                </h3>
                <p className="font-medium text-sm ">${item.price}</p>
              </div>
              <button onClick={() => handleDelete(item)} className="">
                <Icon icon="fa-solid:trash" className="cursor-pointer" />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
