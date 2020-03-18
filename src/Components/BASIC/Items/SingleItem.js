import React from 'react'
import { Card, CardHeader, CardBody, Button, Row, Col } from 'reactstrap'

export default function SingleItem(props){
    const [singleItemInformation, setSingleInformation] = React.useState({})

    function getSingleItem(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://localhost:44304/api/item/${props.SII}`, requestOptions)
            .then(response => response.json())
            .then(result => {setSingleInformation(result); console.log(result)})
            .catch(error => console.log('error', error));
    }


    React.useEffect(() => {getSingleItem()}, [])

    return (
        <Card style={{ margin: "2.5% auto" }}>
            <CardHeader style={{textAlign:"center"}}>
                {singleItemInformation.Name} | id: {singleItemInformation.ItemId}
            </CardHeader>
            <CardBody>
                <Row>
                    <b className="m-auto">{singleItemInformation.Type}</b><br/>
                </Row>
                <Row>
                    {singleItemInformation.Description}
                    {
                        singleItemInformation.AddedBy !== null ?
                        <Col sm={12} style={{textAlign:"center"}}>
                            <hr />
                            {singleItemInformation.AddedBy}
                        </Col>
                        :
                        null
                    }

                </Row>
            </CardBody>
            <Button onClick={() => {props.setSSI(!props.SSI); props.setSSC(!props.SSC);}}>Return</Button>
        </Card>
    )
}