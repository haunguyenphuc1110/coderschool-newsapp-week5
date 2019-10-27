import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  input : {
    color: 'black'
  },
  buttonUp: {
    bottom: 10, 
    right: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 1, 
    position: 'absolute', 
    width: 50, 
    height: 50, 
    borderWidth: 0.5, 
    borderColor: 'black',
    borderRadius: 25, 
    backgroundColor: 'white', 
    elevation: 10
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 20,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 20,
    color: 'grey'
  }
});

export default styles;