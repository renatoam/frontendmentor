import { ComponentStory, ComponentMeta } from "@storybook/react";

import AttributionComponent from ".";

export default {
  title: "Attribution",
  component: AttributionComponent,
} as ComponentMeta<typeof AttributionComponent>;

export const Attribution: ComponentStory<typeof AttributionComponent> = () => (
  <AttributionComponent />
);
