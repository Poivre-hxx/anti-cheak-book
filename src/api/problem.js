import request from "./request";

export const getProblemInfo = async (num = 20) => {
  return await request.get("/problem", { params: { num } });
};

export const updateSubmitInfo = async submitInfo => {
  return await request.post("/problem", submitInfo);
};

export const getPaper = async paper => {
  return await request.post("/problem/paper", { paper });
};
