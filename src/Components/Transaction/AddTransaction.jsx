import React, { useState } from 'react'
import { Button, Card, Container, Form, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import SideBar from '../DashBoard/Sidebar/SideBar'
import axios from 'axios'
const AddTransaction = () => {
    const navigate = useNavigate()

    const [date, setDate] = useState("")
    const [security, setSecurity] = useState("")
    const [action, setAction] = useState("")
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()



    const addStock = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        await axios.post("http://localhost:8000/stock/create", { date, security: security.toUpperCase(), action, quantity, price }, config);
        setDate("")
        setAction("")
        setPrice("")
        setQuantity("")
        setSecurity("")
        navigate("/transaction")
    }

    return (
        <>
            <div className='d-flex'>
                <SideBar />
                <div className="right_section">
                    <Container className='mt-2' style={{ height: "90vh" }}>

                        <Card className="mt-2">
                            <Card.Header>Add new stock</Card.Header>
                            <Card.Body>
                                <Form onSubmit={addStock}>
                                    <Form.Group >
                                        <Form.Label>Enter Date</Form.Label>
                                        <Form.Control type='date' className='shadow-none' value={date} placeholder="Enter Date" required onChange={(e) => setDate(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Enter Security</Form.Label>
                                        <Form.Control className='shadow-none' value={security} placeholder="Enter Security" required onChange={(e) => setSecurity(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Enter Auction</Form.Label>
                                        <Form.Control className='shadow-none' value={action} placeholder="Enter Auction" required onChange={(e) => setAction(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Enter Quantity</Form.Label>
                                        <Form.Control type='number' className='shadow-none' value={quantity} placeholder="Enter Quantity" required onChange={(e) => setQuantity(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Enter Price</Form.Label>
                                        <Form.Control type='number' className='shadow-none' value={price} placeholder="Enter Price" required onChange={(e) => setPrice(e.target.value)} />
                                    </Form.Group>



                                    <Button type="submit" className="submit_login d-flex" variant="primary">
                                        Add stock
                                    </Button>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </div>

        </>
    )
}

export default AddTransaction