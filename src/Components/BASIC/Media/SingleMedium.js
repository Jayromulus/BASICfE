import React from 'react'
import { Card, CardHeader, CardBody, Button, Row, Col } from 'reactstrap'

export default function SingleMedium(props){
    const [singleMediumInformation, setSingleMediumInformation] = React.useState({})

    function getSingleMeia(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://localhost:44304/api/media/${props.SMI}`, requestOptions)
            .then(response => response.json())
            .then(result => {setSingleMediumInformation(result); console.log(result)})
            .catch(error => console.log('error', error));
    }


    React.useEffect(() => {getSingleMeia()}, [])

    return (
        <Card style={{ margin: "2.5% auto" }}>
            <CardHeader style={{textAlign:"center"}}>
                {singleMediumInformation.Title} | id: {singleMediumInformation.MediaId}
            </CardHeader>
            <CardBody>
                <Row>
                    <b className="m-auto">{singleMediumInformation.MediaType}</b><br/>
                </Row>
                <Row>
                    <Col>
                       {singleMediumInformation.Description}
                    </Col>
                    {
                        singleMediumInformation.AddedBy !== null ?
                        <Col sm={12} style={{textAlign:"center"}}>
                            <hr />
                            Added By: {singleMediumInformation.AddedBy}
                        </Col>
                        :
                        null
                    }

                </Row>
            </CardBody>
            <Button onClick={() => {props.setSSM(!props.SSM); props.setSSC(!props.SSC);}}>Return</Button>
        </Card>
    )
}