'use client';

import React, { Suspense } from 'react';
import VerifyOTP from '../../../components/VerifyOTP';

export default function VerifyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOTP />
    </Suspense>
  );
}
