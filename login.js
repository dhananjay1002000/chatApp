import './login.css';

function Login (props){

    const {setConfig ,  setUser} = props;

return(
    <div classname="container">
    <h1 >Login to access</h1>
    <form>
      <input onChange={(e)=>{
        setUser(e.target.value);
      }} class="input" type="text" placeholder="Username"></input>
      <button type="submit" onClick={()=>{
        setConfig(true);
      }}>Login</button>
    </form>
    </div>
)

}

export default Login;