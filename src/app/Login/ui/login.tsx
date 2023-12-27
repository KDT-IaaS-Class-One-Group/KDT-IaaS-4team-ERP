import LoginPageButton from "./button";
import LoginPageForm from "./texarea";

export default function Login() {
  return (
    <>
      <div>
        <LoginPageForm logintitle='ID'/>
        <LoginPageForm logintitle='PASSWORD'/>
      </div>
      <div>
        <LoginPageButton buttonname='sign up'/>
        <LoginPageButton buttonname='login'/>
      </div>
    </>
  )
}