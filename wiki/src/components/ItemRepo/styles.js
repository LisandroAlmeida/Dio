import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  background-color: #fafafa;
  margin: 16px auto;
  padding: 16px;
  border-radius: 8px;

  h3 {
    font-size: 20px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }

  a {
    color: #0070f3;
    margin-right: 16px;
    text-decoration: none;
    font-weight: bold;
  }

  .remover {
    color: red;
    cursor: pointer;
  }

  hr {
    margin-top: 16px;
    border: none;
    height: 1px;
    background-color: #ccc;
  }
`;
