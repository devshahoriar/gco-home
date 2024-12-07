'use client'

import { TabsContent } from '@/components/ui/tabs'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { z } from 'zod'
import { signIn, signUp } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

const loginSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address',
  }),
  password: z
    .string({
      message: 'Password is required',
    })
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean(),
})

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setLoginData({
      ...loginData,
      [id]: type === 'checkbox' ? checked : value,
    })
  }

  const { replace } = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      setErrors({})
      const data = loginSchema.parse(loginData)
      const res: any = await signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      })
      if (res?.error?.message) {
        setErrors({ global: res.error.message })
        return
      }
      //todo redirect based on user type
      // console.log(res?.data?.user?.type)
      replace('/')
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce((acc: any, curr) => {
          acc[curr.path[0]] = curr.message
          return acc
        }, {})
        setErrors(fieldErrors)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <TabsContent value="login">
      <form onSubmit={handleLogin}>
        <div className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              type="email"
              required
              value={loginData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={loginData.password}
                onChange={handleInputChange}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center mt-3">
            <input
              id="rememberMe"
              type="checkbox"
              checked={loginData.rememberMe}
              onChange={handleInputChange}
              className="mr-2"
            />
            <Label htmlFor="rememberMe">Remember me</Label>
          </div>
        </div>
        {errors.global && (
          <p className="text-red-500 text-sm mt-3">{errors.global}</p>
        )}
        <Button className="w-full mt-3" type="submit" disabled={loading}>
          Login
        </Button>
      </form>
    </TabsContent>
  )
}

const registerSchema = z
  .object({
    name: z
      .string({ message: 'Name is required' })
      .min(3, 'Name must be at least 3 characters'),
    email: z.string().email({
      message: 'Invalid email address',
    }),
    password: z
      .string({
        message: 'Password is required',
      })
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z
      .string({
        message: 'Confirm Password is required',
      })
      .min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setRegisterData({
      ...registerData,
      [id]: value,
    })
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      setMessage('')
      setErrors({})
      const data = registerSchema.parse(registerData)
      const reg = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      })
      if (reg?.error?.message) {
        setErrors({ global: reg.error.message })
        return
      }
      setMessage('Account created successfully')
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce((acc: any, curr) => {
          acc[curr.path[0]] = curr.message
          return acc
        }, {})
        setErrors(fieldErrors)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <TabsContent value="register">
      <form onSubmit={handleRegister}>
        <div className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="me example"
              type="text"
              required
              value={registerData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="register-email">Email</Label>
            <Input
              id="email"
              placeholder="me@example.com"
              type="email"
              required
              value={registerData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="register-password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Password"
                value={registerData.password}
                onChange={handleInputChange}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Confirm Password"
                value={registerData.confirmPassword}
                onChange={handleInputChange}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </Button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        {errors.global && (
          <p className="text-red-500 text-sm">{errors.global}</p>
        )}
        {message && <p className="text-green-500 text-sm">{message}</p>}
        <Button disabled={loading} className="w-full mt-6" type="submit">
          Register
        </Button>
      </form>
    </TabsContent>
  )
}
