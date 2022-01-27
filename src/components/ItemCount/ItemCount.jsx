import { useState } from "react"
import '../ItemCount/ItemCount.css'


const ItemCount = ({stock, initial, onAdd}) => {
  
    const [counter, setCounter] = useState(initial)

    const add = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        } else {
            alert('Maximo de stock alcanzado')
        }
    }

    const remove = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        } else {
            alert('Sin Stock')
        }
    }

    return (
        <>
            <div className="ContainerCount">
                <div>
                    <button onClick={remove} className="btn btn">-</button>
                </div>
                <div className="m-1">
                    <p className="counterCss">{counter}</p>
                </div>
                <div>
                    <button onClick={add} className="btn">+</button>
                </div>
                <hr></hr>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btnAgregar btn btn-primary" onClick={()=>onAdd(counter)}>Agregar al Carrito</button>
            </div>

        </>
    )
}
export default ItemCount;