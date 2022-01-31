export default function Producto(props){
    return (
        <div className="col-md-6 col-sm-12 col-xl-3
        ">
          <img src={props.img} className="card-img-top" alt="Articulo Zapato"/>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.price}</p>
            <p className="card-text"><small className="text-muted">{props.muted}</small></p>
          </div>
        </div>
    )
}