import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Form} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import {listProducts} from '../actions/productActions'
import SearchBox from "../components/SearchBox";
import ContactUs from "../components/ContactUs";


function HomeScreen({history}) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products, page, pages, summerCount, winterCount} = productList
    const [category, setCategory] = useState('')

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword, category))

    }, [dispatch, keyword, category])

    return (
        <div>
            {!keyword && <ProductCarousel/>}

            <Row>
                <Col className=' my-3' md={6}>
                    <SearchBox/>
                </Col>

                <Col className=' my-3' md={4}>
                    <Form.Group controlId='category'>
                        <Form.Control
                            as='select'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value=''>Select Category</option>
                            <option value='Summer'>Summer</option>
                            <option value='Winter'>Winter</option>

                        </Form.Control>
                    </Form.Group>
                </Col>

                <Col md={2}/>
            </Row>

            <hr/>


            {loading ? <Loader/>
                : error ? <Message variant='danger'>{error}</Message> :
                    products.length === 0 ? <Message variant='danger'>No products available</Message> : (
                        <>
                            {category !== 'Summer' && winterCount !== 0 && (
                                <div>
                                    <h1>Winter Products</h1>
                                    <Row>
                                        {products.map(product => (
                                            product.category === "Winter" &&
                                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                                <Product product={product}/>
                                            </Col>
                                        ))}
                                    </Row>
                                    {/*<Paginate page={page} pages={pages} keyword={keyword}/>*/}
                                    <hr/>
                                </div>
                            )}

                            {category !== 'Winter' && summerCount !== 0 && (
                                <div>
                                    <h1>Summer Products</h1>
                                    <Row>
                                        {products.map(product => (
                                            product.category === "Summer" &&
                                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                                <Product product={product}/>
                                            </Col>
                                        ))}
                                    </Row>
                                    {/*<Paginate page={page} pages={pages} keyword={keyword}/>*/}
                                </div>
                            )}
                        </>
                    )}

            <ContactUs/>
        </div>
    )
}

export default HomeScreen
