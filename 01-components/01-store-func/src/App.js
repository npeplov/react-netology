import './styles/App.css';
import ShopItemFunc from './components/ShopItemFunc';

function App() {
  const items = [
    {
      id: 1,
      brand: 'Tiger of Sweden 1',
      title: 'Leonard coat',
      description: 'Minimalistic coat in cotton-blend',
      descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
      price: 399,
      currency: '£'
    },
    {
      id: 2,
      brand: 'Tiger of Sweden 2',
      title: 'Leonard coat',
      description: 'Minimalistic coat in cotton-blend',
      descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
      price: 399,
      currency: '£'
    },
  ]


  return (
    <>
      <ShopItemFunc item = {items[0]}/>
    </>
  );
}

export default App;