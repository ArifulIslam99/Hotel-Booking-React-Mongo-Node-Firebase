const { useContext } = require("react")
const { AuthContext } = require("../Context/AuthProvider")

const useAuth = () =>{
    return useContext(AuthContext);
}

export default useAuth;