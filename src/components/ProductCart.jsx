export default function ProductCart({ product, handleCartItem }) {
  const { name, price, description, image } = product;
  return (
    <div className="space-y-2">
      <img
        src={image}
        alt=""
        className="rounded-xl w-full h-90 object-cover object-center"
      />
      <h3 className="font-bold text-left text-md">{name}</h3>
      <p className="text-left font-medium text-sm text-gray-500">${price}</p>
      <p className="text-left font-medium text-sm text-gray-500">
        {description}
      </p>
      <button
        className="block w-full mt-3 border-2 border-blue-700 rounded-lg py-3 px-16 text-blue-700 text-sm hover:bg-blue-700 hover:text-white cursor-pointer"
        onClick={() => handleCartItem(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}
