import React, { Component } from "react";
// import { Row, Col, Card } from "react-bootstrap";
import "../../App.scss";

//Components
// import Footer from '../../components/common/Footer';
// import HomeNav from '../../components/HomeNav';
// import {Logo} from "../../components/common/index";

//Context
import { MainContext } from '../../contexts/MainContext';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
        };
    };
    static contextType = MainContext;

    render() {
        return (
            <div className="">About
              

     
            </div>
        );
    }
}
