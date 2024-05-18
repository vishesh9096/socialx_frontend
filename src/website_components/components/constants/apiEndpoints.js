export const ApiUrl =   "https://df2c-103-39-29-144.ngrok-free.app"
//   process.env.NEXT_PUBLIC_APP_ENV == "production"
    // ? 
  
    // : // ? "https://study-nex-backend.vercel.app/api"
    //   "http://localhost:4000/api";

//GET
export const user = "/user";
export const getOrg = "/get-org";
export const getChannelList = "/fetch-all-channels";
export const getChannel = "/fetch-channel";
export const renameChannel = "/rename-channel";
export const fetchMessages = "/fetch-message";
export const leaveOrg = "/leave-org";
export const leaveChannel = "/leave-channel/";
export const getUserProgress = "/get-user-progress";

//POST
export const signupApi = "/api/v1/user/signup";
export const loginApi = "/api/v1/user/login";
export const verifyOtp = "/api/v1/user/verifyotp";
export const registerApi = "/register";
export const forgotPasswordApi = "/forgot-password";

// export const resetPasswordApi = "/reset-password";
// export const createOrgApi = "/create-org";
// export const joinOrgApi = "/join-org";
// export const createChannelApi = "/create-channel";
// export const joinChannelApi = "/join-channel";
// export const channelListAPi = "/channel-list";
// export const getChannelMembers = "/get-members";
// export const accessChat = "/access-chat";
// export const sendMessage = "/send-message";
// export const deleteMessage = "/delete-message";
// export const getAdminQuizzes = "/get-quizzes";
// export const getQuizDetail = "/get-quiz";
// export const createNewQuizApi = "/create-quiz";
// export const getUserQuizzes = "/get-user-quizzes";
// export const submitQuiz = "/submit-quiz";
// export const stopQuizApi = "/stop-quiz";