import { useSearchParams } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Main from '../view/pages/main/main';

describe('<Main />', () => {
  it('Search text `search` in Main Page', () => {
    const [searchParams, setSearchParams] = useSearchParams();
    render(
      <Main searchParams={searchParams} setSearchParams={setSearchParams} />
    );
    expect(screen.getByText(/Search/i));
  });
});
