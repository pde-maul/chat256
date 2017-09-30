export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const COOKIES_OBJECT = 'COOKIES_OBJECT';

// Export Actions
export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message,
  };
}
export function removeMessage() {
  return {
    type: REMOVE_MESSAGE,
  };
}

export function cookiesObject(cookies) {
  return {
    type: COOKIES_OBJECT,
    cookies
  };
}
