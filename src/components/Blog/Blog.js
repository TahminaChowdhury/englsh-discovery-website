import React from 'react';
import './Blog.css'
import { Col, Container, Row , Button} from 'react-bootstrap';
import img1 from '../../image/ielts.jpg'
import img2 from '../../image/Career.jpg'
import img3 from '../../image/Gre.jpg'


const Blog = () => {
    return (
        <div>
            <Container className="my-5">
            <Row>
                <Col md={12}>
                    <img src={img1} alt="" />
                    <h1 className="py-3">Top 5 Benefits of Preparing for the IELTS Test</h1>
                    <p>IELTS, which stands for International English Language Testing System, is a globally-recognised test of English language. Many people are aware that having the right IELTS score is one way of proving that you have the English language proficiency to enter a top university, but did you know that IELTS scores are also used by governments and professional bodies for immigration and professional registration purposes? So getting the right IELTS score is important for many people for many different reasons.</p>
                    <a href="https://blog.edx.org/top-5-benefits-of-preparing-for-the-ielts-test">Read More <i class="fas fa-arrow-right"></i></a>
                </Col>
               
                <Col md={8} className="pt-5">
                    <img src={img2} alt="" />
                    <h1 className="py-3">The Role Of English For Career Development</h1>
                    <p>English has been acknowledged as the universal language. It is being spoken by a major population across the globe. Most of the country have their native language. But English is used globally as the language of international discourse. Definitely, English has broken the bars of language diversity. It has facilitated communication among nations...</p>
                    <a href="https://www.etsglobal.org/pl/en/blog/news/importance-of-learning-english">Read More <i class="fas fa-arrow-right"></i></a>
                </Col>

                <Col md={8} className="pt-5">
                    <img src={img3} alt="" />
                    <h1 className="py-3">Why Take The GRE</h1>
                    <p>Most people take the GRE to get into grad school or to secure a merit-based fellowship for grad school. The GRE is a common grad school admissions requirement for both master’s programs (including Master of Arts, Master of Science, and even some Master of Fine Arts programs) and Ph.D. programs.</p>
                    <a href="https://magoosh.com/gre/is-the-gre-important/">Read More <i class="fas fa-arrow-right"></i></a>
                </Col>
            </Row>
            </Container>
        </div>
        
    );
};

export default Blog;