import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

describe('<App />', () => {
  it('Search text `search` in Main Page', () => {
    render(<App />);
    expect(screen.getByText(/Search/i));
  });
});
