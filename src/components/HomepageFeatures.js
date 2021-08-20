import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'FreeHub',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <b>
        freehub致力于将繁琐的文件上传下载过程高度封装，提供统一的简单易用的API。
      </b>
    ),
  },
  {
    title: 'CloudOS',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <b>
        云计算的时代正在到来，云原生、通过浏览器即可访问的云操作系统将会应运而生，在其之上将会生长出庞大的应用生态，远非今天的本地操作系统所能相比。
      </b>
    ),
  },
  {
    title: 'EduEngine',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <b>
        终身教育正成为时代的潮流。不断学习已成为人们的共识。当前所缺乏的是，一个高度可用的学习引擎|学习平台，在其之上，自学，以及教学从未如此简单，人们将以极高的效率学习。
      </b>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
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
