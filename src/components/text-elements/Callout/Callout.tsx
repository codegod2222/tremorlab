import React from 'react';

import { TwHeight, TwMarginTop } from 'lib/inputTypes';
import { 
    classNames,
    getColorVariantsFromColorThemeValue,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/text';
import { BaseColors } from 'lib/primitives';
import colorTheme from 'lib/colors';
import { sizing } from 'lib/sizing';
import { spacing } from 'lib/spacing';

export interface CalloutProps {
    title: string,
    text: string,
    Icon?: React.ElementType,
    color?: string,
    height?: TwHeight | '',
    marginTop?: TwMarginTop,
}

const Callout = ({
    title,
    text,
    Icon,
    color = BaseColors.Blue,
    height = '',
    marginTop = 'mt-0'
}: CalloutProps) => {
    return(
        <div className={ classNames(
            'relative rounded-md border-l-4',
            marginTop,
            getColorVariantsFromColorThemeValue(colorTheme[color].canvasBackground).bgColor,
            getColorVariantsFromColorThemeValue(colorTheme[color].border).borderColor,
            spacing.lg.paddingLeft,
            spacing.lg.paddingRight,
            spacing.lg.paddingTop,
            spacing.lg.paddingBottom,
            fontSize.sm,
        ) }
        >
            <div className={ classNames(
                'overflow-hidden',
                spacing.xs.marginLeft,
            ) }>
                <div className={ classNames(
                    'flex items-start',
                    getColorVariantsFromColorThemeValue(colorTheme[color].darkText).textColor,
                ) }
                >
                    { Icon ? (
                        <Icon
                            className={ classNames(
                                'flex-none',
                                sizing.lg.height,
                                sizing.lg.width,
                                spacing.xs.marginRight,
                            ) }
                            aria-hidden="true"
                        />
                    ) : null }
                    <h4 className={ classNames(fontWeight.lg) }>{ title }</h4>
                </div>
                <div className={ classNames(
                    'overflow-y-auto',
                    height,
                    getColorVariantsFromColorThemeValue(colorTheme[color].darkText).textColor,
                    spacing.sm.marginTop,
                ) }
                >
                    { text }
                </div>
            </div>
        </div>
    );
};

export default Callout;
