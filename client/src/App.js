import Carousel from "./components/Carousel/Carousel";
import { Footer } from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
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
     <Newsletter />
     <Footer />
    </div>
  );
}

export default App;
