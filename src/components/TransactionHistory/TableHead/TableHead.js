import { Row, Header } from './TableHead.styled';

export const TableHead = () => {
  return (
    <thead>
      <Row>
        <Header>Type</Header>
        <Header>Amount</Header>
        <Header>Currency</Header>
      </Row>
    </thead>
  );
};
