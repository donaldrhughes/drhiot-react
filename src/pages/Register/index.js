import React, { Component } from "react";
// import { Row, Col, Card } from "react-bootstrap";
import "../../App.scss";

//Content
import { MainContext } from '../../contexts/MainContext';

//Components
// import Registration from "../../components/Registration";
// import Loader from '../../components/common/Loader';
// import { Logo } from "../../components/common/index";
// import Message from '../../components/common/Message';
// import Footer from '../../components/common/Footer';
// import HomeNav from '../../components/HomeNav';
// import Testimonials from '../../components/Testimonials';

class Register extends Component {
    state = {
        text: "",
        // loading: true,
    };

    // componentDidMount() {
    //     this.setState({
    //         loading: false,
    //     })
    // }
    static contextType = MainContext;
    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.setState({ loading: true })
    //     let message = '';
    //     this.context.updateMessage(message);
    //     this.props.history.push('/');
    // }

    render() {
        // if (this.state.loading) return <Loader />;
        return (

                   <div>Register
            {/* <Row>
            <Col><Card>Text</Card></Col>
        </Row> */}

    </div>
        );
    }
}

export default Register;
