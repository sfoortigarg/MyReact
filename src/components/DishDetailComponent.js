import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount(){
        console.log("Dish Detail component ComponentDidMount invoked");
    } 

    componentDidUpdate(){
        console.log("Dish Detail component ComponentDidUpdate invoked");
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg src={dish.image}
                    alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if (comments.length > 0) {
            return (
                comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author} ,
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    );
                }));
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        console.log("Dish Detail component render invoked");
        var dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                {this.renderComments(dish.comments)}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (                
                <div></div>
            )
        }
    }
}

export default DishDetail;