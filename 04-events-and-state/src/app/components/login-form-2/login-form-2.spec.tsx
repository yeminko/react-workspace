import { render } from '@testing-library/react';

import LoginForm2 from './login-form-2';

describe('LoginForm2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginForm2 />);
    expect(baseElement).toBeTruthy();
  });
});
