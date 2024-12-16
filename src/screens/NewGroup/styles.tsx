import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  name: "users",
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;