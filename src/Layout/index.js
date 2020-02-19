import React, { Component } from 'react';
import { Content, Body } from './styled'
import { Provider } from 'react-redux';
import Header from './header'
import store from '../store';

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Provider store={store}>
        <Body>
          <Header />
          <Content>{children}</Content>;
        </Body>
      </Provider>
    )
  }
}
