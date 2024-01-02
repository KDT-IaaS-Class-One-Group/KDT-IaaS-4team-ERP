import Loginbutton from "../ui/loginbutton";
import Logintext from "../ui/logintext";

const LoginHome = () => {
  return (
    <div className="flex justify-center items-center flex-col border-solid border-2 h-2/5 w-2/5">
      <div className="h-1/2 w-full">
        <Logintext title='ID' />
        <Logintext title='PASSWORD' />
      </div>
      <div className="flex justify-around w-full h-1/2">
        <Loginbutton value='sign up' />
        <Loginbutton value='login' />
      </div>
    </div>
  )
}

export default LoginHome;