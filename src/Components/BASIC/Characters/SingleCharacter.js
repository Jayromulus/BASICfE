import React from 'react'
import SingleCharacterCard from './SingleCharacterCard';

export default function SingleCharacter(props) {
    return (
        <React.Fragment>
            {
                props.SSC ?
                    <SingleCharacterCard setSII={props.setSII} setSMI={props.setSMI} SMI={props.SMI} SCI={props.SCI} SSM={props.SSM} setSSM={props.setSSM} SSC={props.SSC} setSSC={props.setSSC} SSI={props.SSI} setSSI={props.setSSI} />
                    :
                    null
            }
        </React.Fragment>
    )
}