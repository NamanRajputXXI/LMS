import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useLoginUserMutation, useRegisterUserMutation } from "@/features/api/authApi"
import { Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"


const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "", password: ""
  })
  const [signUpInput, setSignUpInput] = useState({
    name: "", email: "", password: ""
  })
  const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation()
  const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess }] = useLoginUserMutation()

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignUpInput({ ...signUpInput, [name]: value });
    } else if (type === "login") {
      setLoginInput({ ...loginInput, [name]: value })
    }
  }
  useEffect(()=>{
if(registerIsSuccess && registerData){
  toast.success( registerData.message || "Signup Successfull")
}
if(registerError){
  toast.error(registerData.data.message || "Signup Failed")
}
if(loginIsSuccess && loginData){
  toast.success( loginData.message || "Login Successfull")
}
if(loginError){
  toast.error(loginData.data.message || "Login Failed")
}

  }, [loginIsLoading, registerIsLoading, loginData, registerData, loginError, registerError])
  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signUpInput : loginInput
    console.log(inputData);

    const action = type ==="signup"? registerUser:loginUser;
    await action(inputData)
  }
  return (
    <div className="flex mt-20 items-center justify-center w-full my-10">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input type="text" onChange={(e) => changeInputHandler(e, "signup")} placeholder="Eg. Naman" required="true" name="name" value={signUpInput.name} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input type="email" onChange={(e) => changeInputHandler(e, "signup")} placeholder="naman@gmail.com" required="true" name="email" value={signUpInput.email} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input type="password" onChange={(e) => changeInputHandler(e, "signup")} placeholder="Enter password" required="true" name="password" value={signUpInput.password} />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={registerIsLoading} onClick={() => handleRegistration("signup")}>
              {
                registerIsLoading? (
                  <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                  </>
                ) : "Signup"
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your passord here.After signup, you'll be logged in
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input type="email" onChange={(e) => changeInputHandler(e, "login")} placeholder="naman@gmail.com" required="true" name="email" value={loginInput.email} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">password</Label>
                <Input type="password" onChange={(e) => changeInputHandler(e, "login")} placeholder="Enter your password" required="true" name="password" value={loginInput.password} />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled={loginIsLoading} onClick={() => handleRegistration("login")}>
                {
                loginIsLoading? (
                  <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                  </>
                ) : "Login"
                }
                </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default Login