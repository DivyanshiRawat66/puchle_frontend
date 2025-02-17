import Loginform from './component/loginform';
import React, { useState } from 'react';
import FileUploadPage from './component/uploadform';


function App() {

  // const [selectedFile, setSelectedFile] = useState();
	// const [isFilePicked, setIsFilePicked] = useState(false);

  const adminUser = {
    email: "admin@puchle.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  
  const Login = details => {
    console.log(details);
  

  if (details.email == adminUser.email && details.password == adminUser.password){
  console.log("Logged in");
  setUser({
    name: details.name,
    email: details.email
  });
} else {
  console.log("Details do not match!");
  setError("Details do not match!")
}
  }


  const Logout = () => {
  setUser({ name: "", email: ""});


  }
  return ( 
    <div className="App">
     {(user.email != "") ? (
       <div className="welcome">
         <h2>Welcome, <span>{user.name}</span></h2>
         <button onClick={Logout}>Logout</button>
         </div>
     ) : (
       <Loginform Login={Login} error={error} />
     )}
     </div>
  );
}
 

export default App;
