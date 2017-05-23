/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/navex
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './js/App';

export default class navex extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('navex', () => navex);
