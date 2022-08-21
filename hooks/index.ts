import { useState, useEffect } from "react"
export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncevalue, setdeBouncevalue] = useState<T>(value)
  useEffect(() => {
    let timer = setTimeout(() => {
      setdeBouncevalue(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return debouncevalue
}

export const useMediaQuery = (query: string) => {
  function getMetched(query: string) {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches
    }
    return false
  }
  const [matched, setMatched] = useState<boolean>(getMetched(query))
  useEffect(() => {
    let mql = window.matchMedia(query)
    const listener = () => setMatched(mql.matches)
    mql.addListener(listener)
    return () => {
      mql.removeListener(listener)
    }
  }, [query])
  return matched
}