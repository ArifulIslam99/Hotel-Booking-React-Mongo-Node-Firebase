import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import  { useEffect, useState } from "react";


initializeAuthentication();


const useFirebase = () =>{
    const [user, setUser] = useState({});
     const[error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
  
    const googleSignIn =() =>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
         
    }   

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user)
            {
                setUser(user)
                
            }
            
            setIsLoading(false)
        })
        
    })
      
    
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
           
        }).finally(()=>setIsLoading(false))

       

    }

    return {
        user, 
        isLoading,
        googleSignIn,
        logOut,
        error,
        setUser,
        setIsLoading,
        setError
        
    }

};

export default useFirebase;