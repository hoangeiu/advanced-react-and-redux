import { saveComment } from "../";
import { SAVE_COMMENT } from "../types";

describe("saveComment", () => {
  it("has the correct type", () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = saveComment("NEW COMMENT");

    expect(action.payload).toEqual("NEW COMMENT");
  });
});
