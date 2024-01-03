import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  signOut,
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  addDocs,
  getDocs,
  doc,
  setDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import { getDatabase, set, ref as dhanish } from "firebase/database";

// context api
const firebaseContext = createContext(null);

// Madhvesh Firebase API
const firebaseConfig = {
  apiKey: "AIzaSyDbF8gyfgZYANqyWAB72QRireh8ma7GE3A",
  authDomain: "finportal-37d63.firebaseapp.com",
  databaseURL: "https://finportal-37d63-default-rtdb.firebaseio.com",
  projectId: "finportal-37d63",
  storageBucket: "finportal-37d63.appspot.com",
  messagingSenderId: "688216393507",
  appId: "1:688216393507:web:02c884cc0601f328c02e96",
};

// Dhanish Firebase API
// const firebaseConfig = {
//   apiKey: "AIzaSyD6MQy2d-bOJKE0QruR_IQahNue5A0LrDI",
//   authDomain: "finportal-4d01f.firebaseapp.com",
//   databaseURL: "https://finportal-4d01f-default-rtdb.firebaseio.com/",
//   projectId: "finportal-4d01f",
//   storageBucket: "finportal-4d01f.appspot.com",
//   messagingSenderId: "691533092881",
//   appId: "1:691533092881:web:499ab1cd636543223979b0",
// };

// Aaryan Firebase API
// const firebaseConfig = {
//   apiKey: "AIzaSyBT945IYFy9Tkg_cqBdrirwu-oHxPviLBw",
//   authDomain: "finportal-e0cbf.firebaseapp.com",
//   projectId: "finportal-e0cbf",
//   storageBucket: "finportal-e0cbf.appspot.com",
//   messagingSenderId: "896200911693",
//   appId: "1:896200911693:web:fed94ead60d9ca7a74a504",
//   databaseURL: "https://finportal-e0cbf-default-rtdb.firebaseio.com",
// };

//Firebase Instances
export const useFirebase = () => useContext(firebaseContext);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const googleprovider = new GoogleAuthProvider();
// firebase.initializeApp(firebaseConfig);
export const FirebaseApp = (props) => {
  const [isloading, setIsLoading] = useState(true);
  const [isUser, setIsUser] = useState("Loading");
  const [isNewUser, setIsNewUser] = useState(" ");
  const isLoggedIn = isUser ? true : false;
  const [itrfile, setItrfile] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userFound) => {
      if (userFound) {
        const uid = userFound.uid;
        // console.log(uid)
        setIsUser(uid);
      } else {
        setIsUser(false);
      }
    });
    console.log(isUser);
    setIsLoading(false);
  }, []);

  // registeration of user..
  const createUser = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  };
  // login user..
  const signInUser = async (email, password) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  };
  //sign in with google
  const signupWithGoogle = () => {
    signInWithPopup(auth, googleprovider);
  };
  // logout user..
  const signOutUser = async () => {
    return await signOut(auth);
  };
  // realtime Database for user info..
  const storeInfo = async (userCredential, data) => {
    const user = await set(
      dhanish(db, "users/" + userCredential.user.uid),
      data
    );
    return user;
  };
  const paymentInfo = async (orderInfo) => {
    setDoc(doc(firestore, "users", isUser, "payment", "status"), {
      Payment: "success",
      orderInfo,
    }).then((res) => {
      console.log(res);
      return res;
    });
  };
  // updating ITR details in user uid`
  const submitITR = async (userData, coverImage, servicename) => {
    const storeRef = ref(
      storage,
      `Documents/${isUser}/${servicename}/${coverImage.name}-${coverImage.file.name}`
    );
    const resultBucket = await uploadBytes(storeRef, coverImage.file);

    return await setDoc(doc(firestore, "users", isUser), {
      ...userData, 
    });
  };
  // list all details of user
  const listDocs = async () => {
    const res = await listAll(ref(storage, `Documents/${isUser}`));
    return res;
  };

  // fetch one user
  const getData = async () => {
    try {
      const user = await new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (userFound) => {
          if (userFound) {
            unsubscribe();
            resolve(userFound);
          } else {
            reject("User not found");
          }
        });
      });

      const uid = user.uid;
      const userDocRef = doc(firestore, `users/${uid}`);
      const snapshot = await getDoc(userDocRef);

      if (snapshot.exists()) {
        const userData = snapshot.data();
        console.log("Data:", userData);
        return userData;
      } else {
        console.log("User not found in Firestore");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  // fetch ITRfile

  const FetchPdf = async (service) => {
    console.log("fetch pdf function run");
    const format = ".pdf";
    await getDownloadURL(
      ref(
        storage,
        `Documents/${isUser}/${service}/Admin/ITRFILE-${isUser}${format}`
      )
    ).then((url) => {
      setItrfile(url);
      // return url;
      // console.log(url);
    });
    // console.log(itrfile);
    return itrfile;
  };

  return (
    <firebaseContext.Provider
      value={{
        signInUser,
        createUser,
        storeInfo,
        submitITR,
        isUser,
        isLoggedIn,
        signOutUser,
        isloading,
        listDocs,
        storage,
        signupWithGoogle,
        getData,
        FetchPdf,
        paymentInfo,
      }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};
