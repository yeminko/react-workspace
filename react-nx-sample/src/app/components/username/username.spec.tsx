import { render } from '@testing-library/react';

import Username from './username';

describe('Username', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Username />);
    expect(baseElement).toBeTruthy();
  });
});
