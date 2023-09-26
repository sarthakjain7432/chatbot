import React from 'react';
import {Chatbot} from 'react-chatbot-kit'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'react-chatbot-kit/build/main.css';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import config from './config';
import './App.css';
import EnrolNow from './components/EnrolNow';
import DataDisplay from './components/DataDisplay'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<EnrolNow />} />
          <Route path="/chat" element={<Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />} />
          <Route path="/data" element={<DataDisplay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
