import request from "./request";

export const getUserInfo = async () => {
  return await request.get("/user");
};

export const updateUserInfo = async userInfo => {
  return await request.post("/user", userInfo);
};
