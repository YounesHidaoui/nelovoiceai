export const envConfig = {
  vapi: {
    apiUrl: process.env.NEXT_PUBLIC_VAPI_API_URL ?? "https://api.vapi.ai",
    token: process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN ?? "104efa5b-330f-4817-85d2-30ee13a6b3a7",
  },
};
