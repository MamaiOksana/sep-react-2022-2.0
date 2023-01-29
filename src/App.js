import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {RoutesForPage} from "./routes/routes"
import {HomePage} from "./pages/HomePage/homePage";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {PostByCommentPage} from "./pages/PostByCommentPage/PostByCommentPage";

function App() {
  return (
      <div>
             <Routes>
                 <Route path={RoutesForPage.index} element={<MainLayout/>}>
                     <Route path={RoutesForPage.index}  element={<HomePage/>}/>
                     <Route path={RoutesForPage.todos}  element={<TodosPage/>}/>
                     <Route path={RoutesForPage.albums}  element={<AlbumsPage/>}/>
                     <Route path={RoutesForPage.comments}  element={<CommentsPage/>}/>
                        <Route path={RoutesForPage.postById} element={<PostByCommentPage/>}/>
                 </Route>

             </Routes>
      </div>
  );
}

export default App;
