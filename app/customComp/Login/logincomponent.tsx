import Link from "next/link";
import Loginbutton from "./loginbutton";
import Logintext from "./logintext";


const LoginHome = () => {
  return (
    <div className="flex justify-center items-center flex-col h-2/6 w-2/6">
      <div className="h-2/5 flex flex-col justify-around items-center w-full">
        <Logintext title='ID' />
        <Logintext title='PASSWORD' />
      </div>
      <div className="h-1/5 flex items-center justify-end w-full">
      <Link href='/signup'>
        <Loginbutton value='sign up' />
      </Link>
      <Link href='/'>
        <Loginbutton value='login' />
      </Link>

      </div>
    </div>
  )
}

export default LoginHome;