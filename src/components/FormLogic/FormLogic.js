import React from "react";
import NewForm from "../NewForm/NewForm";
import style1 from "../NewForm/Form.module.css";
import style2 from "../NewForm/Form2.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  createInstance,
  OptimizelyFeature,
  OptimizelyProvider,
} from "@optimizely/react-sdk";

const optimizely = createInstance({
  sdkKey: "BuXTiBzwwhu6VHskSjbMV",
});

export default function FormLogic() {
  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: uuidv4(),
      }}
    >
      <OptimizelyFeature feature='SubmitForm'>
        {(enabled, variables) => {
          let styles;
          if (variables.stylingform === "style1") {
            styles = style1;
            localStorage.setItem("style", "false");
          } else {
            styles = style2;
            localStorage.setItem("style", "true");
          }
          return (
            <NewForm optimListener={() => optimizely.track("submit")}></NewForm>
          );
        }}
      </OptimizelyFeature>
    </OptimizelyProvider>
  );
}
