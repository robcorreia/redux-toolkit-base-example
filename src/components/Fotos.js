import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchFotos, selectOverFiveYers } from "../store/reducers/fotos";

const Fotos = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.fotos);
  const fotos = useSelector(selectOverFiveYers);

  useEffect(() => {
    dispatch(fetchFotos(1));
  }, [dispatch]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (fotos)
    return (
      <ul>
        {fotos?.map((foto) => (
          <li key={foto.id}>
            {foto.title} | {foto.idade}
          </li>
        ))}
      </ul>
    );
  else return null;
};

export default Fotos;
