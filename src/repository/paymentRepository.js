// import Repository from "./Repository";
// const CREATE_MEMBERSHIP = "/Membership/Create-Membership";
// const GET_SUBSCRUBTION_DETAILS = "/Membership/Get-Subscription-Details?UserId=";
// const RESUBSCRIBE = "/Membership/Recharge-Subscription?Email=";
// const CHECK_MEMBERSHIP = "/Membership/Check-Membership-Status?UserId=";
// const CANCEL_SUBSCRIPTION = "/Membership/Cancel-Subscription?Email=";
// const CONFIRM_CANCEL_SUBSCRIPTION = "/Membership/Confirm-Cancel-Subscription?OTP=";


// export default {
//     addPayment(payload) {
//         return Repository.post(`${CREATE_MEMBERSHIP}`, payload);
//     },

//     reSubscribrRep(email) {
//         return Repository.post(`${RESUBSCRIBE}${email}`);
//     },
//     checkMemberShipRep(id) {
//         return Repository.get(`${CHECK_MEMBERSHIP}${id}`);
//     },
//     getSubscriptionDetailRep(id) {
//         return Repository.get(`${GET_SUBSCRUBTION_DETAILS}${id}`);
//     },
//     cancelSubcriptionRep(email) {
//         return Repository.post(`${CANCEL_SUBSCRIPTION}${email}`);
//     },
//     confirmCancelSubscriptionRep(OTP) {
//         return Repository.post(`${CONFIRM_CANCEL_SUBSCRIPTION}${OTP}`);
//     },
// };
