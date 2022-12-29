import React from "react";
import { Container, Row, Col } from "reactstrap";
import './portfolio.css'

import img01 from '../../assets/images/portfolio01.jpg'
import img02 from '../../assets/images/portfolio02.jpg'
import img03 from '../../assets/images/portfolio03.jpg'

const posrtfolioData = [
    {
        imgUrl: img03,
        title: 'Instagram Clone',
        url: 'https://github.com/tusharb1308/MERN-project-social-media-site'
    },
    {
        imgUrl: img01,
        title: 'Personal Portfolio Website',
        url: 'https://github.com/tusharb1308/TusharPortfolioWebsite'
    },
    {
        imgUrl: img02,
        title: 'AI Assistant in Python',
        url: 'https://github.com/tusharb1308/AI-assistant'
    }
]

const Portfolio = () => {
    return(
        <section id="portfolio">
            <Container>
                <Row>
                    <Col lg="12" className="portfolio__top mb-5">
                        <h6>Explore my work and give me a feedback</h6>
                        <h2>My Projects</h2>
                    </Col>

                    
                        {
                            posrtfolioData.map((item,index)=>
                            <Col lg="4" md="6" sm="6">
                                <div className="portfolio__card" key={index}>
                                    <div className="protfolio__img">
                                        <img src={item.imgUrl} alt="" className="w-100"></img>
                                    </div>

                                    <div className="portfolio__content">
                                        <h5>{item.title}</h5>
                                        <a href={item.url} target="_blank">View Code</a>
                                    </div>
                                </div>
                            </Col>
                            )
                        }
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio