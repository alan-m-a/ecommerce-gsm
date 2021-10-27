import { useState } from "react"
import '../ItemCount/ItemCount.css'


export const ItemCount = (props) => {
    
    const [counter, setCounter] = useState(props.initial)

    const add = () => {
        if (counter < props.stock){
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
        <div>
            <button onClick={add}>+</button>
            <p className="counterCss">{counter}</p>
            <button onClick={remove}>-</button>
            <hr></hr>
            <button>Agregar al carrito</button>
        </div>
    )
}