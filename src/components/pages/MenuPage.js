import {useState} from 'react';
import HexMenu from '../basics/HexMenu';
import '../css/MenuPage.css';
import { Container } from 'react-bootstrap';

export default function MenuPage() {
    const [currentSection, setCurrentSection] = useState(null)

    return (
        <div className="menu-page">
            <Container>
              menu
            <div className="options-page">
              <HexMenu setCurrentSection={setCurrentSection}/>
            </div>
            <div className="alt-menu">
              <div className="alt-menu-text">
                {currentSection?.altText || ""}
              </div>
            </div>
            </Container>

        </div>
    )
}