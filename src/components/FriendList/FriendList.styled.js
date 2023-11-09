import styled from 'styled-components';

const getColorStatus = props => props.children ? 'green' : 'red';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    max-width: 300px;    
    box-shadow: 0 10px 10px rgb(95, 158, 160);
    padding: 20px;
    gap: 20px;
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    border: 2px solid #B0E0E6;
    border-radius: 5px;
    padding: 5px;
    gap: 25px;
    background-color: #F0FFFF;
`;

export const StatusSpan = styled.span`
    background-color: ${getColorStatus};
    border-radius: 100%;
    width: 16px;
    height: 16px;
`;

export const Avatar = styled.img`
    border-radius: 20px;
`;

export const Text = styled.p`
    font-size: 25px;
    font-weight: 500;
`;

