import { LoginForm } from "../components/LoginForm"

export const LoginSignup = () => {
  return (
    <div className="flex h-[100vh]">
        <div className="flex flex-col w-[50%] justify-center p-[8rem] space-y-4 ">
            <div className="flex flex-col">
                <span className="text-[3rem] font-[700] leading-[3rem]">Manipal University Jaipur</span>
                <span className="text-[3rem] font-[700] leading-[3rem] text-orange">Travel Buddy</span>
            </div>
            <span className="text-grey text-lg">This platform is an exclusive resource for the people of MUJ. It provides an easy and accessible way to pool vehicles and get co-passengers for the go.</span>
            <LoginForm/>
        </div>
    </div>
  )
}
