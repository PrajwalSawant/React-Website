import React from "react";
// import "./App.css";
import Post from "./component/Post";
import Count from "./component/count";
import List from "./component/list";
import Form from "./component/form";
import Practice from "./component/practice";
import Practicetxt from "./component/practicetxt";
import Ref from "./component/Ref";
import Error from "./component/error";
import ErrorBoundary from "./component/ErrorBoundary";
import Counter from "./component/Counter";
import Hover from "./component/Hover";
import PureComp from "./component/PureComp";
import RegComp from "./component/RegComp";
import ParentComp from "./component/ParentComp";
import Render from "./component/Render";
import ComponentD from "./component/componentD";
import { UserProvider } from "./component/userContext";
import PostForm from "./component/PostForm";
import PracticeHook from "./Hooks/practiceHook";
import HookCount from "./component/HookCount";
import HookClient from "./component/HookClient";
import ToggleHook from "./Hooks/ToggleHook";
import Tick from "./component/Tick";
import TickHook from "./Hooks/TickHook";
import DataFetch from "./component/DataFetch";
import ContextHook from "./component/ContextHook";
import SimpleContext from "./Hooks/SimpleContext";
import UseReducer from "./Hooks/UseReducer";
import UseReducerOne from "./Hooks/UseReducerOne";
import DataFetchHook from "./Hooks/DataFetchHook";
import DataFetchUseReducerHook from "./Hooks/DataFetchUseReducerHook";
import UseCallBack from "./Hooks/UseCallback";
import UseMemo from "./Hooks/UseMemo";
import UseRef from "./Hooks/useRef";
import Hook11 from "./Hooks/Hook11";
import CounteHook from "./Hooks/CounteHook";

// export const UserContext = React.createContext();
// export const UserChannel = React.createContext();
import Element from "./component/Element";
import Name from "./component/Name";
import Conditional from "./component/Conditional";
import Navbar from "./component/CoursePrac/Navbar";
import TextForm from "./component/CoursePrac/TextForm";
function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <div>
          <TextForm heading="Enter Text Here" />
        </div>
      </>
      {/* <Name /> */}
      {/* <Conditional /> */}
      {/* <Child /> */}
      {/* <Handler /> */}
      {/* <Element /> */}
      {/* <Hello name="Armaan" city="Mumbai">
        <button>Submit</button>
      </Hello>
      <Hello name="Armaaniii" city="goa" />
      <Hello name="Armaannnn" city="russ" /> */}
      {/* <CounteHook /> */}
      {/* <Hook11 /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallBack /> */}
      {/* <DataFetchUseReducerHook /> */}
      {/* <DataFetchHook /> */}
      {/* <UseReducerOne /> */}
      {/* <UseReducer /> */}
      {/* <UserContext.Provider value={"Armaan"}>
        <UserChannel.Provider value={"rhtdm"}>
          <SimpleContext />
          <ContextHook />
        </UserChannel.Provider>
      </UserContext.Provider> */}
      {/* <DataFetch /> */}
      {/* <TickHook /> */}
      {/* <Tick /> */}
      {/* <ToggleHook /> */}
      {/* <HookClient /> */}
      {/* <HookCount /> */}
      {/* <PostForm /> */}
      {/* <PracticeHook /> */}
      {/* <Post />
       */}
      {/* <UserProvider value="Johnson">
        <ComponentD />
      </UserProvider> */}

      {/* <Render
        render={(count, increment) => (
          <Counter count={count} increment={increment} />
        )}
      />
      <Render
        render={(count, increment) => (
          <Hover count={count} increment={increment} />
        )}
      /> */}
      {/* <PureComp />
      <RegComp />
      <ParentComp /> */}
      {/* <Counter />
      <Hover /> */}
      {/* <ErrorBoundary>
        <Error heroName="Tom" />
        <Error heroName="Jerry" />
      </ErrorBoundary> */}
      {/* <Ref /> */}
      {/* <Form /> */}
      {/* <List /> */}
      {/* <Practicetxt /> */}
      {/* <Practice /> */}
      {/* <Count /> */}
      {/* <Practice name="naina" hero="superman" /> */}
      {/*  <p>hello User</p>
      </Practice>
      

      <Practicetxt name="armaan bhai">
        <button>Submit</button>
      </Practicetxt> */}
    </div>
  );
}

export default App;
