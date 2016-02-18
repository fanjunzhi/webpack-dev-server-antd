import './style.css';
import React from 'react';
import {Row, Col} from 'antd';

const Footer = React.createClass({
    getInitialState() {
        return {

        };
    },
    render() {
        return (
            <footer className="biao-footer">
                <div className="biao-footer-content">
                    <Row>
                        <Col className="col-8">
                            <Row className="biao-footer-content-title" type="flex" justify="center">
                                关于我
                            </Row>
                            <Row className="biao-footer-content-detail" type="flex" justify="center">
                                一个码农
                            </Row>
                            <Row className="biao-footer-content-detail" type="flex" justify="center">
                                共享群号: 111111
                            </Row>
                        </Col>
                        <Col className="col-8">
                            <Row className="biao-footer-content-title" type="flex" justify="center">
                                友情链接
                            </Row>
                            <Row className="biao-footer-content-detail" type="flex" justify="center">
                                网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一
                                网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一 网站一
                            </Row>
                        </Col>
                        <Col className="col-8">
                            <Row className="biao-footer-content-title" type="flex" justify="center">
                                <span>关于网站</span>
                            </Row>
                            <Row className="biao-footer-content-detail" type="flex" justify="center">
                                <span>爱名名:自己的个人主页。由于爱人名中带有名字，所以个人主页命名为爱名名。该网站用于记录一些信息。若用到了你的相关技术，并且你不希望我使用，请联系我或留言，我即使改正.</span>
                            </Row>
                            <Row className="biao-footer-content-detail" type="flex" justify="center">
                                <span>Copyright © woaizm.com All Rights Reserved蜀ICP备15012222号</span>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </footer>
        );
    }
});

export default Footer;
