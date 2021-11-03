import { Col, Card } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount"
import '../ItemCount/ItemCount.css'


const ItemDetail = ({ item }) => {
    return (

        <Col xl={4} md={6} sm={12}>
            <Card style={{ width: '30rem' }} className='CardBody'>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        Descripcion del Producto
                        Este producto quita el bloqueo de iCloud  con MEID de iPhone via Software USB en todas las versiones de IOS que presenta el problema de pantalla bloqueada, bloqueo de Activacion o iCloud con MEID. Eliminamos en unas pocas horas el desbloqueo de iCloud con MEID y con señal de una forma 100% segura y sin riesgos.
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


