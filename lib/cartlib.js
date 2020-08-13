

export const addItem = (IDproducto) => {
    let products = [];
    let newItem = true;
    if (localStorage.getItem('st_cart')) {
        products = JSON.parse(localStorage.getItem('st_cart'));
        products.map(itemID => {
            if (itemID == IDproducto) {
                newItem = false;
            }
        })
    }
    if (newItem) {
        products.push(IDproducto);
    }
    localStorage.setItem('st_cart', JSON.stringify(products));

    return products;

}

// export const removeItem = async (productId) => {
//     try {
//         var products = [];
//         let datab = {};
//         datab.total = 0;
//         datab.items_cart = [];
//         let itemsID = [];
//         products = JSON.parse(localStorage.getItem('st_cart'));
//         products.splice(products.findIndex(e => e === productId), 1);
//         localStorage.removeItem('st_cart');
//         localStorage.setItem('st_cart', JSON.stringify(products));
//         datab.items = JSON.parse(localStorage.getItem('st_cart')); // tomamos de local storage el carrito
//         if (datab.items.length <= 0) {
//             datab.total = 0;
//             return datab
//         }
//         datab.items.map(singleItem => {
//             itemsID.push(singleItem); // tomamos los id de los productos
//         })

//         let findeditems = [];
//         const {
//             data
//         } = await findTedAndBob(itemsID);
//         Object.entries(data).map(ite => {
//             findeditems.push(ite[1]);
//         })

//         findeditems.map(singleItem => {
//             datab.items.map(othersingle => {
//                 if (singleItem._id == othersingle) {
//                     datab.items_cart.push({
//                         id: singleItem._id,
//                         // name: singleItem.name,
//                         price: singleItem.price,
//                         title: singleItem.title,
//                         portada: singleItem.portada,
//                         // image: singleItem.images[0].url,
//                         subtotal: parseInt(singleItem.price)
//                     })
//                 }
//             })
//         })
//         datab.items_cart.map(singleItem => { // calculamos el total 
//             datab.total += singleItem.subtotal;
//         })
//         return datab;
//     } catch (error) {
//         return {
//             data: error
//         }
//     }

// }

export const removeItem = (IDproducto) => {
    let products = [];
    products = JSON.parse(localStorage.getItem('st_cart'));
    if(products.length > 0){
        const updated = products.filter(itemID => itemID !== IDproducto);
        localStorage.removeItem('st_cart');
        localStorage.setItem('st_cart', JSON.stringify(updated));
        return updated;
    }
    return products;
}


