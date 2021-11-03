import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import Products from '../../Products.json';
import ItemDetail from "../ItemDetail/ItemDetail";
import '../ItemDetailContainer/ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [ItemsDetail, setItemsDetail] = useState("");
    const itemId = 2;

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
                setItemsDetail(filtrado)

            })
            .catch((err) => console.log(err));
    }, [itemId]);


    return (
        <Container className='DetailContainerClass'>
            <Row>
                {ItemsDetail ? <ItemDetail item={ItemsDetail} /> : <Loader type="ThreeDots" color="#1c1c1c" height={80} width={80} className="Loader" />}
            </Row>
        </Container>
    )

}
export default ItemDetailContainer;