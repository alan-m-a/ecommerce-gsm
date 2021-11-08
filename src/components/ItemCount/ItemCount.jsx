import { useState } from "react"
import '../ItemCount/ItemCount.css'


export const ItemCount = (props) => {

    const [counter, setCounter] = useState(props.initial)

    const add = () => {
        if (counter < props.stock) {
            setCounter(counter + 1)
        } else {
            alert('Maximo de stock alcanzado')
        }
    }

    const remove = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        } else {
            alert('Imposible agregar al carrito')
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
                <button className="btnAgregar btn btn-primary">Agregar al Carrito</button>
            </div>

        </>
    )
}