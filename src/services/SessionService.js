class SessionService {
  static get(key) {
    if (!window.sessionStorage) return null
    return window.sessionStorage.getItem(key)
  }

  static set(key, value) {
    const oldValue = SessionService.get(key)
    window.sessionStorage.setItem(key, value)
    return oldValue
  }

  static clear() {
    window.sessionStorage.clear()
  }

  static initSession(user) {
    this.set('_id', user.id)
    this.set('email', user.email)
    this.set('username', user.username)
    this.set('nickname', user.nickname)
    this.set('photo', user.photo)
    this.set('token', user.token)
  }
}

export default SessionService
