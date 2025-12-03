import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { router } from '@inertiajs/react'
import { FormEvent, useState } from 'react'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    router.post('/login', formData, {
      onError: (errors) => {
        console.log('Errores:', errors)
      },
      onSuccess: () => {
        console.log('Login exitoso')
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full px-4'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full max-w-md px-3 shadow-xl border border-gray-100 p-6 rounded-lg'>
            <h2 className='font-bold text-xl mb-4 text-center'>Iniciar sesión</h2>
            <Input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder='Correo electrónico' 
              required
            />
            <Input 
              type="password" 
              name="password" 
              id="password" 
              value={formData.password}
              onChange={handleChange}
              placeholder='Contraseña' 
              required
            />
            <Button type="submit" variant="default">Iniciar sesión</Button>
        </form>
    </div>
  )
}

export default LoginPage