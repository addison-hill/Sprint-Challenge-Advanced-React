import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap';

const Display = props => {
    console.log('props', props)
    return (
        <div className="container">
           {props.players.map(player => (
               <Card className="card" >
                   <CardBody>
                       <CardTitle>Name:{player.name}</CardTitle>
                       <CardText>Country:{player.country}</CardText>
                       <CardText>Searches:{player.searches}</CardText>
                   </CardBody>
               </Card>
           ))} 
        </div>
    )
}

export default Display