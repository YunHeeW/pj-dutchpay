import { render, screen } from "@testing-library/react";
import { CreateGroup } from "./CreateGroup";
import userEvent from "@testing-library/user-event";
const renderComponent = () => {
  render(<CreateGroup />);

  const input = screen.getByPlaceholderText("치킨먹기");
  const saveButton = screen.getByText("저장");
  const errorMessage = screen.queryByText("이름 입력하세요");

  return {
    input,
    saveButton,
    errorMessage,
  };
};
describe("그룹 생성 페이지", () => {
  test("그룹 이름 입력 컴포넌트 랜더링 확인", () => {
    const { input, saveButton } = renderComponent();
    expect(input).not.toBeNull();
    expect(saveButton).not.toBeNull();
  });

  test("그룹 이름 없이 저장 버튼 클릭 시", async () => {
    const { errorMessage, saveButton } = renderComponent();
    await userEvent.click(saveButton);

    expect(errorMessage).not.toBeNull();
  });

  test("그룹 이름 입력 후 저장 버튼 클릭 시(저장 성공)", async () => {
    const { input, saveButton, errorMessage } = renderComponent();
    await userEvent.type(input, "예시 이름");
    await userEvent.click(saveButton);

    expect(errorMessage).toBeNull();
  });
});
