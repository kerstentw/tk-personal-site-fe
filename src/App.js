import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  About,
  Blog,
  CV,
  MainMenu,
  NFT,
  Portfolio,
  Stuff
} from './components/frames';
import {
  RecoilRoot
} from 'recoil';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu/>
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: "blog",
    element: <Blog/>
  },
  {
    path: "cv",
    element: <CV/>
  },
  {
    path: "nft",
    element: <NFT/>
  },
  {
    path: "portfolio",
    element: <Portfolio />
  },
  {
    path: "stuff",
    element: <Stuff/>
  }
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router}/>
    </RecoilRoot>
  );
}

export default App;
