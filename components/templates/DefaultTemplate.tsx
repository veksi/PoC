import React, { FC, Fragment, ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { ICategoryProps } from '../../interfaces/ICategoryProps';
import { IMainCardProps } from '../../interfaces/IMainCardProps';

interface IDefaultTemplateProps {
  logo: string;
  onLogoPress?(): void;
  specificComponent: ReactNode;
  mainCard: IMainCardProps;
  categories: Array<ICategoryProps>;
}

export const DefaultTemplate: FC<IDefaultTemplateProps> = ({
  logo,
  onLogoPress = () => {},
  specificComponent,
  mainCard,
  categories,
}) => {
  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={onLogoPress}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={{
              uri: logo,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <View />
      <View style={styles.mainCard}>
        <Image
          style={styles.mainCardBackground}
          source={{
            uri: mainCard.background_image,
          }}
          resizeMode="cover"
        />
        <View style={styles.mainCardContent}>
          <Text style={styles.mainCardTitle}>{mainCard.title}</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>{mainCard.tag}</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    height: 60,
    width: 120,
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  mainCard: {
    width: '100%',
    marginTop: 20,
    height: 400,
    position: 'relative',
  },
  mainCardContent: {
    padding: 24,
  },
  mainCardBackground: {
    height: '100%',
    width: '100%',
    zIndex: -1,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'absolute',
  },
  mainCardTitle: {
    color: 'white',
    width: 210,
    fontSize: 24,
    fontWeight: 'bold',
  },
  tagContainer: {
    flexDirection: 'row',
    display: 'flex',
    borderRadius: 4,
    backgroundColor: 'rgba(202, 202, 202, 0.5)',
  },
  tag: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    marginTop: 20,
    color: 'white',
  },
});
