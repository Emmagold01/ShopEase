import Header from './Header';
import ProductCart from './ProductCart';
import Products from './Products';

export default function ProductPage({ handleCartItem }) {
  return (
    <div className="container space-y-5 p-5 mx-auto text-center items-center mb-15 md:px-25">
      <Header />
      <div className="grid grid-cols-1 gap-10 mt-10 space-y-12 md:grid-cols-2 lg:grid-cols-3">
        {Products.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            handleCartItem={handleCartItem}
          />
        ))}
      </div>
    </div>
  );
}
