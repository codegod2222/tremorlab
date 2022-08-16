/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import ArrowUpIcon from 'assets/ArrowUpIcon';

import Icon from 'components/icon-elements/Icon';

describe('Icon Default', () => {
    test('renders the Icon component with default props', () => {
        render(
            <Icon Icon={ ArrowUpIcon } />
        );
    });
});
