import { render, screen } from "@testing-library/react";

import { PRODUCT_MOCK } from "../../../../shared";
import { searchListRenderItem, SearchListRenderItemProps } from "./searchListRenderItem";


const setUp = ({ searchPhrase, item, navigation }: SearchListRenderItemProps) => 
  render(searchListRenderItem({searchPhrase, item, navigation}))


  describe(searchListRenderItem.name, () => {
    it("should render as expected", () => {
      setUp({ searchPhrase:'', item: PRODUCT_MOCK, navigation: null });
      expect(screen.getByText("Mens Casual Premium Slim Fit T-Shirts")).toBeInTheDocument()
    })

    it("should not show any product when searched phrase is not valid", () => {
      setUp({ searchPhrase:'QWEQWE', item: PRODUCT_MOCK, navigation: null });
      expect(screen.queryByText("Mens Casual Premium Slim Fit T-Shirts")).not.toBeInTheDocument()
    })

    it("should show the searched product", () => {
      setUp({ searchPhrase:'Mens', item: PRODUCT_MOCK, navigation: null });
      expect(screen.getByText("Mens Casual Premium Slim Fit T-Shirts")).toBeInTheDocument()
    })

    
  })
