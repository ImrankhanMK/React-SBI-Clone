
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Marque from './components/Marque';
import Links from './components/Links';
import Slide from './components/Slide';
import Footer from './components/Footer';
 

function App() {
  return (
   <div className='appcomp'>
    <Header/>
    <Navbar/>
    <Login/>
    <Marque/>
    <Links/>
    <Slide/>
    <Footer/>
   </div>
  )
}

export default App;
