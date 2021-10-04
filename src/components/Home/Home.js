import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopCourses from '../TopCourses/TopCourses';


const Home = () => {
    const [courses, setCourses] =useState([])
    useEffect(() => {
        fetch("fakedata.JSON")
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    
                    <h1 className="my-5">Our Top Courses</h1>
                    <Col md={9}>
                    {
                    courses.map(course => <TopCourses course={course}></TopCourses>)
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;