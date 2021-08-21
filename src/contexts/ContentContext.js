import React, { createContext, useState } from "react";
import app from "../firebase";

export const ContentContext = createContext();

export const ContentProvider = (props) => {
//   const [content, setContent] = useState("")

  const getContent = (selectedInterest) => {
    const db = app.firestore();
    let docRef = db.collection('fields').doc(selectedInterest);
    let returnData = docRef.get().then( async (doc) => {
            if(doc.exists){
                console.log(doc.data());
                let data = doc.data();
                // await localStorage.setItem(selectedInterest, JSON.stringify(data));
                // history.push(`/dashboard/${selectedInterest}`);
                return data;
            }
            else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                return null;
              }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
          return null;
        });
        return returnData
  }

  const value = {
      getContent
  }

  return (
    <ContentContext.Provider value={value}>
      {props.children}
    </ContentContext.Provider>
  );
};