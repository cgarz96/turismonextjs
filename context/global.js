import React, {useState, useEffect} from 'react'

export const ContextState = React.createContext();

export const CartProvider = (props) => {
    const [itemCart, setItemCart] = useState();

    const getLocalStorage = () => {
      let initialQty = 0;
      if(localStorage.getItem('st_cart') === null){
          localStorage.setItem('st_cart', JSON.stringify([]));
      }
      var local = JSON.parse(localStorage.getItem('st_cart'));
      // if(local.length > 0){
      //   local.map(item => {
      //     initialQty += parseInt(item.quantity);
      //   })
      // }
      return local;
     
    }
    
  useEffect(() => {
    const storage = getLocalStorage();
    setItemCart(storage);
  }, [])

    return(
        <ContextState.Provider value={[itemCart, setItemCart]}>
                {props.children}
        </ContextState.Provider>
    )
}
