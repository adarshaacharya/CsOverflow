import { Input } from 'antd';
import * as React from 'react';
const { Search } = Input;

export const Searchbar = () => {
  const onSearch = (value: string) => console.log(value);

  return <Search placeholder="input search text" onSearch={onSearch} enterButton />;
};
