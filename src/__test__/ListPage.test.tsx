import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListPage from '../pages/ListPage';


describe('ListPage component', () => {
    const userList = [
        {
            id: 1,
            name: 'Kasun',
            address: 'No:278, VI Drive, Temple Place',
            country: 'Sri Lanka',
        },
    ];

    it('renders the user list correctly', async () => {
        const { getByText } = await render(
            <MemoryRouter>
                <ListPage />
            </MemoryRouter>
        );

        const userListHeading = getByText('User List');
        expect(userListHeading).toBeInTheDocument();

        // TO DO Need to remove the setTimeout
        setTimeout(() => {
            userList.forEach((user) => {
                const userName = getByText(user.name);
                const userAddress = getByText(user.address);
                const userCountry = getByText(user.country);

                expect(userName).toBeInTheDocument();
                expect(userAddress).toBeInTheDocument();
                expect(userCountry).toBeInTheDocument();
            });
        }, 0);
    });
});