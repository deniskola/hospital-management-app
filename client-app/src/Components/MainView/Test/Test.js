import React, { useEffect } from "react";
import UserDash from "./UserDash/UserDash";
import { Button } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import RegisterForm from "./RegisterForm";
//import LoadingComponent from "../../../LoadingComponent";


function Test() {
  const { userStore } = useStore();
  

  useEffect(() => {
    userStore.loadUser();
  }, [userStore])

  //if (aboutStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <div>
          <div> 
            
            <UserDash style={{position: "relative"}}/>
          </div> 
    </div>
  )
}

export default observer(Test)