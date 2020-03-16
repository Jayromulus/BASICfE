import React from 'react'
import { Button, Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import SingleCharacter from '../Characters/SingleCharacter';

export default function Landing(props) {
    const [allCharacters, setAllCharacters] = React.useState([])
    const [showSingleCharacter, setShowSingleCharacter] = React.useState(false)
    const [singleCharacterId, setSingleCharacterId] = React.useState(0)

    function getCharacters() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:44304/api/character", requestOptions)
            .then(response => response.json())
            .then(result => {setAllCharacters(result); console.log(result)})
            .catch(error => console.log('error', error));
    }

    React.useEffect(() => {
        getCharacters()
    }, [])

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <Button className="float-right" style={{ marginTop: "4%" }} onClick={() => props.clearToken()}>Logout</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    {
                        showSingleCharacter ?
                        <SingleCharacter SSC={showSingleCharacter} setSSC={setShowSingleCharacter} SCI={singleCharacterId} />
                            :
                            allCharacters.map((character, index) => { 
                                return (
                                    <Card onClick={() => {setSingleCharacterId(character.CharId); setShowSingleCharacter(!showSingleCharacter)}} style={{ margin: "2.5% auto", textAlign: "center" }} key={index}>
                                        <CardHeader>{character.Name}</CardHeader>
                                        <CardBody>
                                            {character.ShortDescription}
                                        </CardBody>
                                    </Card>
                                )
                            })
                    }
                </Row>

            </Container>

        </React.Fragment>
    )
}