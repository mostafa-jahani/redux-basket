import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../redux/products/actions";

const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    console.log(products)


    return (
        <>
            <div className="container">
                <div className="row mt-5 g-3">
                    {products && products.map(product => (
                        <div className="col-md-3" key={product.id} >
                            <div className="card">
                                <img className="card-img-top" src={product.image} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <button className="btn btn-sm btn-outline-success">
                                        Add to cart
                                    </button>
                                    <span>{product.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default Products;