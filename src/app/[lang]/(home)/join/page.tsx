import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import { Login, Register } from './Client'
const imgs = ['/b/b2.png', '/b/b3.jpg', '/b/b4.jpg', '/b/b5.jpg']

const LoginRegisterPage = () => {
  return (
    <div className="flex h-screen">
      <div className="hidden lg:block lg:w-1/2 bg-gray-100">
        <Image
          src={imgs[Math.floor(Math.random() * imgs.length)]}
          alt="Auth background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>
              Enter your email to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <Login />
              <Register />
            </Tabs>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-center text-gray-500 mt-4">
              By clicking continue, you agree to our{' '}
              <a href="#" className="underline hover:text-gray-700">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="underline hover:text-gray-700">
                Privacy Policy
              </a>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default LoginRegisterPage
