import Loader from "../components/Loader";
import Message from "../components/Message";
import {Button, Table} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listMyOrders} from "../actions/orderActions";


function MyOrders({history}) {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const orderListMy = useSelector(state => state.orderListMy)
    const {loading: loadingOrders, error: errorOrders, orders} = orderListMy


    useEffect(() => {
        if (!userInfo)
            history.push('/login')
        else
            dispatch(listMyOrders())
    }, [dispatch, history, userInfo])

    return (
        <div>
            <h2>Orders</h2>
            {loadingOrders ? (
                <Loader/>
            ) : errorOrders ? (
                <Message variant='danger'>{errorOrders}</Message>
            ) : orders.length === 0 ? <Message variant='info'>No orders available</Message> : (
                <Table striped responsive className='table-sm'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Delivered</th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>Rs. {order.totalPrice.substr(0, order.totalPrice.length - 3)}</td>
                            <td>{order.isPaid ? order.paidAt.substring(0, 10) : (
                                <i className='fas fa-times' style={{color: 'red'}}></i>
                            )}</td>
                            <td>
                                <LinkContainer to={`/order/${order._id}`}>
                                    <Button className='btn-sm'>Details</Button>
                                </LinkContainer>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default MyOrders
