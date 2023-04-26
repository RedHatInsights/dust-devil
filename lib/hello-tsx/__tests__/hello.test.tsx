import { render, screen } from '@testing-library/react';
import { Hello } from '../';

describe('Hello component', () => {
  it('renders', () => {
    render(<Hello name='test' />);
    expect(screen.queryByText('Hello test')).toBeInTheDocument();
  });
});
