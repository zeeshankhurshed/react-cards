import React from 'react'

function Card({products}) {
  return (
    <>
      <div className="card h-100" >
  <img src={products.image} className="card-img-top w-50 h-50 mx-auto pt-2" alt="..."/>
  <div className="card-body py-0">
    <h6 className="card-title pt-3">{products.title.slice(0,17)}...</h6>
    <p className="card-text">{products.description.slice(0,80)}...</p>
    <div className='d-flex justify-content-between align-items-baseline'>
    <p className="card-text fw-bold">{products.category}</p>
    <p className="card-text">Rs:${products.price}</p>
    </div>
    <div className='d-flex justify-content-between align-items-baseline'>
    <p className="card-text">Rate:{products.rating.rate}</p>
    <p className="card-text">Count:{products.rating.count}</p>
    </div>

  </div>
</div>
    </>
  )
}

export default Card
