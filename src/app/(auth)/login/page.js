import AuthLayout from '@/component/Authlayout'
import { FiLogIn } from 'react-icons/fi'

export default function LoginPage() {
  return (
    <AuthLayout
      title="LOGIN" 
      subtitle="Access your inspection dashboard"
    >
      <form className="space-y-6">
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

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 border-white/20" />
            <span className="text-sm">REMEMBER ME</span>
          </label>
          
          <a href="#" className="text-sm underline">FORGOT PASSWORD?</a>
        </div>

        <button 
          type="submit" 
          className="w-full flex items-center justify-center py-3 px-4 border border-white hover:bg-white hover:text-black transition-colors font-bold"
        >
          <FiLogIn className="mr-2" /> LOGIN
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400">
          DON'T HAVE AN ACCOUNT?{' '}
          <a href="/auth/signup" className="underline hover:text-white">
            SIGN UP
          </a>
        </p>
      </div>
    </AuthLayout>
  )
}