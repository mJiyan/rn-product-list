import { act } from "@testing-library/react"

export const wait = async (ms = 0): Promise<void> => {
    await act(() => new Promise((resolve) => {
        setTimeout(resolve, ms)
    }))
}

