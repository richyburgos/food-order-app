import {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = (showCart) => {
        setCartIsShown(true);
    }
    const hideCartHandler = (showCart) => {
        setCartIsShown(false);
    }
    return (
    <CartProvider>
        { cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
        <Header onOpenCart={showCartHandler}/>
        <main>
            <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
