import { StoryFn, Meta } from "@storybook/react";

import Icon, { type IconProps } from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const CurrencyUSD = Template.bind({});
CurrencyUSD.args = {
  currency: "USD",
};

export const CurrencyEUR = Template.bind({});
CurrencyEUR.args = {
  currency: "EUR",
};

export const NoCurrencyImage = Template.bind({});
NoCurrencyImage.args = {
  currency: "ADA",
};
