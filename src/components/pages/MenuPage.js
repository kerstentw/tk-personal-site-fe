import {useState, useEffect} from 'react';
import HexMenu from '../basics/HexMenu';
import '../css/MenuPage.css';
import { Container } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import WaveParticles from '../basics/ParticleWaves';

export default function MenuPage() {
    const [currentSection, setCurrentSection] = useState(null)

    return (
        <div id="MenuPage" className="menu-page">
            <Container>
              #menu

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
              <span className="get-in-your-box just-drown">
                SSBhbSBzbyB0aXJlZCBhbGwgdGhlIHRpbWUuICBJIGNhbiBoZWFyIHRoZSB0aGluZ3MgdGhleSBkb24ndCBzYXkgaW4gbXkgaGVhZCBhbmQgaXQgZXhoYXVzdHMgbWUuIEkgbmVlZCB0byBzZWVrIGhlbHAgYnV0IEkgYW0gc3R1Y2sgaW4gYSByb29tIG9mIG15IG93biBtaW5kJ3MgY2NyZWF0aW9uLg==
              </span>

        </div>
    )
}