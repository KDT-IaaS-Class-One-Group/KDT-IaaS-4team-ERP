import Loginbutton from "../ui/loginbutton";
import Logintext from "../ui/logintext";

const LoginPage = () => {
  return (
    <div>
      <div>
        <Logintext title='ID'/>
        <Logintext title='PASSWORD'/>
      </div>
      <div>
        <Loginbutton value ='sign up'/>
        <Loginbutton value='login'/>
      </div>
    </div>
  )
}

export default LoginPage;