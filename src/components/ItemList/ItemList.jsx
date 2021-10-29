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
          : <Loader type="ThreeDots" color="#fff" height={80} width={80} />
        }
      </Row>
    </Container>

  )
}
export default ItemList;