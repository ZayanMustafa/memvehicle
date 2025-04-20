'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthForm({ type }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your authentication logic here
    if (type === 'signup' && password !== confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    console.log({ email, password, name })
    // Redirect after auth
    router.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type === 'signup' && (
        <div>
          <label className="block text-sm font-medium mb-2">FULL NAME</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none" 
            required 
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">EMAIL</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none" 
          required 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">PASSWORD</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none" 
          required 
        />
      </div>

      {type === 'signup' && (
        <div>
          <label className="block text-sm font-medium mb-2">CONFIRM PASSWORD</label>
          <input 
            type="password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none" 
            required 
          />
        </div>
      )}

      <button 
        type="submit" 
        className="w-full flex items-center justify-center py-3 px-4 border border-white hover:bg-white hover:text-black transition-colors font-bold"
      >
        {type === 'login' ? 'LOGIN' : 'SIGN UP'}
      </button>
    </form>
  )
}
