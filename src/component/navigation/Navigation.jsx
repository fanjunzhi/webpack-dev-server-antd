import './style.css';
import React from 'react';
import { Button, Form, Input,Tooltip,message } from 'antd';

const Navigation = React.createClass({
    getInitialState() {
        return {
            currentMenu: 'home'
        };
    },
    componentDidMount() {
        let location = window.location.href;
        let fileArry = location.split('/');
        let file = fileArry[fileArry.length - 1].split('.')[0];
        let currentMenu = 'home';
        switch(file) {
            case 'home':
                currentMenu = 'home';
                break;
            case 'tell-me':
                currentMenu = 'tell-me';
                break;
            case 'process':
                currentMenu = 'process';
                break;
            case 'standard':
                currentMenu = 'standard';
                break;
            default:
                currentMenu = 'home';
                break;
        }
        this.setState({
            currentMenu: currentMenu
        });
    },
    changeMenu(value) {
        //const location = '';
        const location = 'http://localhost:63342/BiaoZhun-React/html';
        switch(value) {
            case 'home':
                window.location.href = location + '/home.html';
                break;
            case 'tell-me':
                window.location.href = location + '/tell-me.html';
                break;
            case 'process':
                window.location.href = location + '/process.html';
                break;
            case 'standard':
                window.location.href = location + '/standard.html';
                break;
            default:
                window.location.href = location + '/home.html';
                break;
        }
    },
    render() {
        return (
            <header className="biao-header">
                <div className="biao-header-content">
                    <img src="http://shp.qpic.cn/lolwebvideo/201406/fbdf9997520d643275d7e9e3c6140a73/0" className="biao-header-logo" alt="logo" title="company logo"/>
                    <ul className="biao-header-ul">
                        <li className={this.state.currentMenu === 'home' ? 'active' : ''} onClick={this.changeMenu.bind(this, 'home')}>首页</li>
                        <li className={this.state.currentMenu === 'standard' ? 'active' : ''} onClick={this.changeMenu.bind(this, 'standard')}>标准</li>

                        <li className={this.state.currentMenu === 'process' ? 'active' : ''} onClick={this.changeMenu.bind(this, 'process')}>进度</li>
                        <li className={this.state.currentMenu === 'tell-me' ? 'active' : ''} onClick={this.changeMenu.bind(this, 'tell-me')}>反馈</li>
                    </ul>
                </div>
            </header>
        );
    }
});

export default Navigation;
