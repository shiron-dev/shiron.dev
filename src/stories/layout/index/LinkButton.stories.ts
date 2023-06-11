import { LinkButton } from "@/app/_components/LinkButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkButton> = {
  title: "Layout/index/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    icon: "vscode-icons:file-type-storybook",
    name: "Storybook",
    href: "/",
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {};
