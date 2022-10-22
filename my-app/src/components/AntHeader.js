import { Button, Descriptions, PageHeader } from 'antd';
import React from 'react';

const headerStyle = {
  background: 'aliceblue'
}

const AntHeader = () => (
  <div>
    <PageHeader style = {headerStyle}
      title="NIFTY"
      subTitle="mint and view nfts"
    >
     
    </PageHeader>
  </div>
);

export default AntHeader;