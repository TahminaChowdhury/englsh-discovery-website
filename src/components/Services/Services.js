import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('courses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <Container>
            <Row className="my-5">
                <div className="bg-dark text-center p-5">
                    <h4 className="text-white">All the English Courses you need
                    General English, Grammar, Exam Preparation, Business English & other Specialist English Courses</h4>
                    <h1 className="text-color">Courses</h1>
                    <small className="text-white">Home/Courses</small>
                </div>
                {
                    courses.map(course => <ServiceDetails course={course}></ServiceDetails>)
                }
            </Row>
        </Container>
    );
};

export default Services;