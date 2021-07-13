import styled from "@emotion/styled";

export const ActivityContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    background-color: #eee;
  }
  .container {
    margin-top: 30px;
    width: 400px;
    height: 400px;

    display: grid;
    grid-template-columns: 200px 200px;
    grid-row: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    .box {
      background-color: #005275;
      padding: 20px;
      border-radius: 10px;
      color: #fff;
      display: flex;
      align-items: left;
      justify-content: left;
      font-size: 40px;
      font-family: sans-serif;
    }
  }
  .aktiviteti-titull {
    text-align: left;
    margin-left: 20px;
  }
  .circle {
    background-color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: block;
    margin-left: 10px;
  }
`;
export default ActivityContainer;
