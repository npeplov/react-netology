import { useAppSelector } from "./app/hooks";
import { AddForm } from "./components/AddForm";
import { ProductItem } from "./components/ProductItem";

const App: React.FC = () => {
  const products = useAppSelector((state) => state.market.products);
  console.log(products);
  
  return (
    <div className="container">
      <ul>
        {products.map((product) => (
          <ProductItem item={product} key={product.id} />
        ))}
      </ul>
      <AddForm/>
    </div>
  );
};

export default App;
