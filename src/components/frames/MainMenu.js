import "../css/MainMenu.css";
import TitlePage from "../pages/TitlePage";
import MenuPage from "../pages/MenuPage";

export default function MainMenu(props) {
  return (
    <div>
        <TitlePage className="TitlePage"/>
        <MenuPage className="MenuPage"/>
    </div>
  )
}