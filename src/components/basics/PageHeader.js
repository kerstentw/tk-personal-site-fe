import Arrow from "./DownArrow"
import { Link } from 'react-router-dom';
import '../css/PageHeader.css';


export default function PageHeader(props) {
    return (
        <div className="page-header-container">
            <Link to="/#MenuPage" > 
              <Arrow className="header-arrow" />
            </Link>
            <span className="header-text">
              {props.headingText}
            </span>
        </div>
    )
}