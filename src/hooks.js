import {atom} from "recoil"

export const inputAtom = atom({
    key : "inputAtom",
    default : {
        email : "",
        username : "",
        name : "",
        password : ""
    }
})


export const profileImageAtom = atom({
    key : "profileImageAtom",
    default : ""
})

export const imagePreviewAtom = atom({
    key: "imagePreview",
    default : null
})

export const optionAtom = atom({
    key : "optionAtom",
    default : false
})