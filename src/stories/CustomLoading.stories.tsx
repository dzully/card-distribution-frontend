import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomLoading from "../components/CustomLoading";
import CustomLoading_Story from "./CustomLoading_Story";

export default {
  title: "components/CustomLoading",
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["inherit", "primary", "secondary"],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "CustomLoading",
      },
      page: () => <CustomLoading_Story />,
    },
  },
  component: CustomLoading,
} as ComponentMeta<typeof CustomLoading>;

const colorFunction = (color: string) => {
  switch (color) {
    case "inherit":
      return "inherit";
    case "primary":
      return "primary";
    case "secondary":
      return "secondary";
    default:
      return "inherit";
  }
};

export const Main: ComponentStory<typeof CustomLoading> = ({ color }) => {
  const selectedColor = colorFunction(color as string);
  return <CustomLoading color={selectedColor} />;
};
