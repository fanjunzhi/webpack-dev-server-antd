import './style.css';
import React from 'react';
import {Row, Col} from 'antd';

import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

const Standard = React.createClass({
    getInitialState() {
        return {

        };
    },
    render() {
        return (
            <div>
                <Navigation />
                <div className="biao-standard-content">
                    biaozhun
                </div>
                <Footer />
            </div>
        );
    }
});

export default Standard;
