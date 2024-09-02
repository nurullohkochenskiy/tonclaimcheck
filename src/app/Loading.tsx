"use client";
import Loader from '@/components/loading/Loader';
import WelcomeMsg from '@/components/loading/WelcomeMsg';
import React from 'react'

const Loading = () => {
  return (
    <>
    <main>
        <WelcomeMsg/>
        <Loader/>
    </main>
    </>
  )
}

export default Loading