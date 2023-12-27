import LoginPageButton from "./button";
import LoginPageForm from "./texarea";

export default function Login() {
  return (
    <>
      <div>
        <LoginPageForm />
        <LoginPageForm />
      </div>
      <div>
        <LoginPageButton />
        <LoginPageButton />
      </div>
    </>
  )
}