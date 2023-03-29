import HexMenu from '../basics/HexMenu';
import '../css/MenuPage.css';
import { Container } from 'react-bootstrap';

export default function MenuPage() {
    return (
        <div className="menu-page">
            <Container>
              Menu
            <div className="options-page">
              <HexMenu/>
            </div>
            </Container>

        </div>
    )
}