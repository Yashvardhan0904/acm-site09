// components/ui/ClientLoaderWrapper.tsx
"use client"
import { useState, useEffect } from "react"
import ACMLoader from "@/components/animations/ACMLoader"

export default function ClientLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <ACMLoader />}
      {children}
    </>
  )
}
