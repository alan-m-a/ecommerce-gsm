import { Container, Row } from "react-bootstrap"
import Loader from "react-loader-spinner";
import Item from "../Item/Item";

const ItemList = ({product}) => {

  return (
    <Container className='ListContainerClass'>
      <Row>
        {product.length
          ? product.map((item) => (
            <Item item={item} key={item.id} />
          ))
          : <Loader type="ThreeDots" color="#1c1c1c" height={80} width={80} className="Loader"/>
        }
      </Row>
    </Container>

  )
}
export default ItemList;