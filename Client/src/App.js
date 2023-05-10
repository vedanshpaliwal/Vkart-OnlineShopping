import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Cart from './components/cart/Cart';
import { TemplateProvider } from './components/template/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/ItemDetails/DetailView';
import Viewall from './components/viewAll/Viewall';
import { Box } from '@material-ui/core';
import ConfirmOrder from './components/cart/ConfirmOrder';

function App() {
  return (
    <div>
      <TemplateProvider>
        <ContextProvider>
          <BrowserRouter>

            <Header />
            <Box style={{ marginTop: 54 }}>
              <Switch>
                <Route exact path='/' ><Home /></Route>
                <Route exact path='/cart' ><Cart /></Route>
                <Route exact path='/product/:id' > <DetailView /> </Route>
                <Route exact path='/viewALLProducts'> <Viewall /> </Route>
                <Route exact path='/confirmOrder'> <ConfirmOrder /> </Route>




              </Switch>
            </Box>
            {/* <Route path="/" component={Home} /> */}


          </BrowserRouter>
        </ContextProvider>
      </TemplateProvider>

      {/* <Home/> */}
    </div>
  );
}

export default App;


