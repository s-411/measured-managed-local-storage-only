'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/AuthContext';

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // User is logged in, redirect to main app
        router.push('/daily');
      } else {
        // User is not logged in, redirect to login
        router.push('/auth/login');
      }
    }
  }, [user, loading, router]);

  // Show loading while determining auth state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-mm-dark">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mm-blue mx-auto mb-4"></div>
          <p className="text-mm-gray">Loading MM Health...</p>
        </div>
      </div>
    );
  }

  // This shouldn't be visible as we redirect immediately
  return null;
}