
import LoginPageButton from "./button";
import LoginPageForm from "./texarea";

export default function Login() {
  return (
    <div class='flex items-center justify-center flex-col'>
      <div class='flex flex-col'>
        <LoginPageForm logintitle='ID'/>
        <LoginPageForm logintitle='PASSWORD'/>
      </div>
      <div>
        <LoginPageButton buttonname='sign up'/>
        <LoginPageButton buttonname='login'/>
      </div>
    </div>
  )
}