import React, {useState} from "react";
import {Row, Col, Container, Form, Image, Alert} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import emailjs from '@emailjs/browser';

function ContactUs() {
    const [value, setValue] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [showAlert, setShowAlert] = useState(false);


    const onInputChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const {name, email, message} = value;


    const history = useHistory()
    const [id, setId] = useState(null)

    function submitHandler(e) {
        e.preventDefault()
        // history.push("/booking/detail/" + id)
    }

    // _____________________________________
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

    const handleContactForm = (e) => {
        e.preventDefault()

        handleShowAlert();
        setValue({
            name: '',
            email: '',
            message: '',
        })

        // emailjs.send('service_flusadm', 'template_jvo1c0h', value, 'auKowJQwNIEv-1iqO')
        //     .then(response => {
        //         console.log('SUCCESS!', response);
        //         setValue({
        //             name: '',
        //             email: '',
        //             message: '',
        //         })
        //         handleShowAlert();
        //     }, error => {
        //         console.log('FAILED...', error);
        //     });
    }

    return <div>
        <Container>
            <div>
                <h3 className='mb-4 text-center heading_decor'>Contact Us</h3>
            </div>
            <Row className="justify-content-md-center contact_form_div">

                <Col md={6}>
                    <Image src="https://i.pinimg.com/originals/5d/2d/95/5d2d955df2895ca18dec554b0e716042.jpg"
                           height={450} width={650} fluid/>
                </Col>
                <Col md={5} className="py-3 px-3">
                    <Alert show={showAlert} variant="danger" className="text-white text-center">
                        Thanks for Contacting us 🙂
                    </Alert>
                    <Form onSubmit={handleContactForm}>
                        <div className="form-outline mb-4 mt-4">
                            <label className="form-label" for="form4Example1">Name</label>
                            <input
                                type="text"
                                id="form4Example1"
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" for="form4Example2">Email address</label>
                            <input
                                type="email"
                                id="form4Example2"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />

                        </div>

                        <div className="form-outline mb-7">
                            <label className="form-label" for="form4Example3">Message</label>
                            <textarea
                                className="form-control"
                                id="form4Example3"
                                rows="4"
                                name='message'
                                value={message}
                                onChange={(e) => onInputChange(e)}
                            >
                            </textarea>

                        </div>

                        <button
                            disabled={name && message && email ? '' : 'false'}
                            type="submit"
                            className="btn btn-primary btn-block mt-3"
                        >Send
                        </button>
                    </Form>
                </Col>
            </Row>


        </Container>

    </div>;
}

export default ContactUs;
