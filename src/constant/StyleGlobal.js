import {StyleSheet} from 'react-native';
import {Platform, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a2c',
    fontFamily: 'Montserrat-Bold',
  },
  headerNav: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
  },
  seacrh: {
    marginEnd: -1,
  },
  searchContainer: {
    borderTopColor: '#181a2c',
    borderBottomColor: '#181a2c',
    backgroundColor: '#181a2c',
    borderRadius: 20,
  },
  searchInputContainer: {
    backgroundColor: '#1b2136',
    borderRadius: 20,
  },
});

export default styles;
