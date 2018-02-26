// 设置cookie
export function setCookie (key, value, days) {
  let exp = new Date()
  exp.setDate(exp.getDate() + days)
  document.cookie = key + '=' + encodeURI(value) + ((days === null) ? '' : ';expires=' + exp.toUTCString()) + ';path=/'
}

// 获取cookie
export function getCookie (key) {
  let reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) {
    return (decodeURI(arr[2]))
  } else {
    return null
  }
}

// 删除cookie
export function deleteCookie (key) {
  setCookie(key, '', '-1')
}

// 根据cookie 检查登录状态
export function checkSignInCookie () {
  let token = getCookie('jwt_token')
  if (token === '' || token === undefined || token === null) {
    return false
  } else {
    return true
  }
}
