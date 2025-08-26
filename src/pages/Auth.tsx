import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Chrome } from 'lucide-react';

const Auth = () => {
  const { user, signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect authenticated users to home
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container-padding w-full max-w-md">
        <Card className="w-full">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S&N</span>
            </div>
            <div>
              <CardTitle className="text-2xl font-heading">Welcome Back</CardTitle>
              <CardDescription className="text-muted-foreground">
                Sign in to your account to continue shopping
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <Button 
              onClick={signInWithGoogle}
              className="w-full h-12 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
              disabled={loading}
            >
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
            </Button>
            
            <div className="text-center text-sm text-muted-foreground">
              <p>
                By signing in, you agree to our{' '}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;