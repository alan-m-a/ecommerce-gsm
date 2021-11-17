import { useState } from "react";
import { Col, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import FinishCompra from "../FinishCompra/FinishCompra"
import '../ItemCount/ItemCount.css';
import '../CartWidget/CartWidget.css';

/*Componente que genera item en detalle*/

const ItemDetail = ({ item }) => {

    const [cartCantidad, setCartCantidad] = useState(0);

    const saveCantidad = (counter) => {
        setCartCantidad(counter);
        console.log(counter)
    };

    return (

        <Col xl={4} md={6} sm={12}>
            <Card style={{ width: '30rem' }} className='CardBody'>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        Lorem ipsums dolor sit amet consectetur, adipisicing elit. Sunt eum optio rerum labore saepe nulla quidem, facilis amet. Praesentium eaque beatae voluptatibus. Fugiat, consequuntur! Delectus quibusdam aperiam ex vel atque.m
                    </Card.Text>
                    <hr></hr>
                    ${item.price}
                </Card.Body>
                {cartCantidad ? <FinishCompra /> : <ItemCount stock={item.stock} initial={1} onAdd={saveCantidad} />}
            </Card>
        </Col>
    );
}
export default ItemDetail;


