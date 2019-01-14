export function getUser(obj){
  return {type:'GET', obj}
}

export function listFollowers(obj){
  return {type:'LIST', obj}
}

export function updateShoppingList(user){
  return{type:'UPDATE_LIST', user}
}

export function notificationAlert(message){
  return {type:'NOTIFICATION', message}
}