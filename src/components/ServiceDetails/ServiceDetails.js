import React from 'react';
import './ServiceDetails.css'
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const ServiceDetails = (props) => {
    const {img, name, level, rating, review, price} =props.course;
    return (
        <Col md={4} className="g-5">
           
            <Card>
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                            <Card.Text>
                            <h5 className="py-3 text-color">{level}</h5>
                            <h5>{name}</h5>
                            <p className="py-3">
                            <span>
                            <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly></Rating>
                            </span>
                            <span className="review"><i class="fas fa-user"></i> ({review})</span>
                            </p>
                            <div className="d-flex justify-content-between pt-3 top-border ">
                            <h5>${price}/Lifetime</h5>
                            <button className="btn button">Enroll Now</button>
                            </div>
                            </Card.Text>
                    </Card.Body>
            </Card>
                      
        </Col>
    );
};

export default ServiceDetails;
