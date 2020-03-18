import React from 'react'
import { Button, Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import SingleCharacter from '../Characters/SingleCharacter';
import SingleMedium from '../Media/SingleMedium';
import SingleItem from '../Items/SingleItem'

export default function Landing(props) {
    const [allCharacters, setAllCharacters] = React.useState([])
    const [showSingleCharacter, setShowSingleCharacter] = React.useState(false)
    const [showSingleItem, setShowSingleItem] = React.useState(false)
    const [showSingleMedium, setShowSingleMedium] = React.useState(false)
    const [singleCharacterId, setSingleCharacterId] = React.useState(0)
    const [singleMediaId, setSingleMediaId] = React.useState(0)
    const [singleItemId, setSingleItemId] = React.useState(0)

    function getCharacters() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:44304/api/character", requestOptions)
            .then(response => response.json())
            .then(result => { setAllCharacters(result); console.log(result) })
            .catch(error => console.log('error', error));
    }

    React.useEffect(() => {
        getCharacters()
    }, [])

    return (
        <React.Fragment>
            <Container>
                <Row className="sticky-top" style={{backgroundColor:"#483d8b"}}>
                    <Col style={{paddingBottom:"2%"}}>
                        <img className="logo" src="../../Assets/curvesfordays.png" alt="title" />
                        <Button className="float-right" style={{ marginTop: "4%" }} onClick={() => props.clearToken()}>Logout</Button>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%", marginBottom: "5%" }}>
                    {
                        showSingleCharacter && !showSingleItem && !showSingleMedium ?
                            <SingleCharacter setSII={setSingleItemId} setSMI={setSingleMediaId} SSI={showSingleItem} setSSI={setShowSingleItem} SSM={showSingleMedium} setSSM={setShowSingleMedium} SSC={showSingleCharacter} setSSC={setShowSingleCharacter} SCI={singleCharacterId} />
                            :
                            !showSingleCharacter && !showSingleItem && showSingleMedium ?
                                <SingleMedium SMI={singleMediaId} SSM={showSingleMedium} setSSM={setShowSingleMedium} SSC={showSingleCharacter} setSSC={setShowSingleCharacter} />
                                :
                                !showSingleCharacter && showSingleItem && !showSingleMedium?
                                <SingleItem SSI={showSingleItem} setSSI={setShowSingleItem} SII={singleItemId} SSC={showSingleCharacter} setSSC={setShowSingleCharacter} />
                                :
                                allCharacters.map((character, index) => {
                                    return (
                                        <Col key={index} lg={6}>
                                            <Card onClick={() => { setSingleCharacterId(character.CharId); setShowSingleCharacter(!showSingleCharacter) }} style={{ margin: "2.5% auto", textAlign: "center" }}>
                                                <CardHeader>{character.Name}</CardHeader>
                                                <CardBody>
                                                    {character.ShortDescription}
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })

                    }
                </Row>

            </Container>

        </React.Fragment>
    )
}