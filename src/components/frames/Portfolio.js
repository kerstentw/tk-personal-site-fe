import PageHeader from "../basics/PageHeader"
import "../css/Portfolio.css";
import {Container} from 'react-bootstrap'
import Carousel from "nuka-carousel/lib/carousel";
import mini_arrow from "../../static/mini_arrow.svg";

export default function Portfolio () {
    return (
        <div>

          <PageHeader headingText=".portfolio"/>
          <div className="portfolio-wrapper">
            <div className="portfolio-content-container">
            <Carousel
              wrapAround={false}
              cellAlign="center"
              defaultControlsConfig={{
                pagingDotsContainerClassName: "caro-paging-dots",
                pagingDotsClassName: "caro-paging-dots",
              }}
              renderCenterLeftControls= {({previousDisabled, previousSlide})=>(
                previousDisabled ||
                  <button className="caro-button-container" onClick={previousSlide} disabled={previousDisabled}>
                    <img className="prev-arrow" src={mini_arrow}/>
                  </button>
                
               )}
               renderCenterRightControls= {({nextDisabled, nextSlide})=>(
                nextDisabled ||
                <button className="caro-button-container" onClick={nextSlide} disabled={nextDisabled}>
                  <img className="next-arrow" src={mini_arrow}/>
                </button>
               )}
            >
              <Container className="portfolio-intro-content">
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
                      and applicable links in order to moreso show a portfolio of personal
                      attitude and approach (as well as allow me to feel better about unfinished work)
                    </p>
                  </div>
              </Container>

              <Container className="portfolio-slide-content">
                <h3> Things I worked on with others</h3>
                <p className="slide-summary">
                  This slide details things I worked on for companies I was a part of or for clients I worked with in the capacity of a creative or a developer.
                </p>
              </Container>

              <Container className="portfolio-slide-content">
                <h3> Things I Worked on Alone</h3>
                <p className="slide-summary">
                  This slide details things I worked on as personal projects.  As with any independent
                  project, they are in various states of completeness as they are all 'spare time' projects.
                </p>
              </Container>

              <Container className="portfolio-slide-content">
                <h3> Things I Kind of Worked on</h3>
                <p className="slide-summary">
                  This slide details things I worked on in a non-developer or builder capacity. 
                  Roles such as Program manager/Owner, team manager, or other (click on box for further details) with a company or for a client.
                </p>
              </Container>                   
            </Carousel>
            </div>
          </div>
        </div>
    )
}