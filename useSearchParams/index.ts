import { useRef } from 'react'

/**
 * An implementation of `useSearchParams` for react router dom v6
 * @returns
 */
export default function useSearchParams<K extends string>() {
  const query = location.hash.split('?')[1]
  const searchParams = new URLSearchParams(query)
  const prevRef = useRef<string>('')

  const update = () => {
    const queryString = searchParams.toString()

    if (prevRef.current === queryString) {
      // same as before, no need to update
      return
    }
    // console.log('update search params', Date.now(), { prev: prevRef.current, queryString })

    prevRef.current = queryString
    location.hash = `${location.hash.split('?')[0]}?${queryString}`
  }

  return {
    get: (key: K) => searchParams.get(key as string),

    set: (key: K, value: string) => {
      searchParams.set(key as string, value)
      update()
    },

    delete: (key: K) => {
      searchParams.delete(key as string)
      update()
    },
  }
}
