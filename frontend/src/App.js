import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Login from './pages/Loginpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/chats" element={<Chat />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
