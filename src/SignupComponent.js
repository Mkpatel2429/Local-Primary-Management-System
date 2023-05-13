import React, {useState} from "react";

function SigupComponent(){

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [userType, setUserType] = useState("");
  // const [secretKey, setSecretKey] = useState("");

  
    // if (userType == "Admin" && secretKey != "AdarshT") {
    //   e.preventDefault();
    //   alert("Invalid Admin");
    // } else {
    //   e.preventDefault();

    //   console.log(fname, lname, email, password);
   const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(fname, lname, email, password);
      fetch("http://localhost:3001/signup",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
          fname,
          lname,
          email,
          password,
          userType,
        }),
      }).then((res) => res.json()).then((data) => {
          // console.log(data);
          if(data.status=="ok"){
            alert("Signup Successfully");
            window.localStorage.setItem("userType",JSON.stringify(userType));
            // console.log(data.data.userType)
            window.location.href='/sign-in'
          }else{ 
            alert("Something Went Wrong!!")
          }
          const AdminEmail=email.endsWith('gov.in')
          const ServiceEmail=email.endsWith('service.in')
          if((data.userType=="Admin"&&data.email==AdminEmail)||(data.userType=="Service Provider" && data.email==ServiceEmail)){
            //window.localStorage.setItem("Admin",true);
          }else{
            console.log("Email id is not matched!!");
          }
        });  
}
  return (
    <div className="auth-wrapper">  
      <div className="auth-inner">
        <form className="mx-auto col-8 col-md-10 col-lg-6 my-5 border border-5 rounded-2" onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          {/* - */}
            {/* Admin */}
          {/* </div>
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                //onChange={(e) => this.setState({fname:e.target.value})}
              />
            </div>
          ) : null} */}
          <div>
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
            <input
              type="radio"
              name="UserType"
              value="Service Provider"
              onChange={(e) => setUserType(e.target.value)}
            />
            Service Provider
          </div>


          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) =>setLname(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p><small>Ex.abc@gmail.com</small></p>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*~]).{6,}"
              onChange={(e) =>setPassword(e.target.value)}
              required
            />
            <p><small>Passwords must contain at least six characters, including uppercase, lowercase letters, special character and numbers.</small></p>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-outline-success">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right my-2">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default SigupComponent;
