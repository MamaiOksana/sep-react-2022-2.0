import './App.css';
import {Route, Routes} from "react-router-dom";
import {AboutPage, HomePage, NotFoundPage, PostPage, UsersPage} from "./pages";
import {Header} from "./components/Header/Header";
import {MainLayout} from "./layouts";

function App() {
  return (
      <div>
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route  index element={<HomePage/>}/>
            <Route path={'about'} element={<AboutPage/>}/>
            <Route path={'post'} element={<PostPage/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'not'} element={<AboutPage/>}/>
        </Route>
        <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
      </div>
  );
}

export default App;
