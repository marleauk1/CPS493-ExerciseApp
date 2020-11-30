import { myGet, myPost, myPut, myDel } from "./my-fetch"

export function getList() {
    return myGet('users')
}

export function addExercise(exerciseData) {
    return myPost('ExerciseTypes', exerciseData) // register API only works from postman, so we will use add
}

export function editExercise(exerciseId, exerciseData) {
    return myPut('ExerciseTypes' + exerciseId, exerciseData)
}

export function deleteExercise(exerciseId) {
    return myDel('ExerciseTypes/' + exerciseId)
}