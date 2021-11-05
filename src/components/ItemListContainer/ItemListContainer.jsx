import { useEffect, useState } from "react";
import Products from '../../Products.json'
import ItemList from "../ItemList/ItemList";

/* Componente contenedor de productos de inicio*/

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const getData = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject("Error se encontro nada");
                }
            }, 2000);
        });

    useEffect(() => {
        getData(Products)
            .then((res) => setProductos(res))
            .catch((err) => console.log(err));
    }, []);

    console.log(productos)

    

    return (
        <>
            <ItemList product={productos} />
        </>
    )

}
export default ItemListContainer;