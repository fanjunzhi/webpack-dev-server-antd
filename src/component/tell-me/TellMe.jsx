import './style.css';
import React from 'react';
import { Button, Form, Input,Tooltip,message } from 'antd';

import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

const TellMe = React.createClass({
    getInitialState() {
        return {

        };
    },
    render() {
        return (
            <div>
                <Navigation />
                <div className="biao-tell-content">
                    <div className="biao-tell-me">
                        <strong>管理员说:</strong>无规矩不成方圆巨蟹座55e是一颗“超级地球”，构造为岩质，大小约为地球的两倍，质量约为地球的八倍，其直径比地球大60%达到约13000英里，而体积则达地球的8倍，密度为地球的2倍。。它和另外四颗行星一起围绕着巨蟹座中一颗类太阳恒星旋转。巨蟹座55e距离母星很近，以至于每年只有18个小时。它还是潮汐锁定的，也就是说不像地球这样自转，而是有一个永久性的白昼侧和黑夜侧。
                    </div>
                    <div className="ds-thread" data-thread-key="tellme" data-title="tellme" data-url="http://localhost:63342/BiaoZhun-React/html/tell-me.html"></div>
                </div>
                <Footer />
            </div>
        );
    }
});

export default TellMe;
