import { Col, Card } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import '../ItemCount/ItemCount.css'

/*Componente que genera item en detalle*/

const ItemDetail = ({ item }) => {
    return (

        <Col xl={4} md={6} sm={12}>
            <Card style={{ width: '30rem' }} className='CardBody'>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eum optio rerum labore saepe nulla quidem, facilis amet. Praesentium eaque beatae voluptatibus. Fugiat, consequuntur! Delectus quibusdam aperiam ex vel atque.m
                    </Card.Text>
                    <hr></hr>
                    ${item.price}
                </Card.Body>
                <ItemCount stock={5} initial={0} />
            </Card>
        </Col>
    );
}
export default ItemDetail;


