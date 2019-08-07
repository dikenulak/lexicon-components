import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import { Button, Select } from "../src/components";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("Primary", () => (
    <Button primary onClick={action("clicked")}>
      Sign Up
    </Button>
  ))
  .add("Secondary", () => (
    <Button secondary onClick={action("clicked")}>
      Sign Up
    </Button>
  ))
  .add("With Icon", () => (
    <Button outlined iconName="plus" onClick={action("clicked")}>
      Sign Up
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
storiesOf("Select", module).add("Select", () => (
  <Select
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" }
    ]}
    onClick={action("clicked")}
  >
    Sign Up
  </Select>
));
