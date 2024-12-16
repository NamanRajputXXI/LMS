import { School } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
    const user = true
    return (
        <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
            {/* Desktop */}
            <div className="md:flex h-full justify-between items-center gap-10 max-w-7xl mx-auto hidden  ">
                <div className="flex   items-center gap-2">
                    <School size={"30"} />
                    <h1 className='hidden md:block font-extrabold text-2xl'>CultLearn</h1>
                </div>
                {/* user icon and dark mode icon */}
                <div>
                    {
                        user? (
                            <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                            <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                              <DropdownMenuLabel>My Account</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuGroup>
                                <DropdownMenuItem >
                                  My Learning
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  Edit Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Logout
                                </DropdownMenuItem>
                              </DropdownMenuGroup>
                              <DropdownMenuSeparator />
                              <DropdownMenuSeparator />
                             
                              <DropdownMenuItem>
                                Dashboard
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : <div className='flex items-center gap-2'>
                            <Button>Login</Button>
                            <Button>Signup</Button>
                        </div>

                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
