import axios from "axios";
import { ElMessageBox } from 'element-plus'

//创建HTTP请求实例
const $http = axios.create({
    baseURL: "https://www.fastmock.site/mock/94acde1c8b506ec69e1bcc77d95b1a5c/api",
    timeout: 2000,
    headers: {
        "Content-type": "application/json;charset=utf-8"
    }
});

//请求拦截
$http.interceptors.request.use(config => {
    config.headers = config.headers || {}
    if (localStorage.getItem("token")) {
        config.headers.token = localStorage.getItem("token") || ""
    }
    return config;
});

//响应拦截
$http.interceptors.response.use(result => {
    const code: number = result.data.code
    const desc: string = result.data.desc
    if (code !== 0) {
        ElMessageBox.alert(desc, '错误提示', {
            confirmButtonText: '确定',
        })
        return Promise.reject(result.data)
    }
    return result.data
}, err => {
    console.log(err)
    return Promise.reject(err)
})

export default $http