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
import { useState } from "react"


const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "", password: ""
  })
  const [signUpInput, setSignUpInput] = useState({
    name: "", email: "", password: ""
  })
  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignUpInput({ ...signUpInput, [name]: value });
    } else if(type === "login") {
      setLoginInput({ ...loginInput, [name]: value })
    }
  }
  const handleRegistration = (type)=>{
    const inputData = type === "signup"? signUpInput : loginInput
   console.log(inputData);
   
    
    
  }
  return (
    <div className="flex items-center justify-center w-full my-10">
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
                <Input type="text" onChange={(e)=>changeInputHandler(e, "signup")} placeholder="Eg. Naman" required="true" name="name" value={signUpInput.name} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input type="email" onChange={(e)=>changeInputHandler(e, "signup")}  placeholder="naman@gmail.com" required="true" name="email" value={signUpInput.email} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input type="password"  onChange={(e)=>changeInputHandler(e, "signup")} placeholder="Enter password" required="true" name="password" value={signUpInput.password} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick= {()=>handleRegistration("signup")}>Signup</Button>
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
                <Input type="email" onChange={(e)=>changeInputHandler(e, "login")} placeholder="naman@gmail.com" required="true" name="email" value={loginInput.email}  />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">password</Label>
                <Input type="password" onChange={(e)=>changeInputHandler(e, "login")} placeholder="Enter your password" required="true" name="password" value={loginInput.password}  />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick= {()=>handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default Login