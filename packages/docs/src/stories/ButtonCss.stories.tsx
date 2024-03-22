import type { StoryObj, Meta } from "@storybook/react";
import { ButtonCss, ButtonCssProps } from "@lmf-design-system-study/react";
import "../../../react/dist/index.css";

export default {
  title: "Form/ButtonCss",
  component: ButtonCss,

  args: {
    children: "Enviar",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonCssProps>;

export const Primary: StoryObj<ButtonCssProps> = {};

export const Secondary: StoryObj<ButtonCssProps> = {
  args: {
    variant: "secondary",
    children: "Criar",
  },
};

export const Tertiary: StoryObj<ButtonCssProps> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Small: StoryObj<ButtonCssProps> = {
  args: {
    size: "sm",
  },
};

export const WithIcon: StoryObj<ButtonCssProps> = {
  args: {
    children: <>Próximo passo</>,
  },
};

export const Disabled: StoryObj<ButtonCssProps> = {
  args: {
    disabled: true,
  },
};
