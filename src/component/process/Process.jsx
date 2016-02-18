import './style.css';
import React from 'react';
import { Timeline, Row, Col } from 'antd';

import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

const Process = React.createClass({
    getInitialState() {
        return {

        };
    },
    render() {
        return (
            <div>
                <Navigation />
                <div className="biao-process-content">
                    <Row className="biao-process-say">
                        <Col className="biao-process-say-detail">
                            <strong>管理员说:</strong>无规矩不成方圆巨蟹座55e是一颗管理员说:无规矩不成方圆巨蟹座55e是一颗“超级地球”，构造为岩质，大小约为地球的两倍，质量约为地球的八倍，其直径比地球大60%达到约13000英里，而体积则达地球的8倍，密度为地球的2倍。。它和另外四颗行星一起围绕着巨蟹座中一颗类太阳恒星旋转。巨蟹座55e距离母星很近，以至于每年只有18个小时。它还是潮汐锁定的，也就是说不像地球这样自转，而是有一个永久性的白昼侧和黑夜侧。
                        </Col>
                    </Row>
                    <Timeline>
                        <Timeline.Item color="green">
                            <p>搭建第二个版本的基于antd的前端架构</p>
                            <p>2015-02-18</p>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <p>搭建第一个版本的基于react的前端架构,但是放弃了</p>
                            <p>2015-02-06</p>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            <p>开始考虑前端框架和后台架构和人员</p>
                            <p>2015-01-20</p>
                        </Timeline.Item>
                        <Timeline.Item>
                            <p>开始建立biao.design这个想法</p>
                            <p>2015-01-10</p>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <Footer />
            </div>
        );
    }
});

export default Process;
