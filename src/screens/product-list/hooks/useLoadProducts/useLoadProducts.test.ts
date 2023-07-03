import React from 'react';
import { renderHook } from "@testing-library/react"

import useLoadProducts from "./useLoadProducts"

describe(useLoadProducts.name, () => {

    it("should return selected country when name is provided to api", () => {
        const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();
        renderHook(() => useLoadProducts())

        expect(useEffectSpy).toHaveBeenCalledTimes(1)
    })
});
