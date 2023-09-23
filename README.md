# kickstartDS Agency Starter

kickstartDS Agency Starter is a specialized version of the kickstartDS Starter, tailored for digital agencies. It provides a set of content components that can be used to style marketing pages, while maintaining the flexibility and customizability of the original starter.

## Features

- **Design System:** A ready-to-use Design System, with pre-configured semantic token structure and example components.
- **Storybook Integration:** Storybook is configured with best practices, kickstartDS integration, addons, and composition. Hot reload is enabled for all code changes.
- **Playroom Integration:** Playroom is integrated for prototyping.
- **Bundling:** The Design System is bundled for use with and without React.
- **Release Handling:** Semantic release handling is configured using auto.
- **Content:** Includes components, recipes, pages, and docs.

## Components

The Agency Starter includes several components that are immediately useful for creating marketing pages. These components are built using the kickstartDS Starter and kickstartDS itself, showcasing its features and best practices:

| Component       | Description                                                                                        | Main Properties                                                          |
| --------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Blog Aside**  | This component provides meta info for a singular blog entry.                                       | author, social sharing links, reading time, and published date           |
| **Blog Head**   | This component serves as the intro portion of a singular blog entry.                               | published date, tags, headline, and cover image                          |
| **Blog Teaser** | This component is used to display a blog teaser with date, tags, headline, teaser text and author. | date, tags, headline, teaser text, image, link, reading time, and author |
| **Button**      | A basic button component for user interaction.                                                     | label, target, variant, icon, size, and disabled state                   |
| **CTA**         | A Call to Action component.                                                                        | headline, subheadline, text, button, and alignment                       |
| **FAQ**         | This component is used to display a FAQ section.                                                   | an array of questions and answers                                        |
| **Features**    | This component is used to display a set of features.                                               | layout and features                                                      |
| **Footer**      | A basic footer component.                                                                          | logo, navigation, and social links                                       |
| **Gallery**     | This component is used to display a gallery of images.                                             | images and captions                                                      |
| **Header**      | A basic header component.                                                                          | logo, navigation, and social links                                       |
| **Logos**       | This component is used to display a set of logos.                                                  | an array of logos                                                        |
| **Nav Main**    | This component is used for main navigation.                                                        | an array of navigation items                                             |
| **Section**     | This component is used to layout components into pages.                                            | title, content, and layout                                               |
| **Split**       | This component is used to create a split layout.                                                   | left and right content                                                   |
| **Stats**       | This component is used to display a set of statistics.                                             | an array of stats                                                        |
| **Teaser Card** | This component is used to display a teaser card.                                                   | image, headline, text, and link                                          |
| **Testimonial** | This component is used to display a testimonial.                                                   | author, quote, and image                                                 |
| **Text**        | A basic text component.                                                                            | content and variant                                                      |
| **Visual**      | This component is used to display a visual element.                                                | image, alt text, and caption                                             |

## Installation

To install the Agency Starter, you need to have Node.js installed. We recommend managing your local Node.js versions using [nvm](https://github.com/nvm-sh/nvm).

## Getting Started

To get started with the Agency Starter, follow these steps:

1. Create a new repository based on this template.
2. Update the `package.json` file with your project details.
3. Add your own logo.
4. Install the dependencies (`npm install` / `yarn install`).
5. Start Storybook (`npm start`, `yarn start`).

## Contributing

Contributions are welcome. Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as below, without any additional terms or conditions.

## License

This project is licensed under either of

- [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0) ([LICENSE-APACHE](LICENSE-APACHE))
- [MIT license](https://opensource.org/license/mit/) ([LICENSE-MIT](LICENSE-MIT))

at your option.

The SPDX license identifier for this project is MIT OR Apache-2.0.
