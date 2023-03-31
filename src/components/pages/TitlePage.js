import '../css/TitlePage.css';
import {
    Row, 
    Col,
    Container 
} from 'react-bootstrap';
import BoxFrame from '../basics/MenuShape';
import Arrow from '../basics/DownArrow';

function smoothScroll(_class){
  document.querySelector(`.${_class}`).scrollIntoView({
      behavior: 'smooth'
  });
}

export default function TitlePage() {
    return (
      <div id="TitlePage" className="title-page">
        <Container>
          <Row>
            <Col md={6} className="title-announcement">
              I'm a Developer & Stuff.
            </Col>
            <Col md={6}>
              <Row className="menu-shape">
                <BoxFrame/>
              </Row>
              <Row className="title-summary">
                <p className="title-summary-text">
                  Hello, my name is Tai I am a Self Taught Full-ish stack Web Developer.  I have been working in and out of multiple disciplines
                  including building basic CRUD apps (like the one you see here), web3 stuff, data scraping, and cloud SRE.  You can checkout my
                  portfolio, resume, and a random assortment of other scribblings on my blog.
                </p>
              </Row>
              <Row>
                <div className="center-contain">
                  <Arrow className="down-arrow" onClick={()=>smoothScroll("menu-page")}/>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
}