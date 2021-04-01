import React, { FC } from 'react';
import useSWRNative from '@nandorojo/swr-react-native';

import { DefaultTemplate } from '../components/templates/DefaultTemplate';

import { fetcher } from '../api';
import { ActivityIndicator } from 'react-native';
import { Layout } from '../Layout';

export const Home: FC<{}> = ({ navigation }) => {
  const { data, error } = useSWRNative('screens/1', fetcher);

  if (!data) {
    return <ActivityIndicator />;
  }

  const onLogoPress = () => {
    navigation.navigate('Promotion');
  };

  return (
    <Layout>
      <DefaultTemplate
        onLogoPress={onLogoPress}
        logo={data.content.logo}
        mainCard={data.content.main_card}
        categories={data.content.categories}
      />
    </Layout>
  );
};
