import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { COLORS } from "./Color";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blackBk,
  },
  container20: {
    flex: 1,
    backgroundColor: COLORS.blackBk,
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
    color: COLORS.white,
    margin: 5
  },
  textWhite20: {
    fontSize: 20,
    color: COLORS.white,
    margin: 5
  },
  textWhite24: {
    fontSize: 24,
    color: COLORS.white,
    margin: 5
  },
  textWhite30: {
    fontSize: 30,
    color: COLORS.white,
    margin: 5
  },
  textWhiteBold16: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: 'bold',
    margin: 5
  },
  textWhiteBold20: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: 'bold',
    margin: 5
  },
  textWhiteBold24: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: 'bold',
    margin: 5
  },
  textWhiteBold30: {
    fontSize: 30,
    color: COLORS.white,
    fontWeight: 'bold',
    margin: 5
  },
  textGray16: {
    fontSize: 16,
    color: 'gray',
    margin: 5
  },
  textWhite20: {
    fontSize: 20,
    color: COLORS.white,
    margin: 5
  },
  textWhite24: {
    fontSize: 24,
    color: COLORS.white,
    margin: 5
  },
  textWhite30: {
    fontSize: 30,
    color: COLORS.white,
    margin: 5
  },
  textWhiteBold16: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: 'bold',
    margin: 5
  },
  textWhiteBold20: {
    fontSize: 20,
    color: COLORS.white,
    fontWeight: 'bold',
    margin: 5
  },
  textWhiteBold24: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: 'bold',
    margin: 5
  },
  textWhiteBold30: {
    fontSize: 30,
    color: COLORS.white,
    fontWeight: 'bold',
    margin: 5
  },
  textBlack16: {
    fontSize: 16,
    color: COLORS.black,
    margin: 5
  },
  textBlack20: {
    fontSize: 20,
    color: COLORS.black,
    margin: 5
  },
  textBlack24: {
    fontSize: 24,
    color: COLORS.black,
    margin: 5
  },
  textBlackBold16: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
    margin: 5
  },
  textBlackBold20: {
    fontSize: 20,
    color: COLORS.black,
    fontWeight: 'bold',
    margin: 5
  },
  textBlackBold24: {
    fontSize: 24,
    color: COLORS.black,
    fontWeight: 'bold',
    margin: 5
  },
  textBlackBold30: {
    fontSize: 30,
    color: COLORS.black,
    fontWeight: 'bold',
    margin: 5
  },
  textInputGray20: {
    backgroundColor: COLORS.lightGray,
    fontSize: 20,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    color: COLORS.white
  },
  textInputWhite20: {
    backgroundColor: COLORS.white,
    fontSize: 20,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    color: COLORS.white
  },
  btnGreen: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width / 1.25,
    borderRadius: 25,
    marginTop: 30,
    backgroundColor: COLORS.green,
  },
  btnGrey: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    width: Dimensions.get('window').width / 2.25,
    borderRadius: 25,
    marginTop: 30,
    backgroundColor: COLORS.gray
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
    backgroundColor: COLORS.black,
    borderColor: COLORS.white
  },
  padding5: {
    padding: 5,
  },
  padding8: {
    padding: 8,
  },
  tabContainer: {
    flex: 1, 
    flexDirection: 'row',
    width: '100%', 
    justifyContent: 'space-around', 
    position: 'absolute', 
    bottom: 0, 
    alignSelf: 'center',
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%'
  },
  shadowWhite: {
    backgroundColor: COLORS.blackBk,
    borderRadius: 10,
    padding: 10,
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 10,
    shadowOpacity: 1.0,
    elevation: 20
  }
})