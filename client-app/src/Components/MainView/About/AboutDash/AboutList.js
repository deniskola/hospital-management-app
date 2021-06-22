import React, { useState } from "react";
import {Button, Item, Segment} from "semantic-ui-react";
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function AboutList() {
    
    const {aboutStore, userStore} = useStore();
    const {deleteAbout, aboutByTitle, loading} = aboutStore;
    const {user} = userStore;
    const [target, setTarget] = useState('');

    function handleAboutDelete(e, id){
        setTarget(e.currentTarget.name);
        deleteAbout(id);
    }

    return(
        <Segment>
            <Item.Group divided>
                {aboutByTitle.map(ab =>(
                    <Item key={ab.id}>
                        <Item.Content>
                            <Item.Header as='a'>{ab.title}</Item.Header>
                            <Item.Description>{ab.description}</Item.Description>
                            <Item.Extra>
                            {user.role === "admin" && ( //only if the user is an admin can access these buttons
                            <>   
                            <Button onClick={() => aboutStore.selectAbout(ab.id)} floated="left" content="View"></Button>
                            <Button name={ab.id} loading={loading && target === ab.id} onClick={(e) => handleAboutDelete(e, ab.id)} floated="left" content="Delete" color="red"></Button>
                            </>
                            )}
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>

    )
})
