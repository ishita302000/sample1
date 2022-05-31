import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import RequiresAuth from './components/RequiresAuth';
import BookRide from './components/BookRide';
import OfferRide from './components/OfferRide';
import History from './components/History';
import ProfileDetails from './components/ProfileDetails';

import Login from './components/Login';
import './custom.css'

export default () => (
            <BrowserRouter>
        <Switch>
            <Route path='/' element={<RequiresAuth><Dashboard /></RequiresAuth>} />
            <Route path='/bookride' element={<RequiresAuth><BookRide /></RequiresAuth>} />
            <Route path='/offerride' element={<RequiresAuth><OfferRide /></RequiresAuth>} />
            <Route path='/history' element={<RequiresAuth><History /></RequiresAuth>} />
            <Route path='/profile' element={<RequiresAuth><ProfileDetails /></RequiresAuth>} />
            <Route path='/login' element={<SignIn />} />
           
                </Switch>
            </BrowserRouter>
);
