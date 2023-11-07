import styled from 'styled-components';

export const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 370px;
    margin: 10px auto 0 auto;
    border: 1px solid black;
    border-radius: 5px;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin-top: 15px;
`;




export const UserName = styled.b`
    margin-top: 30px;
    font-size: 24px;
    font-weight: 900;
`;
export const StatsList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    list-style: none;
    padding: 0;

`;
export const StatsItem = styled.li`
    flex-basis: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #13e0d8;
    border-radius: 5px;
    height: 78px;
    border: 1px solid grey;



`;