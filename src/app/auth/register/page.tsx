'use client';

import React, { Suspense } from 'react';
import RegisterPage from '../../../components/RegisterPage';

export default function RegisterWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterPage />
    </Suspense>
  );
}
