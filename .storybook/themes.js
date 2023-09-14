import { create } from "@storybook/theming";
import * as tokens from "../src/token/tokens";

export const dark = create({
  base: "dark",

  colorPrimary: tokens.KsColorSecondaryBase,
  colorSecondary: tokens.KsColorSecondaryBase,

  // UI
  appBg: tokens.KsColorPrimaryToBg9Base,
  appContentBg: tokens.KsBackgroundColorDefaultBase,
  appBorderColor: tokens.KsColorPrimaryAlpha2Base,
  appBorderRadius: tokens.KsBorderRadiusCard,

  // Typography
  fontBase: tokens.KsFontFamilyInterface,
  fontCode: tokens.KsFontFamilyMono,

  // Text colors
  textColor: tokens.KsTextColorDefaultBase,
  textInverseColor: tokens.KsTextColorDefaultInvertedBase,

  // Toolbar default and active colors
  barTextColor: tokens.KsColorSecondaryAlpha6Base,
  barSelectedColor: tokens.KsColorSecondaryBase,
  barBg: tokens.KsBackgroundColorDefaultBase,

  // Form colors
  inputBg: tokens.KsBackgroundColorInterfaceInteractiveBase,
  inputBorder: tokens.KsColorFgToBg7Base,
  inputTextColor: tokens.KsTextColorInterfaceInteractiveBase,
  inputBorderRadius: tokens.KsBorderRadiusControl,

  brandTitle: "Your kickstartDS Storybook",
  brandUrl: "https://www.kickstartDS.com",
  brandImage: "/logo.svg",
});

export const docsTheme = create({
  base: "dark",
  colorPrimary: "hotpink",
  colorSecondary: "deepskyblue",

  // UI
  appBg: tokens.KsColorPrimaryToBg9Base,
  appContentBg: tokens.KsBackgroundColorDefaultBase,
  appBorderColor: tokens.KsColorPrimaryAlpha2Base,
  appBorderRadius: tokens.KsBorderRadiusCard,

  // Typography
  fontBase: tokens.KsFontFamilyInterface,
  fontCode: tokens.KsFontFamilyMono,

  // Text colors
  textColor: tokens.KsTextColorDefaultBase,
  textInverseColor: tokens.KsTextColorDefaultInvertedBase,

  // Toolbar default and active colors
  barTextColor: tokens.KsColorSecondaryAlpha6Base,
  barSelectedColor: tokens.KsColorSecondaryBase,
  barBg: tokens.KsBackgroundColorDefaultBase,

  // Form colors
  inputBg: tokens.KsBackgroundColorInterfaceInteractiveBase,
  inputBorder: tokens.KsColorFgToBg7Base,
  inputTextColor: tokens.KsTextColorInterfaceInteractiveBase,
  inputBorderRadius: tokens.KsBorderRadiusControl,

  brandTitle: "Cusotm docs theme",
  brandUrl: "https://example.com",
  brandImage: "https://placehold.it/350x150",
});
