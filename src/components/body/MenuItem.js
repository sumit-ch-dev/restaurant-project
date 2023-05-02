import React from "react";
import Card from 'react-bootstrap/Card';

const MenuItem = props => {
    return (
<<<<<<< HEAD
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
=======
        <div>
            <Card style={{ margin: "10px" }} onClick={props.DishSelect}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                        style={{ opacity: "0.5", height: "10rem", width: "15rem" }} />
                    <CardImgOverlay>
                        <CardTitle
                            style={{ cursor: "pointer" }}
                        >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
>>>>>>> b9ab762bd34fe9debbd9857cf4a559747656eff4
    );
}

export default MenuItem;