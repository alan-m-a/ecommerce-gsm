import { useEffect, useState } from "react";
import Products from '../../Products.json'
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

/* Componente contenedor de productos de inicio*/

const ItemListContainer = () => {
    const { servicioId } = useParams();
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
            .then((res) => {
                servicioId ?
                    setProductos(res.filter((product) => product.category === servicioId)) : setProductos(Products);
            })
            .catch((err) => console.log(err));
    }, [servicioId])

    console.log(productos)

    return (
        <>
            <ItemList product={productos} />
        </>
    )

}
export default ItemListContainer;