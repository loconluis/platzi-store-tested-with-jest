import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const wrapper = mount(<Footer />);
  test('Render del componente', () => {
    // Con mount se monta el componente dentro de un DOM de prueba
    expect(wrapper.length).toEqual(1);
  });

  test('Render del titulo', () => {
    expect(wrapper.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
