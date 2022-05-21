import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Probar el estado inicial', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const intialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expectedState = {
      cart: [ProductMock],
    };
    expect(reducer(intialState, action)).toEqual(expectedState);
  });
});
