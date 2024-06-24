import { memo, ReactNode } from 'react';
import Loader from '../Loader';

export type MDLoaderLayoutProps = {
  children?: ReactNode;
  isLoading?: boolean;
};

const MDLoaderLayout = ({ children, isLoading }: MDLoaderLayoutProps) => {
  if (isLoading) return <Loader />;
  return <>{children}</>;
};

export default memo<MDLoaderLayoutProps>(MDLoaderLayout);
