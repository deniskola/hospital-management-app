import React, {useEffect} from "react";
import AboutDash from "./AboutDash/AboutDash";
import {useStore} from "../../../stores/store";
import {observer} from "mobx-react-lite";
import LoadingComponent from "../../../LoadingComponent";

function About() {
  const {aboutStore, userStore} = useStore();
  const {user} = userStore;

  useEffect(() => {
    aboutStore.loadAbout();
  }, [aboutStore]);

  if (aboutStore.loadingInitial)
    return <LoadingComponent content="Loading..." />;

  return (
    <div>
      <div>
        <AboutDash />
      </div>
    </div>
  );
}

export default observer(About);
