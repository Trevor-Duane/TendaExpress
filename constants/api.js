export const Base_Url = "http://tendacafe.com/api/public/api"
// export const Base_Url = "http://10.0.2.2:8000/api"
// export const Base_Url = "http://127.0.0.1:8000/api"
export const getApiUrl = (endpoint) => Base_Url + endpoint

export const LOGINN = getApiUrl('/login')
export const SIGNIN = getApiUrl('/register')
