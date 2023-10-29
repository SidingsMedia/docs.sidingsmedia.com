// SPDX-FileCopyrightText: 2022 Palo Alto Networks
// SPDX-FileCopyrightText: 2023 Sidings Media
// SPDX-License-Identifier: MIT

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img
          className="hero__img"
          src="/logos/rendered/logo-white-vertical.svg"
          alt="Sidings Media Logo"
        />
        <h1 className="hero__title">Documentation Portal</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Documentation portal for Sidings Media. Contains documentation for all projects and the API."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
