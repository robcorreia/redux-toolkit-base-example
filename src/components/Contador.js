import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, reduzir } from "../store/reducers/contador";

const Contador = () => {
  const dispatch = useDispatch();
  const contador = useSelector((state) => state.contador);

  function handleClickIncrementar() {
    dispatch(incrementar());
  }

  function handleClickReduzir() {
    dispatch(reduzir());
  }

  return (
    <div>
      <p>{contador}</p>
      <button onClick={handleClickIncrementar}>+</button>
      <button onClick={handleClickReduzir}>_</button>
    </div>
  );
};

export default Contador;
