import "@testing-library/jest-dom";
import { render , screen } from '@testing-library/react';
import { HeroSection } from '../components';

describe("Hero component" , () => {
    it("should render the Hero component correctly" , () => {
        render(<HeroSection/>);
        expect(screen.getByRole("heading")).toHaveTextContent(/SpaceX Capsules/)
        expect(screen.getByRole("link")).toBeInTheDocument();
    })
})