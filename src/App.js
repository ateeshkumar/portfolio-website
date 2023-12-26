import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='projects' element={<Project/>}/>
      <Route path='contact' element={<Contact/>}/>
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
