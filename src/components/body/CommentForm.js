import React, { Component } from "react";
import { Form, Button, Input } from "reactstrap";


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            rating: "",
            comment: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        //console.log("Current State is: " + JSON.stringify(this.state));
        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment);
        this.setState({
            author: "",
            rating: "",
            comment: ""
        })
        event.preventDefault();
    }
            

    render() {
        //console.log(this.props)
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your name"
                        onChange={this.handleInputChange}
                        required
                    />
                    <br />
                    <Input
                        type="select"
                        name="rating"
                        onChange={this.handleInputChange}
                        value={this.state.rating}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input type="textarea"
                        name="comment"
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                        placeholder="Your Comment"
                        required>

                    </Input>
                    <br />
                    <Button type="submit" value="submit" color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}


export default CommentForm;