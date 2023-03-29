import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/frames/MainMenu';
import {
  RecoilRoot
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <MainMenu/>
    </RecoilRoot>
  );
}

export default App;
