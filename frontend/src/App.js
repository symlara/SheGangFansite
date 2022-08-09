import { Route, Routes } from 'react-router-dom';
import './globals.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Loginpage';
import Footer from './components/Footer';
import Meetups from './pages/meetups/shegang';
import Updates from './pages/updates/h.e.r.-updates';
import Advise from './pages/advise/advise';
import Albums from './pages/albums/albums';
import Videos from './pages/videos/videos';
import Samples from './pages/samples/samples';

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
          <Route path="/advise/advise" element={<Advise />} />
          <Route path="/albums/albums" element={<Albums />} />
          <Route path="/videos/videos" element={<Videos />} />
          <Route path="/samples/samples" element={<Samples />} />
        </Routes>
        <Footer />
        </div>
      </div>
    
  );
}

export default App;
