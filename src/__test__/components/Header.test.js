import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  // Con shallow puedo usar dos componentes y probarlo como uno solo
  const wrapper = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );
  test('Render del componente', () => {
    expect(wrapper.length).toEqual(1);
  });

  test('Render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
