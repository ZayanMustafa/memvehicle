import AuthLayout from '@/component/AuthLayout'
import { FiUserPlus } from 'react-icons/fi'

export default function SignupPage() {
  return (
    <AuthLayout
      title="CREATE ACCOUNT" 
      subtitle="Get started with vehicle inspections"
    >
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">FULL NAME</label>
          <input 
            type="text" 
            className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none" 
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">EMAIL</label>
          <input 
            type="email" 
            className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none" 
            required 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">PASSWORD</label>
          <input 
            type="password" 
            className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none" 
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">CONFIRM PASSWORD</label>
          <input 
            type="password" 
            className="w-full bg-black border border-white/20 p-3 focus:border-white focus:outline-none" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full flex items-center justify-center py-3 px-4 border border-white hover:bg-white hover:text-black transition-colors font-bold"
        >
          <FiUserPlus className="mr-2" /> SIGN UP
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          ALREADY HAVE AN ACCOUNT?{' '}
          <a href="/auth/login" className="underline hover:text-white">
            LOGIN
          </a>
        </p>
      </div>
    </AuthLayout>
  )
}