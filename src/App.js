import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Table from './components/views/Table/Table';
import Waiter from './components/views/Waiter/Waiter';
import Homepage from './components/views/Homepage/Homepage';
import Booking from './components/views/Booking/Booking';
import Events from './components/views/Events/Events';
import Order from './components/views/Order/Order';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename={'/panel'}>
        <MainLayout>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            <Route exact path={process.env.PUBLIC_URL + '/table'} component={Table} />
            <Route exact path={`${process.env.PUBLIC_URL}/table/booking/:id`} component={Booking} />
            <Route exact path={`${process.env.PUBLIC_URL}/table/booking/new`} component = {Booking}/>
            <Route exact path={`${process.env.PUBLIC_URL}/table/events/:id`} component = {Events}/>
            <Route exact path={`${process.env.PUBLIC_URL}/table/events/new`} component = {Events}/>
            <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={Order} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
