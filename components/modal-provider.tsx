"use client"

import React from 'react'
import ProModal from './pro-modal'

export default function ModalProvider() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      <ProModal /> 
    </>
  );
}
