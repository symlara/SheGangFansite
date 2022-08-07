import { Route, Routes } from 'react-router-dom';
import './globals.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Loginpage';
import Footer from './components/Footer';
import Meetups from './pages/meetups/shegang';
import Updates from './pages/updates/h.e.r.-updates';


function App() {
  return (
    <div>
        <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/chats" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path='/meetups/shegang' element={<Meetups />} />
          <Route path='/updates/h.e.r.-updates' element={<Updates />} />
        </Routes>
        <Footer />
        </div>
      </div>
    
  );
}

export default App;
