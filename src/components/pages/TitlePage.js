import '../css/TitlePage.css';
import {
    Row, 
    Col,
    Container 
} from 'react-bootstrap';
import BoxFrame from '../basics/MenuShape';

export default function TitlePage() {
    return (
      <div className="title-page">
        <Container>
          <Row>
            <Col className="title-announcement">
              I'm a Developer & Stuff.
            </Col>
            <Col>
              <Row className="menu-shape d-none d-md-block">
                <BoxFrame/>
              </Row>
              <Row className="title-summary">
                Hello, my name is Tai I am a Self Taught Full-ish stack Web Developer.  I have been working in and out of multiple disciplines
                including building basic CRUD apps (like the one you see here), web3 stuff, data scraping, and cloud SRE.  You can checkout my
                portfolio, resume, and a random assortment of other scribblings on my blog.
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
}