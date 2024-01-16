import * as S from "./Loading.styles";

import { Spinner } from "@chakra-ui/react";

export function Loading() {
  return (
    <S.Wrapper
      position={"fixed"}
      top={0}
      bottom={0}
      left={0}
      right={0}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Spinner color="red.500" size="xl" />
    </S.Wrapper>
  );
}
