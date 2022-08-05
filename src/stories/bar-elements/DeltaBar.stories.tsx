import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'components/layout-elements/Card';
import DeltaBar from 'components/bar-elements/DeltaBar/DeltaBar';
import Metric from 'components/text-elements/Metric';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/DeltaBar',
    component: DeltaBar,
} as ComponentMeta<typeof DeltaBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof DeltaBar> = (args) => (
    <Card>
        <Metric value="$23.456" name="Sales" />
        <DeltaBar {...args} />
    </Card>
);
  
export const Increase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Increase.args = {
    percentageValue: 30,
    marginTop:'mt-5'
};

export const Decrease = Template.bind({});
Decrease.args = {
    percentageValue: -50,
    marginTop:'mt-5'
};

export const IncreaseReversed = Template.bind({});
IncreaseReversed.args = {
    percentageValue: 50,
    isIncreasePositive: false,
    marginTop:'mt-5'
};
