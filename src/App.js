import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {RoutesForPage} from "./routes/routes"
// import {HomePage} from "./pages/homePage/HomePage";
// import {TodosPage} from "./pages/todosPage/TodosPage";
// import {AlbumsPage} from "./pages/albumsPage/AlbumsPage";
// import {CommentsPage} from "./pages/commentsPage/CommentsPage";
import {PostByCommentPage, HomePage, TodosPage, AlbumsPage, CommentsPage} from "./pages/index";

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
