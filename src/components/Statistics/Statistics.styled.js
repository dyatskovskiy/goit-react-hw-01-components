import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/color-randomizer';

export const StatisticsWrap = styled.section`
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
`;

export const Title = styled.h2`
  color: #454a4f;
  font-weight: 500;
  text-align: center;
  margin-bottom: 15px;
`;
export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  flex-basis: calc(300px / 5);
  background-color: ${() => getRandomHexColor};
`;

export const Label = styled.span`
  padding: 10px;
  color: white;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);
`;

export const Persentage = styled.span`
  font-size: 25px;
  padding: 15px;
  color: white;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.8);
`;
