import React from 'react'
import { Button, Card, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap'

export default function SingleCharacter(props) {
    const [singleCharacterInformation, setSingleCharacterInformation] = React.useState({})

    function getSingleCharacter() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://localhost:44304/api/character?charId=${props.SCI}`, requestOptions)
            .then(response => response.json())
            .then(result => { setSingleCharacterInformation(result); console.log(result) })
            .catch(error => console.log('error', error));
    }

    React.useState(() => {
        getSingleCharacter()
    }, [])

    return (
        <React.Fragment>
            <Card style={{ margin: "2.5% auto" }}>
                <CardHeader style={{ textAlign: "center" }}>{singleCharacterInformation.Name} | id:{singleCharacterInformation.CharId}</CardHeader>
                <CardBody>
                    <p style={{marginBottom:"1%", textAlign:"center"}}><b>Description:</b></p>
                    <p>{singleCharacterInformation.Description}</p>
                    <hr />
                    <Row>
                        <Col sm="12" style={{textAlign:"center"}}><b>Items:</b></Col>
                        {
                            singleCharacterInformation.Items != undefined ?
                                singleCharacterInformation.Items.map((item, index) => {
                                    return (
                                        <Col md="6" key={index}>
                                            <Card style={{margin: "2.5% auto", backgroundColor:"#17a3b83e", width:"100%"}}>
                                                <CardHeader style={{fontSize:"15pt", textAlign:"center"}}>
                                                    {item.Name}
                                                </CardHeader>
                                                <CardBody style={{textAlign:"center"}}>
                                                    {item.Type}
                                                </CardBody>
                                                {
                                                    item.AddedBy != undefined ?
                                                    <CardFooter style={{fontSize:"12pt", textAlign: "center"}}>
                                                        Added By: {item.AddedBy}
                                                    </CardFooter>
                                                    :
                                                    null
                                                }
                                            </Card>
                                        </Col>
                                    )
                                })
                                :
                                null
                        }
                    </Row>
                    <hr />
                    <Row>
                        <Col sm="12" style={{textAlign:"center"}}><b>Media:</b></Col>
                        {
                            singleCharacterInformation.Items != undefined ?
                                singleCharacterInformation.Media.map((medium, index) => {
                                    return (
                                        <Col md="6" key={index}>
                                            <Card style={{margin: "2.5% auto", backgroundColor:"#17a3b83e", width:"100%"}}>
                                                <CardHeader style={{fontSize:"15pt", textAlign:"center"}}>
                                                    {medium.Title}
                                                </CardHeader>
                                                <CardBody style={{textAlign:"center"}}>
                                                    {medium.MediaType}
                                                </CardBody>
                                                {
                                                    medium.AddedBy != undefined ?
                                                    <CardFooter style={{fontSize:"12pt", textAlign: "center"}}>
                                                        Added By: {medium.AddedBy}
                                                    </CardFooter>
                                                    :
                                                    null
                                                }
                                            </Card>
                                        </Col>
                                    )
                                })
                                :
                                null
                        }
                    </Row>
                </CardBody>
                <CardFooter style={{ fontSize: "12pt", textAlign: "center" }}>
                    Added By: {singleCharacterInformation.AddedBy}
                </CardFooter>
                <Button className="float-center" onClick={() => props.setSSC(!props.SSC)}>Switch Back</Button>
            </Card>
        </React.Fragment>
    )
}