
const jwt =  require("jsonwebtoken")
const JWT_Secret = "VeerKhatriSignToken"
fetchuser = (requestt , responsee, next ) =>{
    // Getting the user from the jwt token and add to requestt object 
    const token = requestt.header('auth-token');// this header is http header(where we add Content-Type ) which we will add while sending request 
    if(!token){
        responsee.status(401).send({error: "Please authenticate using a valid token"});
    }
    try {
        const Userdata = jwt.verify(token,JWT_Secret) 
        requestt.user = Userdata.user;
        next(); 
        
    } catch (error) {
        responsee.status(401).send({error: "Please authenticate using a valid token"});
        
    }
}
module.exports = fetchuser