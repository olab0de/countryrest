import React from 'react'
import Header from "./components/header";
import Main from "./components/main";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Countrydetails from "./components/countrydetails";
import ThemeContextProvider from "./components/themecontext";

function App() {
  return (
    <ThemeContextProvider>
        <BrowserRouter>
          <div className="App">
           <Header/>
           <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/:countryname" element={<Countrydetails/>}/>
           </Routes>
          </div>
        </BrowserRouter>
    </ThemeContextProvider>
    
  
  );
}

export default App;


