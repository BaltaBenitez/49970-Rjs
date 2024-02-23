import { Children, createContext, useState } from "react";

export const CardContext = createContext();

const CardContextProvaider = ({children}) => {
    const [cart , setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => product.id === id);
            cart[pos].quantity += quantity;
            setCart([...cart])
        } else {
            setCart([...cart, {...item, quantity:quantity}])
        }
    }

    const removeItem = (id) => {
        const items = cart.filter(product => product.id != id);
        setCart([...items])
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    }

    const cantTotalProductos = () => {
        return cart.reduce((acumulador, product) => acumulador  += product.quantity, 0)
    }
    
    const sumaTotalProductos = () => {
        return cart.reduce((acumulador, product) => acumulador  += product.quantity * product.price, 0)
    }
    return(
        <CardContext.Provider value={{cart, addItem, removeItem, clear, cantTotalProductos, sumaTotalProductos}}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvaider;