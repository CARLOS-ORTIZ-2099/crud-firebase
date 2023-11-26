/* eslint-disable react/prop-types */

export const DataProducts = ({products, saveChange, edit, editproduct,deleteProduct}) => {
  return (
    <div className="container d-flex justify-content-around flex-wrap">
        {
            products.length < 1? <span className="fs-1 fw-bolder text-success">sin datos aun</span>:
            products?.map((product) => (
                <div className="" key={product?.id}>
                    {
                        edit == product.id ?
                        <div className="card mb-5">
                            <form className="card-body text-center" onSubmit={(e) => saveChange(product.id,e)}>
                                <input className="form-control mb-3" name='product' type="text" placeholder='cambiar dato' defaultValue={product.product}/>
                                <input className="form-control mb-3" name='price' type="number" placeholder='cambiar dato' defaultValue={product.price}/>
                                <textarea className="form-control mb-3" name="description" defaultValue={product.description}  id="" cols="30" rows="10"></textarea>
                                <button className="btn btn-success btn-lg">guardar</button>
                            </form>
                        </div>
                        :
                        <div className="card rounded-4 mb-5" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{product.product}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{product.price}</h6>
                                <p className="card-text">{product.description}</p>
                                <div className="d-flex justify-content-evenly">
                                <button className="btn btn-danger " onClick={() => deleteProduct(product.id)}>eliminar</button>
                                <button className="btn btn-warning" onClick={(e) => editproduct(product.id,e)}>editar</button>
                                </div>
                                
                            </div>
                        </div>
                    
                    }
                </div>
            ))
        }
    </div>
  )
}
