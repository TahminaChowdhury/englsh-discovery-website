import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css'
import img1 from '../../image/ins-1.jpg'
import img2 from '../../image/ins-2.jpg'
import img3 from '../../image/ins-3.jpg'



const About = () => {
    return (
        <Container className="text-center">
           <div className="bg-dark p-5 mt-5">
                <h1 className="text-center fs-1 text-color">About Us</h1>
                <small className="text-white">Home/About</small>
           </div>
            <Row className="text-start my-5">
                <Col md={4}>
                    <p className="fs-2 text-color">Quick Results</p>
                    <div>
                    <p>Test Your English and get a recommendation on where to start.Explore and try our lessons. Choose your Planwhen ready.Start 1 course or as many as you like.Enjoy total learning flexibility.Our full online English courses are created by experienced English teachers and allow students to work through high quality video lessons at any time on any device.</p>
                    </div>
                </Col>
                <Col md={4}>
                    <p className="fs-2 text-color">Get Support</p>
                    <div>
                    <p>Each course has 60 high quality video English lessons that you can watch on your mobile, tablet, laptop or PC. Because you have your own learning dashboard you can log in on any device and start learning.You may take an English lesson on the bus on the way to work, then another in bed on your tablet before you go to sleep. You can learn English at your own pace and how you want to.</p>
                    </div>
                </Col>
                <Col md={4}>
                    <p className="fs-2 text-color">Best Teachers</p>
                    <div>
                    <p>English Discovery is a new and simple way to learn English online. Our full online English courses are created by experienced English teachers and allow students to work through high quality video lessons at any time on any device. You can monitor your progress through each course and go over any lessons you found hard again and again.</p>
                    </div>
                </Col>
            </Row>
            <Row className="my-5">
                <h1 className="my-5 text-color fw-bold">Meet Our Team</h1>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={img3} />
                     <Card.Body>
                    <Card.Title>Maria Johnson</Card.Title>
                    <Card.Text>
                    Hello!..My nmae is Maria.If you're having difficulties in speaking, writing and reading, I can definitely help you. If you're tired of studying... Don't Be! I'll make sure you'll enjoy studying and at the same time educational.
                    </Card.Text>
                    <span><i class="fab fa-facebook fs-3 me-3"></i></span>
                    <span><i class="fab fa-instagram fs-3 me-3"></i></span>
                    <span><i class="fab fa-twitter fs-3 me-3"></i></span>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={img2}/>
                     <Card.Body>
                    <Card.Title>William Lucas</Card.Title>
                    <Card.Text>
                    HIi!...I'm Lucas.I know English can be difficult and boring, but I will do my best to make it as enjoyable as possible so relax.We can talk about anything and everything under the sun.. I hope to see you in my class! Best wishes for your exiciting journey!
                    </Card.Text>
                    <span><i class="fab fa-facebook fs-3 me-3"></i></span>
                    <span><i class="fab fa-instagram fs-3 me-3"></i></span>
                    <span><i class="fab fa-twitter fs-3 me-3"></i></span>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={img1}/>
                     <Card.Body>
                    <Card.Title>Charlotte Sophia</Card.Title>
                    <Card.Text>
                    Hello! I"M Sophia.I'm here to help you develop your skills in speaking the English language. Guaranteed, that I will be of great assistance. I'll make our class as lively as possible and we can even be friends. Hope to see you in my class.
                    </Card.Text>
                    <span><i class="fab fa-facebook fs-3 me-3"></i></span>
                    <span><i class="fab fa-instagram fs-3 me-3"></i></span>
                    <span><i class="fab fa-twitter fs-3 me-3"></i></span>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;