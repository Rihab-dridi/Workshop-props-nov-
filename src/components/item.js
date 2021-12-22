import React from "react";
import {Card , Button} from 'react-bootstrap'


export default function Item(props) {
    const el=props.el
  return (
    <div className="item">
      <Card style={{ width: "18rem" ,height:'500px'}}>
        <Card.Img variant="top" src={el.image}/>
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
         {el.price}
          </Card.Text>
          <Button variant="primary">Buy Now </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

Item.defaultProps ={
  el:{
    name:"Not Found ",
    image:"https://i.pinimg.com/originals/7c/1c/a4/7c1ca448be31c489fb66214ea3ae6deb.jpg",
    price:"0000$"

  }
}