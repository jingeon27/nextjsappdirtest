import { ChangeEvent, useState } from "react";
import { ModalLayout } from "..";
import { styled } from "styled-components";
import { InputQuestion } from "@/components/atom/input";
import { Select } from "@/components/atom/select";
import { SelectTable } from "@/components/atom/select/select-table";
import { OpenAiMode, OpenAiModeKeyType } from "@/util/chat-ai-mode";
import { Button } from "@/components/atom/button";
import { useMainAction } from "@/hooks/context/main";
import { useRootAction } from "@/hooks/context/useRootActionContext";
export const SettingModal = () => {
  const [state, setState] = useState<{
    name: string;
    content: OpenAiModeKeyType;
  }>({
    name: "",
    content: "ASSISTANT",
  });
  const { setChatBotAi } = useMainAction();
  const { setToast } = useRootAction();
  return (
    <>
      <ModalLayout>
        <_Table>
          <div>
            <div>AI 챗봇 설정</div>
            <div>챗봇의 초기 이름과 성격을 설정할 수 있습니다.</div>
          </div>
          <_name>
            <div>이름</div>
            <InputQuestion
              value={state.name}
              placeholder={"이름을 입력해주세요."}
              onInput={(e: ChangeEvent<HTMLInputElement>) => {
                setState((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </_name>
          <_name>
            <div>성격</div>
            <Select now={OpenAiMode[state.content].role}>
              <SelectTable
                onClick={(item: OpenAiModeKeyType) => {
                  setState((prev) => ({ ...prev, content: item }));
                }}
                list={OpenAiMode}
              />
            </Select>
          </_name>
          <_ButtonLayout>
            <Button
              onClick={() => {
                if (!state.name) {
                  setToast("AI 챗봇의 이름을 입력하지 않으셨습니다.");
                } else {
                  setChatBotAi(
                    {
                      role: "system",
                      content: `너의 이름은 ${
                        state.name
                      }이야. 그리고 너의 역할은 ${
                        OpenAiMode[state.content].content
                      }`,
                    },
                    state.name
                  );
                }
              }}
              text={"확인"}
            />
            <div
              onClick={() => {
                setChatBotAi(
                  {
                    role: "system",
                    content: `너의 이름은 김아무개야. 그리고 너의 역할은 ${
                      OpenAiMode[state.content].content
                    }`,
                  },
                  "김아무개"
                );
              }}
            >
              기본 설정으로 시작하기.
            </div>
          </_ButtonLayout>
        </_Table>
      </ModalLayout>
    </>
  );
};
const _Table = styled.div`
  width: 500px;

  padding: 30px 0 50px 0;
  background-color: ${({ theme }) => theme.color.SURFACE_VARIENT};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  > div {
    &:first-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      > div {
        &:first-child {
          ${({ theme }) => theme.font.TITLE_LAGRE};
          color: ${({ theme }) => theme.color.PRIMARY};
        }
        &:last-child {
          ${({ theme }) => theme.font.BODY_MEDIUM};
          color: ${({ theme }) => theme.color.ON_SURFACE};
        }
      }
    }
  }
`;
const _name = styled.div`
  width: 250px;
  height: 50px;

  display: flex;
  gap: 20px;

  > div {
    line-height: 50px;
    color: ${({ theme }) => theme.color.ON_SURFACE};
  }
`;
const _ButtonLayout = styled.div`
  width: 250px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    cursor: pointer;
    ${({ theme }) => theme.font.LABEL_MEDIUM};
    text-decoration: underline;

    color: ${({ theme }) => theme.color.ON_SURFACE_VARIENT};
    &:hover {
      color: ${({ theme }) => theme.color.ON_SURFACE};
    }
  }
`;