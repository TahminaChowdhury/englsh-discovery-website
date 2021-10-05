import React from 'react';
import './Home.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TopCourses from '../TopCourses/TopCourses';
import { Link } from 'react-router-dom';
import img from '../../image/img-4.jpg'


const Home = () => {
    const [courses, setCourses] =useState([])
    useEffect(() => {
        fetch("fakedata.JSON")
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
                <div className="bg-image">
                    <div  className="text-white text-start pt-5 ms-3">
                    <h1>Learn English with <br /> <span className="text-color">English </span>
                    Discovery
                    </h1>
                    <h5 className="py-2">Improve your level of English & confidence speaking in English</h5>
                    <button class="sign-up-button btn btn-outline-success rounded px-3 py-2 fs-5">
                    Sign-Up
                    </button>
                    </div>
                </div>
                <div className="d-flex my-5 py-5">
                    <div className="px-4">
                        <h1 className="fw-bold py-4">The Importance of the <br /> English Language</h1>
                        <p>Nowadays, more and more people are dedicating time to studying English as a second language. Many countries include English in their school syllabus and children are starting to learn English at a younger and younger age. But what is the true value of learning English?
                        <br />
                        Whether you are looking for a new job or planning to travel the world, studying English can help you progress in life both personally and professionally. You can compete in the global job market, increase your career skills and start to meet people around the world.
                        <br />
                        However, do you know why learning English is so important? Here are ten good reasons to take an English language course.</p>
                        <Link to="/" className="text-color">Read More <i class="fas fa-arrow-right"></i></Link>
                    </div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
                <Container className="bg-color">
                    <h1 className="text-center pt-5">Are you ready to start learning?</h1>
                <Row>
                    <h1 className="my-5 text-color text-center">Our Top Courses</h1>
                    
                    {
                    courses.map(course => <TopCourses course={course}></TopCourses>)
                    }
                </Row>
                <div className="text-center pb-5">
                <Link to="/courses" className="text-color">View All courses</Link>
                </div>
                </Container>
        </div>
    );
};

export default Home;