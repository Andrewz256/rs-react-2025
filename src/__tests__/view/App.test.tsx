import { render, screen } from '@testing-library/react';
import Main from '../../view/pages/main/main';

describe('<Main />', () => {
  it('Search text `search` in Main Page', () => {
    render(<Main />);
    expect(screen.getByText(/Search/i));
  });
});
