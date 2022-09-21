import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#D4E0FB'
  },
  welcomeView: {
    padding: 40,
    backgroundColor: '#ffff',
    borderBottomRightRadius: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 40
  },
  welcomeText: {
    fontSize: 40,
    color: '#8EAEF2'
  },
  forgot: {
    fontSize: 16,
    color: '#8EAEF2',
    alignSelf: 'center'
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: 40,
    paddingLeft: 40,
    marginTop: 40
  },
  iconView: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  imgStyle: {
    resizeMode: 'center',
    width: 30,
    height: 30,
  },
  signupBtn: {
    marginTop: 30,
    width: 250,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#699AF1',
    alignSelf: 'center'
  },
  inputForm:{ 
    margin: 25, 
    marginTop: 45 
  },
  input: {
    height: 45,
    margin: 5,
    borderWidth: 2,
    padding: 10,
    paddingLeft: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#699AF1',

  },
  labelText: {
    marginTop: 10,
    marginLeft: 20,
  },
  errorStyle:{ 
    fontSize: 10, 
    color: 'red', 
    marginLeft: 20, 
  },
  signinBtn: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
  }
});

export default styles;