import { StoryFn, Meta } from "@storybook/react";
import Dropdown, { DropdownProps } from "./Dropdown";
import { CurrenciesEnum } from "../../types/types";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedCurrency: CurrenciesEnum.USD,
  onCurrencyChange: (currency: CurrenciesEnum) => console.log(currency),
};
