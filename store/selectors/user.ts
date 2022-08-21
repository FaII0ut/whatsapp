import { selector } from "recoil";
import { userState } from "../atoms/user";

export const lengthState = selector({
  key: "lengthState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const user = get(userState);
    const lengthOfName = user.name.length;
    return lengthOfName;
  },
});