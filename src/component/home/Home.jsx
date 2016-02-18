import './style.css';
import React from 'react';
import { Button, Form, Input,Tooltip,message } from 'antd';

import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import Article from '../article/Article';

const Home = React.createClass({
    getInitialState() {
        return {

        };
    },
    render() {
        return (
            <div>
                <Navigation />
                <div className="biao-home-content">
                    <Article />
                </div>
                <Footer />
            </div>
        );
    }
});

export default Home;
