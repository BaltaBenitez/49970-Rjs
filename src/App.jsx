import CardsContainer from "./componets/CardContainer/CardsContainer"
import Cart from "./componets/Cart";
import Checkout from "./componets/Checkout";
import Error404 from "./componets/Error404";
import Footer from "./componets/Footers/Footer"
import Header from "./componets/Headers/Header"
import ItemDetailContainer from "./componets/ItemDetailContainer";
import ItemListContainer from "./componets/ItemListContainer";
import CardContextProvaider from "./componets/context/CardContext";
import "./index.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (  
    <CardContextProvaider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<CardsContainer />}/>
          <Route path={"/contenido"} element={<ItemListContainer />}/>
          <Route path={"/category/:id"} element={<ItemListContainer />}/>
          <Route path={"/item/:id"} element={<ItemDetailContainer />}/>
          <Route path={"/cart"} element={<Cart />}/>
          <Route path={"/checkout"} element={<Checkout />}/>
          <Route path={"*"} element={<Error404 />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CardContextProvaider>
  )
}

export default App;
