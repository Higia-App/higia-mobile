import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { colors } from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  line-height: ${RFValue(48)}px;
  font-family: "Poppins_700Bold";
  color: ${colors.darker};
  text-align: left;
`;

export const ProgressContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.darker};
  margin-top: ${RFValue(50)}px;
`;

export const BarProgress = styled.View`
  display: flex;
  align-items: left;
  justify-content: center;
  color: ${colors.darker};
  margin-top: ${RFValue(40)}px;
`;

export const ContainBar = styled.View`
  height: ${RFValue(32)}px;
  background-color: ${colors.light};
  border-radius: ${RFValue(16)}px;
  overflow: hidden;
`;

export const Phrase = styled.Text`
  font-size: ${RFValue(22)}px;
  line-height: ${RFValue(32)}px;
  font-family: "Poppins_700Bold";
  color: ${colors.darker};
  width: 100%;
  text-align: left;
`;

export const TextWrapper = styled.View`
  width: 90%;
  margin-top: ${RFValue(16)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TaksContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.darker};
  margin-top: ${RFValue(50)}px;
  margin-bottom: ${RFValue(25)}px;
`;

export const StyledProgressBar = styled.View`
  height: 100%;
  width: 40%;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(22)}px;
  margin-bottom: ${RFValue(10)}px;
  margin-top: ${RFValue(15)}px;
  font-family: "Poppins_700Bold";
  color: ${colors.darker};
  text-align: left;
  margin-left: ${RFValue(0)}px;
`;

export const DaysLasts = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(8)}px;
  font-family: "Poppins_500Medium";
  color: ${colors.dark};
  text-align: left;
`;

export const Value = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: "Poppins_700Bold";

`;

export const Label = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: ${RFValue(15)}px;
`;

export const Average = styled.View`
  align-items: center;
  height: ${RFValue(70)}px;
`;

export const Actual = styled.View`
  align-items: center;
  height: ${RFValue(70)}px;
`;

export const Goal = styled.View`
  align-items: center;
  height: ${RFValue(70)}px;
`;

export const WeekBox = styled.View`
  background-color: white;
  padding: ${RFValue(10)}px;
  border-radius: 20px;
  height: ${RFValue(150)}px;
  margin-top: ${RFValue(70)}px;
`;

export const DaysTable = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: ${RFValue(10)}px;
  justify-content: space-around;
`;
export const PlaceBox = styled.View`
  height: ${RFValue(50)}px;
  width: ${RFValue(55)}px;
  border-radius: ${RFValue(10)}px;
  overflow: hidden;
`;

export const DayOne = styled.View`
  display: flex;
  align-items: center;
`;
export const DayTwo = styled.View`
  display: flex;
  align-items: center;
`;
export const DayThree = styled.View`
  display: flex;
  align-items: center;
`;
export const DayFour = styled.View`
  display: flex;
  align-items: center;
`;
export const DayFive = styled.View`
  display: flex;
  align-items: center;
`;
export const ValuePlace = styled.Text`
  color: white;
  font-size: ${RFValue(20)}px;
  font-family: "Poppins_700Bold";
  margin-bottom: ${RFValue(-10)}px;
`;
export const LabelPlace = styled.Text`
  font-family: "Poppins_200ExtraLight";
  text-transform: lowercase;
  color: white;
`;

export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: "Poppins_500Medium";
  color: ${colors.dark};
  width: 100%;
  text-align: center;
  margin-top: ${RFValue(15)}px;
`;

export const CurrentDay = styled.Text`
  font-family: "Poppins_200ExtraLight";
  margin-top: ${RFValue(5)}px;
`;