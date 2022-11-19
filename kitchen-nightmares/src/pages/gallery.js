import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

import kitchenNightmares from "../img/kitchen-nightmares.jpg";
import masterChef from "../img/masterchef.jpg";
import hellsKitchen from "../img/hells-kitchen.jpg";

export default function Gallery() {
    return (
        <>
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>
            <h1 class="titles">Gallery</h1>
            <Container>
            <CardGroup>
                    <Card style={{textAlign: 'center'}}>
                    <Card.Img variant="top" src={kitchenNightmares} style={{width: 180, height: 'auto', display:'block',
                     marginRight: 'auto', marginLeft: 'auto'}} width="150px" />
                    <Card.Body>
                        <Card.Title>Kitchen Nightmares</Card.Title>
                        <Card.Text>
                        This is our first cool show
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card style={{textAlign: 'center'}} >
                    <Card.Img variant="top" src={masterChef}  style={{width: 180, height: 'auto', display:'block',
                     marginRight: 'auto', marginLeft: 'auto'}} width="150px" />
                    <Card.Body>
                        <Card.Title>MasterChef</Card.Title>
                        <Card.Text>
                        This is our second cool show
                        </Card.Text>
                    </Card.Body>
                    </Card>

                    <Card style={{textAlign: 'center'}} >
                    <Card.Img variant="top" src={hellsKitchen} style={{width: 180, height: 'auto', display:'block',
                     marginRight: 'auto', marginLeft: 'auto'}}  width="150px"/>
                    <Card.Body>
                        <Card.Title>Hell's Kitchen</Card.Title>
                        <Card.Text>
                        This is our third cool show
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </CardGroup>
                </Container>
        </>
    );
};