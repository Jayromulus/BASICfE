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
                    <Card className={signupShowing ? "signup" : "login"}>
                        <CardBody>
                            {
                                signupShowing ?
                                <Signup setSS={setSignupShowing} SS={signupShowing}/>
                                :
                                <Login updateToken={props.updateToken} setSS={setSignupShowing} SS={signupShowing}/>
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}