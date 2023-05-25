"use client";
import styled from "styled-components";
export default function Home() {
  return (
    <main>
      <_Div>안녕하세요.</_Div>
    </main>
  );
}
const _Div = styled.div`
  background-color: ${({ theme }) => theme.color.BACKGROUND};
  color: ${({ theme }) => theme.color.ERROR};
  font: ${({ theme }) => theme.font.DISPLAY_LARGE};
`;