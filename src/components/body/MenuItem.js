import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = props => {
    return (
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
    );
}

export default MenuItem;