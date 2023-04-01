import { Container, Row, Col } from 'react-bootstrap';
import PageHeader from "../basics/PageHeader"
import tk_img from "../../static/TaiSelfie_scaled.png";
import "../css/About.css";


export default function About() {
    return (
        <div>
          <PageHeader headingText=".about"/>
          <div>
            <div className="about-img-container">
              <Row className="intro-group">
                <Col>
                  <img className="tai-img" src={tk_img}/>
                </Col>
                <Col>
                  <div className="about-intro-header">
                    <h1>Tai Kersten</h1>
                    <h6> "Definitely someone I may have worked with once" </h6>
                  </div>
                </Col>
              </Row>

            </div>

            <div className="about-heading">
               
            </div>
            <Container className="about-content">

            <div className="mobile-only">
            <img className="tai-img mobile-only" src={tk_img}/>
            <h1>Tai Kersten</h1>
            <h6> "Definitely someone I may have worked with once" </h6>
            </div>
            <p>

              
freestar

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta enim id nunc egestas rhoncus. Suspendisse sit amet urna nec nunc consectetur bibendum eget ac massa. Proin id eros vel ligula ultricies sagittis in sed mi. Nulla facilisi. Suspendisse potenti. Ut nec urna sit amet massa ultrices porta sed non ex. Nunc fringilla vitae justo sit amet molestie. Nam id ornare est. Mauris eget eleifend nulla. Praesent lobortis, metus vitae aliquam blandit, lacus est aliquam magna, a dapibus magna sapien vitae tellus. Sed facilisis venenatis rutrum. Etiam elementum, magna quis euismod dapibus, mi ex mattis mauris, a tincidunt urna sapien ac erat. Proin tempus elit quis purus accumsan euismod.

Curabitur sodales tempor volutpat. Etiam pretium dolor vel lacus blandit, et dignissim dolor varius. Quisque mollis eleifend felis, et accumsan dui. Duis venenatis odio at lectus ullamcorper auctor. Phasellus vitae mattis nisi. Nullam mattis maximus lorem, non tristique turpis accumsan eu. Integer dui quam, volutpat sit amet quam eu, ultricies varius purus. Suspendisse facilisis libero id eleifend bibendum.

Aenean lacinia leo in metus egestas, in vehicula leo aliquam. Praesent fermentum enim lectus, eget pellentesque lectus auctor eget. Vestibulum sagittis venenatis diam, vitae ultrices erat dignissim ut. Nam elementum aliquet suscipit. Nullam efficitur magna ut felis condimentum pretium. Nullam dictum lacinia tortor ut cursus. Nunc finibus facilisis augue, non ultricies dui blandit in. Vivamus egestas purus eget auctor blandit. Donec pharetra aliquam lectus sit amet vulputate. Cras id interdum ante, sed auctor augue. Aliquam viverra enim id leo condimentum vestibulum ut at lorem. Pellentesque id consectetur lectus. Quisque imperdiet a quam eget mattis.
            </p>
            </Container>
          </div>
        </div>
    )
}