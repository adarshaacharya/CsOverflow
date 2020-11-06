import React from 'react';
import { Skeleton } from 'antd';

export function PageSkeleton() {
  const skeletonParagraph = <Skeleton active paragraph={{ rows: 4 }} className="page-skeleton__paragraph" />;
  return (
    <>
      {skeletonParagraph}
      {skeletonParagraph}
      {skeletonParagraph}
    </>
  );
}
