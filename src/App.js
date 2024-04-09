import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'





 const App =() => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API
  
  const [mode , setMode] = useState('light');
  const [progress , setProgress] = useState(0)

  
  const toggleMode = () =>{
if(mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor = 'grey';
}
else{
  setMode ('light');
  document.body.style.backgroundColor = 'white';
}

  }
  
    return (
      <div>
        <Router>
       <NavBar mode={mode} toggleMode={toggleMode}/>
       <LoadingBar
       height={4}
        color='#f11946'
        progress={progress}
        mode={mode}
        toggleMode={toggleMode}
        
      />
       <Routes>
      
<Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general" />}/>
<Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business"/>}/>
<Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
<Route exact path="/health" element={<News setProgress={setProgress}  apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health"/>}/>
<Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science"/>}/>
<Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
<Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>}/>


      
       </Routes>

       </Router>
      </div>
    )
  }

export default App;