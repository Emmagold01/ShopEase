import DisplayCartItems from './DisplayCartItems';

export default function CartPage({ cartItem, setCartItem }) {
  return (
    <div className="container mx-auto mt-25 mb-10">
      <h1 className="text-3xl font-bold text-center">Your Cart</h1>
      <DisplayCartItems cartItem={cartItem} setCartItem={setCartItem} />
    </div>
  );
}
