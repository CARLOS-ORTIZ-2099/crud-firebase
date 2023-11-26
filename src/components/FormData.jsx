/* eslint-disable react/prop-types */


export const FormData = ({handleOnSubmit, changeFields}) => {
  return (
    <div className="">
          <form className="row" onSubmit={handleOnSubmit} >
                <div className="col-12 col-md-6">
                  <label htmlFor="product">producto</label>
                  <input  className="form-control mb-3" onChange={changeFields} type="text" id='product' name='product' />
                </div>

                <div className="col-12 col-md-6" >
                  <label htmlFor="price">price</label>
                  <input  className="form-control mb-3" onChange={changeFields} type="number" id='price' name='price' />
                </div>

               <div className="col-12">
                  <label htmlFor="description">description</label>
                  <textarea className="form-control mb-3" onChange={changeFields} name="description" id="description" cols="10" rows="3"></textarea>
               </div>

               <input className="btn btn-info btn-lg col-10 col-md-2 mx-auto m-5" type="submit" value='enviar' />
          </form>
    </div>
  )
}
