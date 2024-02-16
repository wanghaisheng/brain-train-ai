import React from 'react'
import { AudioLines, LayoutDashboard } from "lucide-react";

export default function Loader() {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center'>
      <div className='relative animate-spin'>
        <AudioLines className="h-10 w-10 text-cyan-400" />
      </div>
      <p className='text-sm text-muted-foreground'>
        ZenMelody is working on it...
      </p>
    </div>
  )
}
