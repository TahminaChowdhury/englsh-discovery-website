import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopCourses from '../TopCourses/TopCourses';
import img from '../../image/img-1.jpg'


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
                <div className="text-center mb-5">
                <img src={img} alt="" />
                    
                </div>
                <Row>
                    
                    <h1 className="my-5 text-color">Our Top Courses</h1>
                    
                    {
                    courses.map(course => <TopCourses course={course}></TopCourses>)
                    }
                    
                </Row>
            </Container>
        </div>
    );
};

export default Home;