import React, { useState } from "react";
import {Button, Item, Segment} from "semantic-ui-react";
import {About} from "../About";


export default function AboutList({about, selectAbout, deleteAbout, submitting}) {
    const [target, setTarget] = useState('');

    function handleAboutDelete(e, id){
        setTarget(e.currentTarget.name);
        deleteAbout(id);
    }
    return(
        <Segment>
            <Item.Group divided>
                {about.map(ab =>(
                    <Item key={ab.id}>
                        <Item.Content>
                            <Item.Header as='a'>{ab.title}</Item.Header>
                            <Item.Description>{ab.description}</Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectAbout(ab.id)} floated="left" content="View" color="blue"></Button>
                                <Button name={ab.id} loading={submitting && target === ab.id} onClick={(e) => handleAboutDelete(e, ab.id)} floated="left" content="Delete" color="red"></Button>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>

    )
}
