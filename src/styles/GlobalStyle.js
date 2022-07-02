import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  container20: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexRow: { 
    flexDirection: 'row',
    alignItems: 'center' 
  },
  textWhite16: {
    fontSize: 16,
    color: '#fff',
    margin: 5
  },
  textWhite20: {
    fontSize: 20,
    color: '#fff',
    margin: 5
  },
  textWhite24: {
    fontSize: 24,
    color: '#fff',
    margin: 5
  },
  textWhite30: {
    fontSize: 30,
    color: '#fff',
    margin: 5
  },
  textWhiteBold16: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    margin: 5
  },
  textWhiteBold20: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    margin: 5
  },
  textWhiteBold24: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    margin: 5
  },
  textWhiteBold30: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    margin: 5
  },
  textBlack16: {
    fontSize: 16,
    color: '#000',
    margin: 5
  },
  textBlack20: {
    fontSize: 20,
    color: '#000',
    margin: 5
  },
  textBlack24: {
    fontSize: 24,
    color: '#000',
    margin: 5
  },
  textBlackBold16: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    margin: 5
  },
  textBlackBold20: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    margin: 5
  },
  textBlackBold24: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    margin: 5
  },
  textBlackBold30: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    margin: 5
  },
  textInput20: {
    backgroundColor: '#C2C2C2',
    fontSize: 20,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    color: '#fff'
  },
  btnGreen: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width / 1.25,
    borderRadius: 25,
    marginTop: 30,
    backgroundColor: '#21c45a',
  },
  btnGrey: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width / 1.25,
    borderRadius: 25,
    marginTop: 30,
    backgroundColor: '#A9A9A9'
  },
  btnBorderWhite: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    width: Dimensions.get('window').width / 1.25,
    borderRadius: 25,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: '#000',
    borderColor: '#fff'
  },
  padding5: {
    padding: 5,
  }
})