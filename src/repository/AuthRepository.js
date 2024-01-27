// import Repository from "./Repository";
// const SIGNUP = "/User/Create-User";
// const LOGIN = "/User/Login";
// const GETPASSWORDOTP = "/User/Get-Password-Reset-OTP";
// const VERIFYOTP = "/User/Verify-Password-Reset-OTP";
// const RESETPASSWORD = "/User/Reset-Password";
// const VERIFYUSER = "/User/Verify-User";
// export default {
//     signup(userDetail) {
//         return Repository.post(`${SIGNUP}`, userDetail);
//     },
//     login(userDetail) {
//         return Repository.post(`${LOGIN}`, userDetail);
//     },
//     getPasswordOtp(email) {
//         return Repository.post(`${GETPASSWORDOTP}?Email=${email}`);
//     },
//     verifyOtp(detail) {
//         const params = new URLSearchParams({
//             Email: detail.email,
//             OTP: detail.otp,
//         });
//         const url = `${VERIFYOTP}?${params.toString()}`;
//         return Repository.post(url);
//     },
//     verifyUser(detail) {
//         const params = new URLSearchParams({
//             Email: detail.Email,
//             OTP: detail.OTP,
//         });
//         const url = `${VERIFYUSER}?${params.toString()}`;
//         return Repository.post(url);
//     },
//     resetpassword(detail) {
//         return Repository.post(
//             `${RESETPASSWORD}?Email=${detail.Email}&NewPassword=${detail.newPassword}`
//         );
//     },
// };
