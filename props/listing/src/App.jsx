import './App.css';
import data from './data/etsy.json';
import Listing from './components/Listing/Listing';

export default function App() {
  return (
    <div className="app">
      <Listing items = { data }/>
    </div>
  );
}
