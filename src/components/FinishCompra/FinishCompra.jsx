import React from "react";
import { Link } from "react-router-dom";


const FinishCompra = () => {
  return (
    <Link to="/cart">
      <button>Comprar ahora</button>
    </Link>
  );
}

export default FinishCompra;