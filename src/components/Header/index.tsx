import React from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import { NewTask } from '../NewTask';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />  
      </View>
      <NewTask />
    </View>
  );
}