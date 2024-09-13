import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { MainLayout } from "../../layouts/MainLayout";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(q).then((res) => {
      setProducts(
        res.docs.map((product) => ({ ...product.data(), id: product.id }))
      )
    });


  }, [categoria]);

  return (
    <MainLayout titulo={categoria ? categoria : "Todos los Productos"}>
      <>

        {products.map((product) => (
          <div className="item-ilc" key={product.id}>
            <div className="text-container-ilc">
              <h4>{product.titulo}</h4>
              <p className="precio-ilc">Precio: <br />$ {product.precio}</p>
              <Link className="ver-mas" to={`/item/${product.id}`}>
                Ver más
              </Link>
            </div>
            <img className="imagen" src={product.imagen} alt={product.titulo} />
          </div>
        ))}
      </>
    </MainLayout>
  );
};

export default ItemListContainer;
