import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewIcon: {
    backgroundColor: '#030302',
    padding: 10
  },
  arrowIcon: {
    fontSize: 30,
    color: '#ffffff'
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  searchView: {
    flexDirection: 'row',
    borderWidth: 0.5,
    margin: 15,
    marginLeft: 25,
    alignItems: 'center',
    borderRadius: 20,
    width: 290
  },
  searchIcon: {
    margin: 10,
    paddingLeft: 5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  movieText: {
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 20,
    backgroundColor: '#ffffff'
  },
  renderRowView: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    backgroundColor: '#ffffff'
  },
  imgStyle: {
    resizeMode: 'center',
    width: 100,
    height: 150,
    borderRadius: 20,
    margin: 10
  },
  titleView: {
    resizeMode: 'center',
    width: 100,
    height: 150,
    borderRadius: 20,
    margin: 10
  },
  titleText: {
    fontSize: 20,
    color: 'black'
  },
  starIcon: {
    fontSize: 20,
    color: '#ebd64d',
    paddingTop: 15
  },
  voteStyle: {
    fontSize: 16,
    color: '#ccc8c8',
    paddingTop: 20
  },
  dateStyle: {
    fontSize: 20,
    color: '#ccc8c8',
    paddingTop: 15
  },
});

export default styles;
