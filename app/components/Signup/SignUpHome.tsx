import Loginbutton from "../Login/loginbutton"
import Logintext from "../Login/logintext"

const SignUpHome= () => {
  return (
    <div className="flex justify-center items-center flex-col w-2/6 h-2/5">
      <div className="h-5/6 flex flex-col justify-between w-full">
        <Logintext title='ID' />
        <Logintext title ='Password1'/>
        <Logintext title ='Password2'/>
        <Logintext title ='email'/>
        <Logintext title ='Phone Number'/>
      </div>
      <div className="h-1/6 w-full flex justify-end">
        <Loginbutton value='Submit'/>
      </div>
    </div>
  )
}
export default SignUpHome