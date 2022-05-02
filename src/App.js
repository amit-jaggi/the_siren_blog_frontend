import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Category from './Components/Category';
import Article from './Components/Article';

const App = () => {  
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:categories' element={<Category />} />
            <Route path='/article/:ID/:categories' element={<Article />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;