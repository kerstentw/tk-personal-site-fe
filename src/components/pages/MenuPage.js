import {useState, useEffect} from 'react';
import HexMenu from '../basics/HexMenu';
import '../css/MenuPage.css';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';


export default function MenuPage() {
    const [currentSection, setCurrentSection] = useState(null)
    console.log(currentSection?.altText.split(' '));
    return (
        <div id="MenuPage" className="menu-page">
            <Container>
              menu

              <div className="alt-menu">
            {currentSection?.altText? 
              <div className="alt-menu-text">
                <Typewriter
                  options={{
                    delay: 2,
                    autoStart: true,
                    strings: currentSection.altText
                  }}
                />
              </div> 
              : <div/>
            }
            </div>

            <div className="options-page">
              <HexMenu setCurrentSection={setCurrentSection}/>
            </div>

            </Container>

        </div>
    )
}