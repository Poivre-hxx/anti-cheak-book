import request from "./request";

export const getUserInfo = async (examHistory = false) => {
  return await request.get("/user", { params: { examHistory } });
};

export const updateUserInfo = async userInfo => {
  return await request.post("/user/update", userInfo);
};
