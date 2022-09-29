import Carousel from "./components/Carousel/Carousel";
import NavBar from "./components/NavBar/NavBar";
import ProductsList from "./components/ProductsList/ProductsList";
import Socials from "./components/Socials/Socials";


function App() {
  return (
    <div className="App">
     <NavBar />
     <Carousel />
     <ProductsList />
     <Socials />
    </div>
  );
}

export default App;
