import { StoryFn, Meta } from "@storybook/react/types-6-0";
import ConversionList, { ConversionListProps } from "./ConversionList";
import { DataItem } from "../../types/types";

export default {
  title: "Components/ConversionList",
  component: ConversionList,
} as Meta;

const Template: StoryFn<ConversionListProps> = (args) => (
  <ConversionList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userInput: "100",
  data: [
    { currency: "USD", ask: 1.2 },
    { currency: "EUR", ask: 0.9 },
  ] as (DataItem | null)[],
};

export const EmptyUserInput = Template.bind({});
EmptyUserInput.args = {
  userInput: "",
  data: undefined,
};

export const NoFetchedData = Template.bind({});
NoFetchedData.args = {
  userInput: "100",
  data: undefined,
};
