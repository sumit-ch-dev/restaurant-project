import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';


class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "",
            agree: false,
            contactType: 'Tel.',
            message: ""
        }
    }
    render () {
        return (
            <div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>send us your feedback</h3>
                    </div>
                    <div className="col-12">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor='Firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' name='firstname' placeholder='First Name'
                                    value={this.state.firstname}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' name='lastname' value={this.state.lastname}></Input>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;