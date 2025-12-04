'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface CsrfContextValue {
  token: string | null
  headerName: string
  isLoading: boolean
}

const CsrfContext = createContext<CsrfContextValue>({
  token: null,
  headerName: 'x-csrf-token',
  isLoading: true,
})

export function useCsrf() {
  return useContext(CsrfContext)
}

interface CsrfProviderProps {
  children: React.ReactNode
  initialToken?: string
}

export function CsrfProvider({ children, initialToken }: CsrfProviderProps) {
  const [token, setToken] = useState<string | null>(initialToken || null)
  const [isLoading, setIsLoading] = useState(!initialToken)

  useEffect(() => {
    if (!initialToken) {
      // Fetch CSRF token from server
      fetch('/api/csrf')
        .then(res => res.json())
        .then(data => {
          setToken(data.token)
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
        })
    }
  }, [initialToken])

  return (
    <CsrfContext.Provider value={{ token, headerName: 'x-csrf-token', isLoading }}>
      {children}
    </CsrfContext.Provider>
  )
}

/**
 * Hook to get CSRF headers for fetch requests
 */
export function useCsrfHeaders(): Record<string, string> {
  const { token, headerName } = useCsrf()

  if (!token) {
    return {}
  }

  return {
    [headerName]: token,
  }
}
