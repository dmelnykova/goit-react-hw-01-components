import {
  Table,
  Title,
  Text,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <Title>Type</Title>
                    <Title>Amount</Title>
                    <Title>Currency</Title>
                </tr>
            </thead>

            <tbody>
                {transactions.map(item => {
                    return (
                        <tr key={item.id}>
                            <Text>{item.type}</Text>
                            <Text>{item.amount}</Text>
                            <Text>{item.currency}</Text>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};