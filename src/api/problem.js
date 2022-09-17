import request from "./request";

export const getProblemInfo = async (type, num = 20) => {
  if (type === "visitor")
    return await request.get("/visitor/problem", { params: { num } });
  if (type === "user")
    return await request.get("/problem", { params: { num } });
};

export const submitAnswers = async (type, answers) => {
  if (type === "visitor")
    return await request.post("/visitor/problem", {
      answers,
    });
  if (type === "user")
    return await request.post("/problem", {
      answers,
    });
};

export const getPaper = async paper => {
  return await request.post("/visitor/problem/paper", { paper });
};
