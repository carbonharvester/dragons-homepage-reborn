
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AuthFormValues {
  email: string;
  password: string;
  tripCode?: string;
}

interface AuthScreenProps {
  onAuthenticate: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthenticate }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormValues>();
  
  const onSubmit = async (data: AuthFormValues) => {
    try {
      // In a real app, we'd make an API call to authenticate
      console.log('Authentication data:', data);
      
      // Store user in localStorage for demo purposes
      localStorage.setItem('user', JSON.stringify({ 
        email: data.email,
        name: data.email.split('@')[0],
        tripId: data.tripCode || 'DEMO-TRIP'
      }));
      
      // Show success message
      toast({
        title: isLogin ? "Welcome back!" : "Registration successful",
        description: "You've been logged in successfully."
      });
      
      // Trigger authentication
      onAuthenticate();
    } catch (error) {
      toast({
        title: "Authentication failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dragon-beige p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/565e314b-84ac-43fe-9891-afbf53053bd3.png" 
            alt="Kapes Adventures Logo" 
            className="w-20 h-20 mx-auto mb-6"
          />
          <h1 className="text-3xl font-academy text-dragon-dark mb-2">
            {isLogin ? 'Welcome Back' : 'Join Your Trip'}
          </h1>
          <p className="text-dragon-gray">
            {isLogin 
              ? 'Log in to access your trip information' 
              : 'Register to access your upcoming adventure'
            }
          </p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email address"
              className="w-full"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
          
          {!isLogin && (
            <div>
              <Input
                placeholder="Trip Code (provided by your trip leader)"
                className="w-full"
                {...register("tripCode", { 
                  required: "Trip code is required for registration"
                })}
              />
              {errors.tripCode && <span className="text-red-500 text-sm">{errors.tripCode.message}</span>}
            </div>
          )}
          
          <Button type="submit" className="w-full bg-dragon hover:bg-dragon-dark">
            {isLogin ? 'Log In' : 'Register'}
          </Button>
          
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-dragon hover:underline text-sm"
            >
              {isLogin ? "Don't have an account? Register" : "Already have an account? Log In"}
            </button>
          </div>
          
          {/* Demo mode button - for development purposes */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <Button 
              type="button" 
              variant="outline"
              className="w-full"
              onClick={() => {
                localStorage.setItem('user', JSON.stringify({ 
                  email: 'demo@example.com',
                  name: 'Demo User',
                  tripId: 'DEMO-TRIP'
                }));
                onAuthenticate();
              }}
            >
              Continue with Demo Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthScreen;
