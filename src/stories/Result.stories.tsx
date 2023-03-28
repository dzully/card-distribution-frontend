import { Meta, Story } from "@storybook/react/types-6-0";
import Result, { ResultProps } from "../components/Result";

export default {
  title: "components/Result",
  component: Result,
  parameters: {
    docs: {
      description: {
        component: "Result component for display the result of the game",
      },
    },
  },
} as Meta;

const Template: Story<ResultProps> = (args) => <Result {...args} />;

export const Default = Template.bind({});

Default.args = {
  item: {
    1: "2H 3D 5S 9C KD",
    2: "2C 3H 4S 8C AH",
  },
};

export const Empty = Template.bind({});

Empty.args = {
  item: {},
};

export const OnePlayer = Template.bind({});

OnePlayer.args = {
  item: {
    1: "2H 3D 5S 9C KD",
  },
  defaultHeight: 100,
};
