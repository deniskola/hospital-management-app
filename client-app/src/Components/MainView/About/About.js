import React, { useEffect } from "react";
import AboutDash from "./AboutDash/AboutDash";
import { Button } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
//import LoadingComponent from "../../../LoadingComponent";


function About() {
  const { aboutStore,userStore } = useStore();
  const {user} = userStore;

  useEffect(() => {
    aboutStore.loadAbout();
  }, [aboutStore])

  //if (aboutStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <div>
          <div> 
            {user.role === "admin" &&
            <Button onClick={() => aboutStore.openForm()} color="black" content="+" floated="left"/>
            }
            <AboutDash />
          </div> 
    </div>
  )
}

export default observer(About)