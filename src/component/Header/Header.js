import React from 'react';
import {
  Layout,
  TopNavigation,
  Icon,
  TopNavigationAction,
} from '@ui-kitten/components';
import {styles} from '../../constant';

const Header = props => {
  const bellIcon = style => <Icon {...style} name="bell-outline" />;
  const EditAction = () => <TopNavigationAction icon={bellIcon} />;
  const renderRightControls = () => [<EditAction />];
  return (
    <Layout style={styles.container}>
      <TopNavigation
        title={props.title}
        alignment="center"
        titleStyle={styles.headerNav}
        rightControls={renderRightControls()}
      />
    </Layout>
  );
};

export default Header;
