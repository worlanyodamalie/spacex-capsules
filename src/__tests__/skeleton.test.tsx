import "@testing-library/jest-dom";
import { render , getByTestId  } from '@testing-library/react';
import { Skeleton } from '../components';

describe("Skeleton component" , () => {
    it("should render the Skeleton component correctly" , () => {
        render(<Skeleton/>);
        expect(getByTestId(document.documentElement , 'skeleton-element')).toBeInTheDocument();
        expect(getByTestId(document.documentElement , 'skeleton-element')).toHaveTextContent(/Loading.../);

    })
})