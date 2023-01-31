import './App.css';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/index";
import {RoutesForPage} from "./routes/routes"
import {PostByCommentPage, HomePage, TodosPage, AlbumsPage, CommentsPage} from "./pages/index";

function App() {
  return (
      <div>
             <Routes>
                 <Route path={RoutesForPage.index} element={<MainLayout/>}>
                     <Route path={RoutesForPage.index}  element={<HomePage/>}/>
                     <Route path={RoutesForPage.todos}  element={<TodosPage/>}/>
                     <Route path={RoutesForPage.albums}  element={<AlbumsPage/>}/>
                     <Route path={RoutesForPage.comments}  element={<CommentsPage/>}>
                         <Route path={RoutesForPage.postId} element={<PostByCommentPage/>}/>
                     </Route>
                 </Route>

             </Routes>
      </div>
  );
}

export default App;
