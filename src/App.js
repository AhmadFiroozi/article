import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import AddArticle from './pages/addArticle/AddArticle'
import Article from './pages/article/Article'
import EditArticle from './pages/editArticle/EditArticle'
import './App.css';
function App() {
  return(
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/add-article' element={<AddArticle/>}/>
    <Route path='/article/:articleID' element={<Article/>}/>
    <Route path='/edit-article/:articleID' element={<EditArticle/>}/>
   </Routes>
   </BrowserRouter>
    )
}

export default App;
