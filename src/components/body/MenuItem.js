import React from "react";
import Card from 'react-bootstrap/Card';

const MenuItem = props => {
    return (
        <Card onClick={props.DishSelect}>
            <Card.Img
                className="img-fluid img-thumbnail"
                alt={props.dish.name}
                src={props.dish.image}
                style={{ height: "10rem", opacity: "0.5", objectFit: "cover" }} />
            <Card.Body>

                <Card.Title
                    style={{ cursor: "pointer" }}
                >
                    {props.dish.name}
                </Card.Title>
            </Card.Body>
        </Card>
    );
}

export default MenuItem;