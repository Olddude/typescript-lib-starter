import { domain } from '.';

describe('domain', () => {

  it('should throw not implemented', () => {
    expect(() => domain()).toThrowError('not implemented');
  });

});
