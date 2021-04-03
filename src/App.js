import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "gray" }}>おはようございます！</h1>
      <ColorfulMessage color="pink">小松奈々です！</ColorfulMessage>
      <ColorfulMessage color="blue">神木隆之介です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
