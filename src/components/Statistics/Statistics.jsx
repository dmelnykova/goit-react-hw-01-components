import {
    Wrapper,
    Title,
    StatList,
    StatItem,
    Span,
    Accent,
} from './Statistics.styled';

export const Statistics = ({ title, data }) => {
    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
            <StatList>
                {data.map(item => (
                    <StatItem key={item.id}>
                        <Span>{item.label}</Span>
                        <Accent>{item.percentage}%</Accent>
                    </StatItem>
                ))}
            </StatList>
        </Wrapper>
    );
};