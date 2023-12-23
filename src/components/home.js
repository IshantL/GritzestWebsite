
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from '../Images/bg-img.jpg'
import Branding from '../Images/branding.png'
import Conversion from '../Images/conversion.png'
import Traffic from '../Images/traffic.png'
import BgImg from '../Images/back-img.png'
import Doodle from '../Images/doodle.jpg'
import { Row, Col } from "react-bootstrap";



const Home = props => {
  return (
    <div>
      <Card className="bg-dark text-black ">
        <Card.Img className="bg-img"  src={BgImg} alt="Card image" />
        <Card.ImgOverlay className="main-title">
          <Card.Title >
            <p className="moto">Elevating your digital presence with Grit Zest</p>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
      <div className="pt-5">
        <h1 style={{fontWeight:"650"}} className="text-center">Our Services</h1>

        <Row>
          <Col className="service d-flex justify-content-center align-items-center">
            <Card style={{ width: "500px", height: "80%" }} className="text-center">
              <Card.Body>
                <Card.Title>Traffic generation</Card.Title>
                <Card.Text>
                  Boosting online visibility and attracting quality
                  visitors to your website through strategic marketing initiatives and SEO
                  expertise.
                </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="img d-flex justify-content-center align-items-center">
            <img  className="img" src={Traffic}></img>
          </Col>
        </Row>
        <br />

        <Row>
          <Col className="service d-flex justify-content-center align-items-center">
            <img  className="img" src={Branding}></img>
          </Col>
          <Col className="img d-flex justify-content-center align-items-center">
            <Card style={{ width: "500px", height: "80%" }} className="text-center">
              <Card.Body>
                <Card.Title>Branding Excellence</Card.Title>
                <Card.Text>
                  Crafting and strengthening your brand identity
                  to create a lasting impression, ensuring your business stands out in the
                  crowded digital marketplace.     </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>

        <Row>
          <Col className="service d-flex justify-content-center align-items-center">
            <Card style={{ width: "500px", height: "80%" }} className="text-center">
              <Card.Body>
                <Card.Title>Conversion Optimization</Card.Title>
                <Card.Text>
                  Implementing data-driven techniques to
                  enhance user experience, increase engagement, and maximize the
                  chances of turning visitors into loyal customers.      </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="img d-flex justify-content-center align-items-center">
            <img  className="img" src={Conversion}></img>
          </Col>
        </Row>
        <br />


        <Row>
          <Col className="service d-flex justify-content-center">
            <img  className="img" src={Branding}></img>
          </Col>
          <Col className="img d-flex justify-content-center align-items-center">
            <Card style={{ width: "500px", height: "80%" }} className="text-center">
              <Card.Body>
                <Card.Title>Retention Strategies</Card.Title>
                <Card.Text>
                  Developing tailored approaches to retain
                  customers, fostering brand loyalty, and encouraging repeat business
                  through personalized marketing and customer engagement initiatives.      </Card.Text>
                <Button variant="primary">Learn more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
     
<div className="pt-5">
     <div className="container-fluid px-0"  style={{ zIndex:"1"}}>
				<div className="row intro" data-dl-title="Who we are">
					<div className="col-12 col-md-3 col-lg-3 col-xl-5 z-index-2 d-none d-md-block">
          <img  className="img" style={{height:"80%"}} src={Doodle}></img>
          </div>
					<div className="col-11 col-md-9 col-lg-9  col-xl-7 z-index-2  description"
           style={{backgroundColor:"#f7d956c9",opacity:"0.9",height:"90%",marginTop:"2%",padding:"2%"}}>
						<div >
							<div>
								<h3 className="text-uppercase">Who we are</h3>
								<h4 >Elevating Your Online Presence: Connect, Convert, Thrive </h4>
								<div className="content">
                  <p>At Gritzest, we specialize in optimizing every aspect of your digital presence. 
                From driving traffic to building a compelling brand, ensuring high conversion 
                rates, and enhancing customer retention, our expertise spans the entire 
                spectrum of online success. With a unique blend of innovation and strategy, 
                we redefine the way businesses navigate the digital landscape.
                With Gritzest, experience a comprehensive approach that not only drives 
                traffic but also builds a distinctive brand, optimizes conversions, and fosters 
                long-term customer relationships, ensuring your digital success in every 
                aspect. </p>
                </div>
								<div className="position-relative banner-cta-margin">
									<a className="text-image-banner-cta-link" href="#">Get to know us</a>
								</div>
							</div>
						</div>
					</div>
          </div>
          </div>
         
 </div>  



 <div className="footer" style={{position:"relative",color:"black",height:"80px", backgroundColor:"black",opacity:"0.8"}}>
<h1 >Footer</h1>



</div>


</div>

  )
}

export default Home;