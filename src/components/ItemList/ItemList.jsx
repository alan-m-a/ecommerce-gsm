import Item from "../Item/Item"
import Loader from "react-loader-spinner";
import { Container, Row } from "react-bootstrap"

const ItemList = (product) => {
  return (

    <Container>
      <Row>
        {console.log(product)}
        {product.length
          ? product.map((item) => (
            <Item item={item} key={item.id}/>
          ))
          : <Loader type="ThreeDots" color="#fff" height={80} width={80} />
        }
      </Row>
    </Container>

  )
}
export default ItemList;