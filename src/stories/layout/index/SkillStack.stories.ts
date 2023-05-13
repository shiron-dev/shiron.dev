import { SkillStack } from "@/components/layout/index/SkillStack";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SkillStack> = {
  title: "Layout/index/SkillStack",
  component: SkillStack,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    category: "Category",
    skills: ["Skill1", "Skill2", "Skill3"],
  },
};

export default meta;
type Story = StoryObj<typeof SkillStack>;

export const Default: Story = {};
