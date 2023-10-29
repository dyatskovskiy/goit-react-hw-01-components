import { Table } from './TransactionHistory.styled';
import { TableRow } from './TableRow/TableRow';
import { TableHead } from './TableHead/TableHead';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead />

      <tbody>
        {items.map(transaction => (
          <TableRow
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
            key={transaction.id}
          />
        ))}
      </tbody>
    </Table>
  );
};
