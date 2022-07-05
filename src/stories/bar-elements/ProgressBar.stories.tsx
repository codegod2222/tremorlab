import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressBar from 'components/bar-elements/ProgressBar/ProgressBar';

import Card from 'components/layout-elements/Card';
import Metric from 'components/text-elements/Metric';

import { BaseColors } from '@utils/objects';
import { Flex } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/ProgressBar',
    component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ProgressBar> = (args) => (
    <>
        { Object.values(BaseColors).map(color => (
            <Card maxWidth="max-w-md">
                <Metric value="$23.456" name="Sales"/>
                <Flex>
                    <ProgressBar {...args} color={ color } />
                </Flex>
            </Card>
        )) }
    </>
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    widthPercentage: 50,
    marginTop: 'mt-5',
    label: 'hello'
};
