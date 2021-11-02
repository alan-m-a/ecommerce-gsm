import { useState, useEffect } from "react";
import Products from '../../Products.json';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [ItemsDetail, setItemsDetail] = useState("");
    let itemId;

    const getItem = (item) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (item) {
                    resolve(item);
                } else {
                    reject("Error se encontro nada");
                }
            }, 2000);
        });

    useEffect(() => {
        getItem(Products)
            .then((res) => {
                const filtrado = Products.find(product => product.id === itemId);
                setItemsDetail(filtrado);
                console.log(filtrado)
            })
            .catch((err) => console.log(err));
    }, [itemId]);

    return (
        <>
            <div>
                {ItemsDetail ? <ItemDetail item={ItemsDetail} /> : "loading"}
            </div>
        </>
    )

}
export default ItemDetailContainer;