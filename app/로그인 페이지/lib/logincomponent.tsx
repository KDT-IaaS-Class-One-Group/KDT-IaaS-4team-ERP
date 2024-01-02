import Loginbutton from "../ui/loginbutton";
import Logintext from "../ui/logintext";

const LoginPage = () => {
  return (
    <div>
      <div>
        <Logintext />
        <Logintext />
      </div>
      <div>
        <Loginbutton />
        <Loginbutton />
      </div>
    </div>
  )
}

export default LoginPage;