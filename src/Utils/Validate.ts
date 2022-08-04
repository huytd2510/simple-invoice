export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const validatePassword = (password: string) => {
  const regex = /.{6,}/ // at least 6 letters
  return regex.test(String(password).toLowerCase())
}

export const validateUsername = (username: string) => {
  const regex = /.{4,}/
  return regex.test(String(username).toLowerCase())
}

export const validatePhoneNumber = (phone: string) => {
  const regex = /(84|0)+([0-9]{9})\b/
  return regex.test(String(phone).toLowerCase())
}

export const validateRequired = (text: string) => {
  const regex = /.{1,}/
  return regex.test(String(text).toLowerCase())
}

export const reverseString = (str: string) => {
  let splitString = str.split('/')
  let reverseArray = splitString.reverse()
  let joinArray = reverseArray.join('')
  return joinArray
}

export const validateDecimalNumber = (text: string) => {
  const regex = /^[0-9]+([\,\.\,][0-9]+)?$/
  return regex.test(String(text).toLowerCase())
}
