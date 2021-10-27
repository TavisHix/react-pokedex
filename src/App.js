import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Auxilary from './hoc/Auxiliary/Auxiliary';
import Layout from './hoc/Layout/Layout';


const App = () =>{

    return (
      <BrowserRouter> 
        <Auxilary>
          <Layout/>
        </Auxilary>
      </BrowserRouter>

      
    );
}

export default App;
