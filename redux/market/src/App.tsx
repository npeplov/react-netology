import { useAppSelector } from "./app/hooks";

const App: React.FC = () => {
  const test = useAppSelector(state=>state.market.products)
    
  return (
    <div className="container">
      Working
      {test[0].title}
    </div>
  );
};

export default App;
