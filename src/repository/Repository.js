// // chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
// import axios from "axios";
// const baseDomain = "https://sample-utgao36ebq-uc.a.run.app/";
// const baseURL = `${baseDomain}`;

// let axiosObj;
// axiosObj = axios.create({
//     baseURL,
// });
// axiosObj.interceptors.request.use(
//     (config) => {
//         // Dynamically set the token for each request
//         const ls = JSON.parse(localStorage.getItem("authUser"));
//         const token = ls?.token || "";
//         config.headers.token = token;
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );
// export default axiosObj;
