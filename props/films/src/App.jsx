import './App.css';
import Stars from './components/Stars/Stars';

export default function App() {
  return (
    <div className="app">
      <Stars count={ 1 }/>
      <Stars />
      <Stars count={ 2 }/>
      <Stars count={ 5 }/>
    </div>
  );
}

Stars.defaultProps = {
  count: 0
}