function SignUp({post,setlogin}) {

  return (
    <div id="sign_up" className="">
      <form onSubmit={async(event)=>{
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.target))  
        await post("http://localhost:4000/register",data)
      }}>
        <h2>SignUp</h2>
        
        <div className="input-field">
          <input name="FIRST_NAME" type="text" required />
          <label>Enter First Name</label>
        </div>

        <div className="input-field">
          <input name="LAST_NAME" type="text" required />
          <label>Enter Last Name</label>
        </div>
        <div className="input-field">
          <input name="EMAIL" type="email" required />
          <label>Enter your email</label>
        </div>
        <div className="input-field">
          <input name="Password" type="password" required />
          <label>Enter your password</label>
        </div>
        <div className="input-field">
          <input  name="Confirm_pass" type="password" required />
          <label>Renter your password</label>
        </div>

        <button type="submit">Log In</button>
        <div className="register">
          <p>
            Don't have an account?  <label onClick={()=>setlogin(true)} >Register</label>
          </p>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
