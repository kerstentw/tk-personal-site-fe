import PageHeader from "../basics/PageHeader"
import "../css/Portfolio.css";
import {Container} from 'react-bootstrap'

export default function Portfolio () {
    return (
        <div>

          <PageHeader headingText=".portfolio"/>
          <div className="portfolio-wrapper">
            <Container className="portfolio-content">
                <div className="portfolio-intro-text">
                  <h1>Show & Tell Time</h1>
                  <p>
                    While in many instances, a portfolio is an opportunity
                    for a developer, craftsperson, or artist to put their best
                    foot forward with final projects.  It has been my experience
                    that very few projects in technology, art, music, or design
                    have ever been truly 'finished'.
                  </p>

                  <p>
                    Rather than being a sealed up gathering of curated and frozen work this 
                    page is a list of things I am working on, have worked on,
                    given up on, or will pick back up after retiring with commentary 
                    and applicable links in order to show moreso a portfolio of personal
                    attitude and approach (as well as allow me to take credit for unfinished
                  </p>
                </div>
            </Container>
          </div>
        </div>
    )
}