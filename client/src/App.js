import Carousel from "./components/Carousel/Carousel";
import NavBar from "./components/NavBar/NavBar";
import ProductsList from "./components/ProductsList/ProductsList";


function App() {
  return (
    <div className="App">
     <NavBar />
     <Carousel />
     <ProductsList />
    </div>
  );
}

export default App;
