import $http from "./index";
interface loginData {
    username: string,
    password: string
}

export const login = (data: loginData) => $http({ url: "/login", method: "get", data })