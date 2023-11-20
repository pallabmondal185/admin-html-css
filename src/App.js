import logo from './logo.svg';
import './App.css';
import './custom.css'
import Layout from './component/Layout/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCategory from './component/Pages/Category/AddCategory';
import ViewCategory from './component/Pages/Category/ViewCategory';
import EditCategory from './component/Pages/Category/EditCategory';


function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/add-category' element={<AddCategory />}></Route>
            <Route path='/view-category' element={<ViewCategory />}></Route>
            <Route path='/edit-category' element={<EditCategory />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
