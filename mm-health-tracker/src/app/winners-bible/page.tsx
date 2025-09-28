'use client';

import React from 'react';
import {
  PhotoIcon,
} from '@heroicons/react/24/outline';

export default function WinnersBiblePage() {
  return (
    <div className="p-6 md:p-8 w-[90%] mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-heading mb-2">Winners Bible</h1>
        <p className="text-mm-gray">Your motivational images for daily inspiration</p>
      </div>

      <div className="card-mm p-8 text-center">
        <PhotoIcon className="w-16 h-16 text-mm-gray/50 mx-auto mb-4" />
        <h2 className="text-xl font-heading text-mm-white mb-2">Coming Soon</h2>
        <p className="text-mm-gray mb-6">
          The Winners Bible feature is currently under development. Check back soon for your daily motivation routine.
        </p>
        <a
          href="/daily"
          className="btn-mm py-3 px-6 inline-block"
        >
          Back to Daily Tracker
        </a>
      </div>
    </div>
  );
}