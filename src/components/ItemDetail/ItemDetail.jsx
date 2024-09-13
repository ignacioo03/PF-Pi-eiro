import "./itemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({item}) => {
  return (
    <div className="container">
      <div className="producto-detalle">
        <img className="imagen-detalle" src={item.imagen} alt={item.titulo} />
        <div className="text-container">
        <h3 className="titulo-detalle">{item.titulo}</h3>
        <p className="descripcion">Descripcion: {item.descripcion}</p>
        <p className="categoria"> Categoria: {item.categoria}</p>
        <p className="precio">Precio: ${item.precio}</p>
        <p className="stock">Stock: {item.stock}</p>
        <ItemCount item = {item}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
