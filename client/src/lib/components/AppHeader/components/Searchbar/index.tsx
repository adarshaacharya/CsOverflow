import { Input } from 'antd';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { displayErrorMessage } from 'utils';
const { Search } = Input;

export const Searchbar = () => {
  const [search, setSearch] = React.useState('');

  const location = useLocation();
  const history = useHistory();
  React.useEffect(() => {
    const { pathname } = location;
    const pathnameSubStrings = pathname.split('/');

    if (!pathname.includes('/posts')) {
      setSearch('');
      return;
    }
    if (pathname.includes('/posts') && pathnameSubStrings.length === 3) {
      setSearch(pathnameSubStrings[2]);
      return;
    }
  }, [location]);

  const onSearch = (value: string) => {
    const trimmedValue = value.trim();

    if (trimmedValue) {
      history.push(`/posts/${value}`);
    } else {
      displayErrorMessage('Please enter a valid search!');
    }
  };

  return <Search placeholder="Search..." onSearch={onSearch} enterButton />;
};
