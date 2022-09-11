import request from "./request";

export const login = async (username, password) => {
  return request.post("/auth/login", { username, password });
};

export const register = async (username, password) => {
  return request.post("/auth/register", { username, phoneNumber, password });
};
