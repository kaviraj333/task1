import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FileManagement from "./pages/FileManagement";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<FileManagement />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
