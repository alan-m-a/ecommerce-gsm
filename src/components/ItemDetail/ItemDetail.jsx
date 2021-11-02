import { Col, Card, Button } from "react-bootstrap";

const ItemDetail = (item) => {
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
            <Button>Detalles</Button>{' '}

        </Card>
    </Col>
);
  }
  export default ItemDetail;
  