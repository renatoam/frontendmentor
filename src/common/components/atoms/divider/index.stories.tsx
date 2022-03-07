import { ComponentStory, ComponentMeta } from "@storybook/react";

import DividerComponent from ".";

export default {
  title: "Divider",
  component: DividerComponent,
} as ComponentMeta<typeof DividerComponent>;

export const Divider: ComponentStory<typeof DividerComponent> = () => (
  <DividerComponent />
);
