/**
 * @file Storage utils
 * @module utils/storage
 */

const APP_TOKEN_KEY: any = import.meta.env.VITE_APP_TOKEN_KEY || 'cyrpto-token'

export function getToken(): any {
  return localStorage.get(APP_TOKEN_KEY)
}

export function setToken(token: string): any {
  return localStorage.set(APP_TOKEN_KEY, token)
}

export function removeToken(): void {
  return localStorage.remove(APP_TOKEN_KEY)
}
