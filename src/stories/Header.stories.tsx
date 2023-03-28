import { Meta, Story } from "@storybook/react/types-6-0";
import Header, { HeaderProps } from "../components/Header";

export default {
  title: "components/Header",
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          "This is a header component that can be used to display a title and description. It can be used in any page to display a title and description. It can also be used in a modal to display a title and description. It can be used in a form to display a title and description. It can be used in a card to display a title and description. It can be used in a table to display a title and description. It can be used in a list to display a title and description. It can be used in a grid",
      },
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Card Distribution",
  description: "Enter Number Of Players To Distribute Cards",
};

export const WithTitle = Template.bind({});

WithTitle.args = {
  title: "Card Distribution",
  description: "",
};

export const WithDescription = Template.bind({});

WithDescription.args = {
  title: "",
  description: "Enter Number Of Players To Distribute Cards",
};

export const WithTitleAndDescription = Template.bind({});

WithTitleAndDescription.args = {
  title: "Card Distribution",
  description: "Enter Number Of Players To Distribute Cards",
};

export const WithNoProps = Template.bind({});

WithNoProps.args = {
  title: "",
  description: "",
};
