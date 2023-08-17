import { render } from '@testing-library/react';

import EmailInput2 from './email-input-2';

describe('EmailInput2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmailInput2 />);
    expect(baseElement).toBeTruthy();
  });
});
