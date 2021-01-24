import React, { createContext } from 'react';

import * as firebase from 'firebase';
import "firebase/auth"
import "firebase/firestore/bundle"
import config from "../config/firebase"

const FirebaseContext = createContext();

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.firestore();



const Firebase = {
    getCurrentUser: () => {
        return firebase.auth().currentUser.uid
    },

    createUser: async (user) => {

        try {
            let uid = null;
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((usss) => {

                    uid = usss.user.uid;

                    var us = db.collection("users");

                    firebase.firestore().collection("users")
                    .doc(uid.toString())
                    .set({
                        username: "user.username",
                        email: "user.email",
                    })
                    .then(() => {
                        console.log("Document successfully written!");
                    })

                    // us.doc().set({
                    //     username: "user.username",
                    //     email: "user.email",
                    // })
                    // .then(function() {
                    //     console.log("Document successfully written!");
                    // })
                    // .catch(function(error) {
                    //     console.error("Error writing document: ", error);
                    // });

                })

            delete user.password;
            return { ...user, uid }
            // const uid = await Firebase.getCurrentUser();

            // await db.collection("users").doc(uid).set({
            //     username: user.username,
            //     email: user.email,
            // })


        } catch (error) {
            console.log("Error @createUser: ", error.message)
        }
    }


}

const FirebaseProvider = (props) => {
    return <FirebaseContext.Provider value={Firebase}>{props.children}</FirebaseContext.Provider>
}

export { FirebaseContext, FirebaseProvider }