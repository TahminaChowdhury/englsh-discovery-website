import React from 'react';
import './Home.css'
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
                <div className="bg-image mb-5 text-center">
                    <button class="sign-up-button btn btn-outline-success rounded px-5 py-2 fs-5">
                    Sign-Up
                    </button>
                </div>
                
                <Row>
                    <h1 className="my-5 text-color fw-bold">Our Top Courses</h1>
                    
                    {
                    courses.map(course => <TopCourses course={course}></TopCourses>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;