function Login({post,setlogin}) {
  return (
    <div id="login" className="">
      <form onSubmit={async (event)=>{
        event.preventDefault()
        const data = Object.fromEntries(new FormData( event.target) )
        await post("http://localhost:4000/login",data)
      }} >
        <h2>Login</h2>
        <div className="input-field">
          <input name="EMAIL" type="email" required />
          <label>Enter your email</label>
        </div>
        <div className="input-field">
          <input name="Password" type="password" required />
          <label>Enter your password</label>
        </div>
        <div className="forget">
          <label for="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>
            Don't have an account? <lable onClick={()=>setlogin(false)} >Register</lable>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Login;
