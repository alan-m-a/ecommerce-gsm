import "../Item/Item.css"
import { Card, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom";


/*Componente generador del item*/

const Item = ({ item }) => {

    return (

        <Col xl={4} md={6} sm={12}>
            <Card style={{ width: '18rem' }} className='CardBody'>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        ${item.price}
                    </Card.Text>
                </Card.Body>
                <Link to={`servicios/${item.id}`}><Button>Detalles</Button>{' '}</Link>
            </Card>
        </Col>
    )
}
export default Item;

