import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";
import { MemoryRouter } from "react-router-dom";

describe('Home page test', () => {
    // If we are using react-router-dom for the component navigation we should use
    // MemoryRouter component while we are loading components to test
    test('Home page shallow rendering', () => {
        render(
            <MemoryRouter>
                <HomePage />
            </MemoryRouter>
        );
        expect(screen.getByText('Main Features'))
    });
});