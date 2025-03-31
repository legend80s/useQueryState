import React from 'react'
import useSearchParams from '../useSearchParams'

export default function useQueryState<V extends string>(key: string, defaultValue: V) {
  const { get, set } = useSearchParams()

  // Get the value from the URL parameter, and use the default value if it doesn't exist.
  const initialValue = (get(key) as V | null) ?? defaultValue

  const [state, setState] = React.useState<V>(initialValue)

  // Update status and sync to URL parameter.
  const setValue = (value: V) => {
    setState(value)
    set(key, value)
  }

  return [state, setValue] as const
}
