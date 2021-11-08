import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import Loader from "react-loader-spinner";
import Products from '../../Products.json';
import ItemDetail from '../ItemDetail/ItemDetail'
import '../ItemDetailContainer/ItemDetailContainer.css'

/* Componente contenedor que renderiza producto seleccionado*/

const ItemDetailContainer = () => {
    const [ItemDetailProducto, setItemDetailProducto] = useState(null);
    const { servicioId } = useParams();
    const itemId = parseInt(servicioId)

    /* Funcion que genera promesa para recibir .json */

    const getItem = (item) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (item) {
                    resolve(item);
                } else {
                    reject("Error se encontro nada");
                }
            }, 1000);
        });

    useEffect(() => {
        getItem(Products)
            .then((res) => {
                const filtrado = res.find(product => product.id === itemId);
                setItemDetailProducto(filtrado)

            })
            .catch((err) => console.log(err));
    }, [itemId]);

    return (
        <Container className='DetailContainerClass'>
            <Row>
                {ItemDetailProducto ? <ItemDetail item={ItemDetailProducto} /> : <Loader type="ThreeDots" color="#1c1c1c" height={80} width={80} className="Loader" />}
            </Row>
        </Container>
    )

}
export default ItemDetailContainer;