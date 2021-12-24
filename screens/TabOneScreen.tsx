import { StyleSheet } from 'react-native';
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
} from 'native-base';

import EditScreenInfo from '../components/EditScreenInfo';

import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
   <Box bg="primary.600" py="4" px="3">1</Box>
  );
}


