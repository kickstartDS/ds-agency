import { addons } from "@storybook/manager-api";
import { dark } from "./themes";

import "./manager.css";

addons.setConfig({ theme: dark });
