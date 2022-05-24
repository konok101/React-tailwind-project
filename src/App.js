import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Header></Header>
    <Pricing></Pricing>
    </div>
  );
}

export default App;
