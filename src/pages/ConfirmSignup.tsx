import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, Loader2, Mail } from 'lucide-react';

const ConfirmSignup = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'expired'>('loading');

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      const token = searchParams.get('token');
      const type = searchParams.get('type');

      if (type === 'signup' && token) {
        try {
          const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: 'signup'
          });

          if (error) {
            console.error('Confirmation error:', error);
            if (error.message.includes('expired')) {
              setStatus('expired');
            } else {
              setStatus('error');
            }
            toast({
              title: "Confirmation failed",
              description: error.message,
              variant: "destructive",
            });
          } else {
            setStatus('success');
            toast({
              title: "Email confirmed!",
              description: "Your account has been successfully verified.",
            });
            // Redirect after a short delay
            setTimeout(() => navigate('/'), 2000);
          }
        } catch (error) {
          console.error('Unexpected error:', error);
          setStatus('error');
          toast({
            title: "Confirmation failed",
            description: "An unexpected error occurred.",
            variant: "destructive",
          });
        }
      } else {
        setStatus('error');
      }
    };

    // If user is already logged in, redirect to home
    if (user) {
      navigate('/');
      return;
    }

    handleEmailConfirmation();
  }, [searchParams, navigate, user, toast]);

  const handleResendConfirmation = async () => {
    // This would need the email from somewhere - for now just redirect to auth
    navigate('/auth');
  };

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
            <div>
              <CardTitle className="text-2xl font-heading">Confirming your email</CardTitle>
              <CardDescription className="text-muted-foreground">
                Please wait while we verify your account...
              </CardDescription>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-heading text-green-600">Email confirmed!</CardTitle>
              <CardDescription className="text-muted-foreground">
                Your account has been successfully verified. You'll be redirected to the home page shortly.
              </CardDescription>
            </div>
          </div>
        );

      case 'expired':
        return (
          <div className="text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-heading text-orange-600">Link expired</CardTitle>
              <CardDescription className="text-muted-foreground">
                This confirmation link has expired. Please request a new one.
              </CardDescription>
            </div>
            <Button onClick={handleResendConfirmation} className="w-full">
              Get new confirmation link
            </Button>
          </div>
        );

      case 'error':
      default:
        return (
          <div className="text-center space-y-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <XCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-heading text-red-600">Confirmation failed</CardTitle>
              <CardDescription className="text-muted-foreground">
                We couldn't verify your email. The link may be invalid or expired.
              </CardDescription>
            </div>
            <div className="space-y-3">
              <Button onClick={handleResendConfirmation} className="w-full">
                Try again
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="w-full"
              >
                Go to home page
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container-padding w-full max-w-md">
        <Card className="w-full">
          <CardHeader>
            {renderContent()}
          </CardHeader>
          
          {status !== 'loading' && (
            <CardContent className="text-center">
              <div className="text-sm text-muted-foreground">
                <p>
                  Need help?{' '}
                  <a href="#" className="text-primary hover:underline">
                    Contact support
                  </a>
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ConfirmSignup;