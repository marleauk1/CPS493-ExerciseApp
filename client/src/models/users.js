import { myGet, myPost, myPut, myDel } from "./my-fetch"

export function getList() {
    return myGet('users')
}

export function registerUser(userData) {
    return myPost('users', userData) // register API only works from postman, so we will use add
}

export function editUser(userId, userData) {
    return myPut('users/' + userId, userData)
}

export function deleteUser(userId) {
    return myDel('users/' + userId)
}