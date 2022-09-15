import request from "./request";

export const getUserInfo = async (examHistory = false) => {
  return await request.get("/user", { params: { examHistory } });
};

export const updateUserInfo = async userInfo => {
  return await request.post("/user/update", userInfo);
};
<<<<<<< HEAD

export const getProblemInfo = async () => {
  return await request.get("/problem?num=20");
}
export const updateSubmitInfo = async submitInfo => {
  return await request.post("/problem", submitInfo);
}
=======
>>>>>>> fc207d1 (feat: mistakes)
