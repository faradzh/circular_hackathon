import React from 'react';
import { Link } from 'react-router';
import Navigation from './components/navigation';
import Header from './components/header';
require('../../css/agency.css');
require('../../css/sb-admin-2.css');
require('../../css/vendors/bootstrap.css');

export default class Index extends React.Component {
    componentDidMount () {
    }

    render () {
        return (
            <div>
                <Navigation />
                <Header />
            </div>
        )
    }
}