// SPDX-FileCopyrightText: 2022 Palo Alto Networks
// SPDX-License-Identifier: MIT

import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { title } from "process";

const FeatureList = [
  {
    title: "🌐 API",
    link: "/docs/category/api",
    description: (
      <>
        Sidings Media's API is a general use API supporting all of Sidings
        Media's online presence. It is fully documented using the OpenAPI
        standard making getting started simple. View our API docs to find out
        more.
      </>
    ),
  },
];

function Feature({ link, title, description }) {
  return (
    <article class="col col--6 margin-bottom--lg">
      <a
        class="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
        href={link}
      >
        <h2
          class="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
          title={title}
        >
          {title}
        </h2>
        <p
          class="cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
          title={description}
        >
          {description}
        </p>
      </a>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
