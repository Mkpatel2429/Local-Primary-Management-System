import { Component,useState} from "react";

function ResetProfile (){
  const [email, setEmail] = useState("");

     const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("http://localhost:3001/forgotPassword",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            email,
          })
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            this.setState({userData:data.data})
          });
        }


return(
    <div>
        <form className="mx-auto col-10 col-md-8 col-lg-6 my-5 border border-5 rounded-2" onSubmit={handleSubmit}>
          <h3>Forgot Password</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a>
          </p>
        </form>
    </div>
  
        )
    }
export default ResetProfile;