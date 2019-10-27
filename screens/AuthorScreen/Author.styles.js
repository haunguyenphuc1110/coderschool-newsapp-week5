import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    elevation: 10
  },  
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  }
});

export default styles;