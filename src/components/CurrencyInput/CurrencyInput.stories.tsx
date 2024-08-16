import { StoryFn, Meta } from "@storybook/react";
import CurrencyInput, { CurrencyInputProps } from "./CurrencyInput";

export default {
  title: "Components/CurrencyInput",
  component: CurrencyInput,
} as Meta;

const Template: StoryFn<CurrencyInputProps> = (args) => (
  <CurrencyInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userInput: "",
  onUserInputChange: (input: string) => console.log(input),
};
