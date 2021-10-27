import "../Item/Item.css"
import { Card, Col, Container, Button } from "react-bootstrap"

const Item = ({ item }) => {

    return (
        <Container>
            <Col md={4}>
                <Card style={{ width: '18rem' }} className="CardBody">
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            ${item.price}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="outline-secondary">Detalles</Button>{' '}
                </Card>
            </Col>
        </Container>
    )
}
export default Item
