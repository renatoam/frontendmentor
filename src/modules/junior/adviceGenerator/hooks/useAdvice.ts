import axios from "axios"
import { useEffect, useState } from "react"

interface AdviceProps {
  slip: {
    id: number
    advice: string
  }
}

const initialState = {
  slip: {
    id: 0,
    advice: "Get a new advice clicking the button"
  }
}

export const useAdvice = () => {
  const [advice, setAdvice] = useState<AdviceProps>(initialState)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function getRandomAdvice() {
    setIsLoading(true)
    const response = await axios.get<AdviceProps>('https://api.adviceslip.com/advice')

    setAdvice(response.data)
    setIsLoading(false)
  }

  function generateNewAdvice() {
    getRandomAdvice()
  }

  useEffect(() => {
    getRandomAdvice()
  }, [])

  return {
    id: advice.slip.id,
    advice: advice.slip.advice,
    isLoading,
    generateNewAdvice
  }
}
