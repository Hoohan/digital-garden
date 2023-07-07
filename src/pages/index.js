import React from 'react';
import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`首页`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div className={clsx(styles.heroBanner)}>
        <h1>欢迎您&nbsp;&nbsp;|&nbsp;&nbsp;全新数字花园正在建设中</h1>
        <p>请通过上方导航栏阅读现有内容</p>
      </div>
    </Layout>
  );
}
