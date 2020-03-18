import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import Signup from './Signup/Signup'
import Login from './Login/Login'

export default function Auth(props) {
    const [signupShowing, setSignupShowing] = React.useState(true)

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col className={signupShowing ? "signup" : "login"} style={{ textAlign: "center" }}>
                            <img className="authlogo" src="../../Assets/curvesfordays.png" alt="title" />
                        </Col>
                    </Row>
                    {/* className={signupShowing ? "signup" : "login"} */}
                    <Card className={signupShowing ? "auth-card-signup" : "auth-card-login"}>
                        <CardBody>
                            {
                                signupShowing ?
                                    <Signup setSS={setSignupShowing} SS={signupShowing} />
                                    :
                                    <Login updateToken={props.updateToken} setSS={setSignupShowing} SS={signupShowing} />
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}