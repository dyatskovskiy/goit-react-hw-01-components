import { Row, Type, Amount, Currency } from './TableRow.styled';

export const TableRow = ({ type, amount, currency }) => {
  return (
    <Row>
      <Type>{type}</Type>
      <Amount>{amount}</Amount>
      <Currency>{currency}</Currency>
    </Row>
  );
};
