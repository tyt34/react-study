import { useState } from 'react'

export const useAnimated = () => {
  const [linkArr, setLinkArr] = useState<string[]>([])
  const [numAnimation, setNumAnimation] = useState(0)

  // console.log({ a: linkArr.at(-1) })

  if (linkArr.at(-1) !== linkArr.at(-2)) {
    setNumAnimation((prev) => prev++)
  }

  console.log({ a: linkArr, n: numAnimation })

  return { setLinkArr, numAnimation }
}
