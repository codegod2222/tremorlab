import React from 'react';

import { BadgeProportions, IconProportions } from '@common/component-utils';
import BadgeWrapper from '@common/BadgeWrapper';
import { classNames } from '@utils/classname-utils';

const badgeProportionsAttributes: {[char: string]: BadgeProportions} = {
    xs: {
        paddingX: 'px-2',
        paddingY: 'py-0.5',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: 'px-2.5',
        paddingY: 'py-0.5',
        textSize: 'text-sm',
    },
    md: {
        paddingX: 'px-3',
        paddingY: 'py-0.5',
        textSize: 'text-md',
    },
    lg: {
        paddingX: 'px-3',
        paddingY: 'py-0.5',
        textSize: 'text-lg',
    },
};

const iconProportionsAttributes: {[char: string]: IconProportions} = {
    xs: {
        margin: 'ml-0.5 mr-1.5',
        iconSize: 'w-2 h-2',
    },
    sm: {
        margin: 'mr-1.5',
        iconSize: 'w-2.5 h-2.5',
    },
    md: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-2.5 h-2.5',
    },
    lg: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-2.5 h-2.5',
    },
};

export interface StatusBadgeProps {
    text: string,
    badgeSize?: string
}

const StatusBadge = ({
    text,
    badgeSize = 'sm'
}: StatusBadgeProps) => {
    return(
        <BadgeWrapper
            { ...badgeProportionsAttributes[badgeSize] }
            bgColor={ 'bg-emerald-100' }
            textColor={ 'text-emerald-800' }
        >
            <svg
                className={ classNames( 
                    iconProportionsAttributes[badgeSize].margin || '',
                    iconProportionsAttributes[badgeSize].iconSize || '',
                )}
                fill="currentColor" viewBox="0 0 8 8"
            >
                <circle cx={4} cy={4} r={3} />
            </svg>
            { text }
        </BadgeWrapper>
    );
};

export default StatusBadge;
