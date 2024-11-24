import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  icon: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRightWidth: 3,
    borderRightColor: '#F4F5F6'
  },
  group: {
    height: 56,
    width: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  control: {
    flex: 1,
    height: 56,
    width: '100%',
    fontSize: 16,
    paddingLeft: 16,
  },
  errors: {
    fontSize: 14,
    marginTop: 7,
    color: '#DC1637'
  }
});