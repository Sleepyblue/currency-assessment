import { StoryFn, Meta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dropdown, { DropdownProps } from "./Dropdown";
import { CurrenciesEnum } from "../../types/types";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

const queryClient = new QueryClient();

const Template: StoryFn<DropdownProps> = (args) => (
  <QueryClientProvider client={queryClient}>
    <Dropdown {...args} />
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {
  selectedCurrency: CurrenciesEnum.USD,
  onCurrencyChange: (currency: CurrenciesEnum) => console.log(currency),
};
