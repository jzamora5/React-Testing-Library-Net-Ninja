import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Laith",
                    last: "Harb"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/39.jpg"
                },
                login: {
                    username: "ThePhonyGOAT"
                }
            },
            {
                name: {
                    first: "Laith",
                    last: "Harb"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/39.jpg"
                },
                login: {
                    username: "ThePhonyGOAT"
                }
            }
        ]
    }
}

jest.mock('axios', () => ({
    __esModule: true,
    default: {
       get: () => (mockResponse)
    }
  }));

const MockFollowersList = () => {
    return(
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}


describe("FollowersList", () => {
    afterAll(() => {
        jest.resetAllMocks()
    })

  test('should render follower item', async () => {

    render(<MockFollowersList/>);
    const followerDivElement = await screen.findByTestId("follower-item-0")
    expect(followerDivElement).toBeInTheDocument();
  });

  test('should render multiple follower items', async () => {
    render(<MockFollowersList/>);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i)
    expect(followerDivElements.length).toBe(2);
  });
})

 