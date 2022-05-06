import React from 'react';
import './App.css';
import {actions,orginals,comedy,horror,romantic,documentaries} from './Urls'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPoster/RowPost';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={orginals}  title ='Netflix Orginals' />
     <RowPost url={actions} title ='Action Thrillers' isOne />
     <RowPost url={comedy} title ='Comedy Movies' isTwo />
     <RowPost url={horror} title ='Horror Movies' isThree />
     <RowPost url={romantic} title ='Romantic Movies' isFour />
     {/* <RowPost url={documentaries} title ='Documentaries' isFive /> */}


    </div>
  );
}

export default App;
