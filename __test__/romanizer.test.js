import {transformrom} from "../src/romanizer";

describe('romanizer', () => {
  it('should return X when give 10', () => {
    const trans = transformrom(10);
    expect(trans).toEqual('X');
  });
});