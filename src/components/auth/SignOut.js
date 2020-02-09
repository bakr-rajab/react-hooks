import React from 'react';
import firebase from "../../firebase/firebase";
import { Redirect } from 'react-router-dom';
export default function SignOut() {
    const logout=()=>firebase.auth().signOut();
    return logout()?<Redirect to='/' />:console.log(77);;
}
