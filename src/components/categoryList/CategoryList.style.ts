import { Container } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Wrapper = styled(Container)`
  .categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }

  .category {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;
    width: 15%;
    height: 80px;
    justify-content: center;
    border-radius: 10px;
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

  .image {
    border-radius: 50%;
    height: 32px !important;
    width: 32px !important;
  }

  @media screen and (max-width: 1280px) {
    .category {
      width: 20%;
    }
  }
  @media screen and (max-width: 1024px) {
    .category {
      width: 25%;
    }
  }
  @media screen and (max-width: 768px) {
    .category {
      width: 45%;
    }
  }
  @media screen and (max-width: 640px) {
    .category {
      width: 100%;
    }
  }
`;
