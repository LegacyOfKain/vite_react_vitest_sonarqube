import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it } from 'vitest';
 



describe('App', () => {

  it('renders headline', () => {

    render(<App />);

    const headline = screen.getByText(/count is/i);

    expect(headline).toBeInTheDocument();

  });

});