// SPDX-FileCopyrightText: 2022 Palo Alto Networks
// SPDX-FileCopyrightText: 2023 Sidings Media
// SPDX-License-Identifier: MIT

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs | Sidings Media",
  tagline: "Dinosaurs are cool",
  url: "https://docs.sidingsmedia.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SidingsMedia", // Usually your GitHub org/user name.
  projectName: "docs.sidingsmedia.com", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/SidingsMeida/docs.sidingsmedia.com/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/SidingsMeida/docs.sidingsmedia.com/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Docs | Sidings Media",
        logo: {
          alt: "Sidings Media Logo",
          src: "logos/rendered/logo.svg",
          srcDark: "logos/rendered/logo-white.svg",
        },
        items: [
          //   {
          //     type: "doc",
          //     docId: "intro",
          //     position: "left",
          //     label: "Tutorial",
          //   },

          {
            label: "API",
            position: "left",
            to: "/docs/category/api",
          },
          {
            href: "https://sidingsmedia.com#about",
            label: "About",
            position: "right",
          },
          {
            href: "https://blog.sidingsmedia.com",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/SidingsMedia",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Useful Links",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/SidingsMedia",
              },
              {
                label: "Blog",
                href: "https://blog.sidingsmedia.com",
              },
            ],
          },
          {
            title: "Organisation",
            items: [
              {
                label: "Main site",
                href: "https://sidingsmedia.com",
              },
              {
                label: "About",
                href: "https://sidingsmedia.com#about",
              },
              {
                label: "Service Status",
                href: "https://status.sidingsmedia.com",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Disclaimer",
                href: "https://sidingsmedia.com/legal/disclaimer/",
              },
              {
                label: "Terms of Service",
                href: "https://sidingsmedia.com/legal/terms/",
              },
              {
                label: "Privacy Policy",
                href: "https://sidingsmedia.com/legal/privacy/",
              },
            ],
          },
          {
            title: "Social Media",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/sidingsmedia/",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/sidingsmediaofficial",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/SidingsMedia",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sidings Media`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          api: {
            specPath: "openapi.yaml",
            outputDir: "docs/api",
            downloadUrl: "https://api.sidingsmedia.com/openapi.json",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
  scripts: [
    {
      src: "https://cdn.sidingsmedia.com/js/stats.js",
      defer: true,
      "data-domain": "docs.sidingsmedia.com",
      "data-api": "https://api.sidingsmedia.com/stats/event",
    },
  ],
};

module.exports = config;
