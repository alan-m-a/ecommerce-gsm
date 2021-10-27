import { useEffect, useState } from "react";
import Products from "../../Products.json";
import Item from "../Item/Item";
import Loader from "react-loader-spinner";


const ItemList = () => {
  const [productos, setProductos] = useState([]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("Error se encontro nada");
        }
      }, 2000);
    });

  useEffect(() => {
    getData(Products)
      .then((res) => setProductos(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {productos.length
        ? productos.map((producto) => (
          <Item item={producto} key={producto.id}/>
        ))
        : <Loader type="ThreeDots" color="#fff" height={80} width={80} />
      }
    </>
  );
};

export default ItemList;