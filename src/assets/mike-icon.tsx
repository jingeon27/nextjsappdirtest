import { useRootAction } from "@/hooks/context/useRootActionContext";
import { styled } from "styled-components";
export const MikeIcon = () => {
  const { setMikeState } = useRootAction();
  return (
    <>
      <_Svg
        width="14"
        height="20"
        viewBox="0 0 14 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={setMikeState}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 9.5C10 11.16 8.66 12.5 7 12.5C5.34 12.5 4 11.16 4 9.5V3.5C4 1.84 5.34 0.5 7 0.5C8.66 0.5 10 1.84 10 3.5V9.5ZM7 14.5C9.76 14.5 12 12.26 12 9.5H14C14 13.03 11.39 15.93 8 16.42V19.5H6V16.42C2.61 15.93 0 13.03 0 9.5H2C2 12.26 4.24 14.5 7 14.5Z"
        />
      </_Svg>
    </>
  );
};
const _Svg = styled.svg`
  cursor: pointer;

  > path {
    fill: ${({ theme }) => theme.color.ON_SURFACE};
  }

  :hover {
    filter: brightness(0.1);
  }
`;
