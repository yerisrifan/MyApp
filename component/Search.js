import React from 'react';
import {styles} from '../constant';
import {Input, Icon} from '@ui-kitten/components';

const Search = () => {
  const IconSearch = style => <Icon {...style} name="search-outline" />;

  return (
    <Input
      icon={IconSearch}
      size="small"
      style={styles.searchContainer}
      placeholder="Search here"
    />
  );
};

export default Search;
