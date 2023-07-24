import "@testing-library/jest-dom";
import { getByTestId, render  } from '@testing-library/react';
import { DataGrid } from "../components/Datagrid";
import fetchMock from "jest-fetch-mock";
import fetch from "jest-fetch-mock";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// 
const response = {
    "docs": [],
    "totalDocs": 25,
    "limit": 10,
    "totalPages": 3,
    "page": 1,
    "pagingCounter": 1,
    "hasPrevPage": false,
    "hasNextPage": true,
    "prevPage": null,
    "nextPage": 2
  }



describe("Datagrid component" , () => {
    // beforeEach(() => {
    //     global.fetch = jest.fn(() => Promise.resolve({
    //         json: () => Promise.resolve(response)
    //     })) as jest.Mock;
    //     //jest.spyOn(window,"fetch").mockImplementation(mockFetch);
    // })
    
    // afterEach(() => {
    //     jest.restoreAllMocks()
    //  });
    fetchMock.enableMocks();

    beforeEach(() => {
        fetchMock.resetMocks()
      })

      it('should render the Datagrid component correctly', async () => {
        render(<DataGrid/>);

        fetch.mockResponseOnce(JSON.stringify(response))
        
        expect(getByTestId(document.documentElement , 'form-element')).toBeInTheDocument();
        expect(getByTestId(document.documentElement , 'html-status-select-element')).toBeInTheDocument();
        expect(getByTestId(document.documentElement , 'html-type-select-element')).toBeInTheDocument();
      })

    // it("should render the Datagrid component correctly" , async () => {
    //     render(<DataGrid/>);
    //     expect(screen.getAllByRole("combobox")).toBeInTheDocument();
    //     expect(screen.getByRole("form")).toBeInTheDocument();
    //     expect(screen.getAllByRole("table")).toBeInTheDocument();
    // })
})

