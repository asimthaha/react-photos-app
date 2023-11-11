import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhotosAdd from "./components/PhotosAdd";
import PhotosSearch from "./components/PhotosSearch";
import PhotosDelete from "./components/PhotosDelete";
import PhotosView from "./components/PhotosView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PhotosAdd />}></Route>
          <Route path="search" element={<PhotosSearch />}></Route>
          <Route path="delete" element={<PhotosDelete />}></Route>
          <Route path="view" element={<PhotosView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
