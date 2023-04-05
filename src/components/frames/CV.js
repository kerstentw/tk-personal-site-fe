import "../css/CV.css";
import PageHeader from "../basics/PageHeader";
import resumePDF from "../../static/TK_Resume.pdf";
import cvDownloadImg from "../../static/cv_download.svg";
import {Container} from "react-bootstrap";

export default function CV () {
    return (
        <div>
          <PageHeader headingText=".curriculum-vitae"/>
          <Container className="cv-content-wrapper">
            <a target="_blank" href={resumePDF}>
                <img className="cv-download-image" src={cvDownloadImg}/>
            </a>

            <p className="cv-directions">
                  Best viewed on a Desktop with a mouse. Click if you are just browsing.  Hover if you wanna talk.  
            </p>
          </Container>
        </div>
    )
}