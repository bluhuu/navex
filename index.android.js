/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './js/App';

export default class MeiTuan extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('navex', () => MeiTuan);

