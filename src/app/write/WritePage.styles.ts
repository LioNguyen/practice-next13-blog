import { Container, Input } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Wrapper = styled(Container)`
  .select {
    margin-bottom: 50px;
    padding: 10px 20px;
    margin-left: 50px;
    width: max-content;
  }

  .editor {
    display: flex;
    gap: 20px;
    height: 700px;
    position: relative;
  }

  .button,
  .addButton {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid var(--textColor);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .addButton {
    border-color: #1a8917;
  }

  .add {
    display: flex;
    gap: 20px;
    background-color: var(--bg);
    position: absolute;
    z-index: 999;
    width: 100%;
    left: 50px;
  }

  .textArea {
    width: 100%;
  }

  .publish {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 10px 20px;
    border: none;
    background-color: #1a8917;
    color: white;
    cursor: pointer;
    border-radius: 20px;
  }

  .category.style {
    background-color: #57c4ff31;
  }

  .category.fashion {
    background-color: #da85c731;
  }

  .category.food {
    background-color: #7fb88133;
  }

  .category.travel {
    background-color: #ff795736;
  }

  .category.culture {
    background-color: #ffb04f45;
  }

  .category.coding {
    background-color: #5e4fff31;
  }
`;

export const TitleInput = styled(Input)`
  font-size: 64px;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--textColor);
  &:focus-visible {
    box-shadow: none;
  }

  &::placeholder {
    color: #b3b3b1;
  }
`;
