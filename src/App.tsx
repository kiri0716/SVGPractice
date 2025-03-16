/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CircleIndicator } from "./CircleIndicator";
import { Slime } from "./Slime";

function App() {
  return (
    <>
      <div css={styles.root}>
        <CircleIndicator />
      </div>
      <div css={styles.root}>
        <Slime />
        <Slime color="orange"/>
        <Slime color="#949495"/>
        <Slime color="yellow"/>
        <Slime color="#00ff00"/>
      </div>
    </>
  );
}

export default App;

const styles = {
  root: css({
    display: "flex",
    justifyContent: "center", // 横方向の中央揃え
    alignItems: "center", // 縦方向の中央揃え
  }),
};
