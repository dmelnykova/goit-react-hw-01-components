import styled from 'styled-components';

export const ProfileContainer = styled.div`
    background-color: #F0FFF0;
    max-width: 750px;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 50px;
`;

export const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F5FFFA;
    width: 410px;
    height: 418px;
    margin: 10px auto 0 auto;
    box-shadow: 0 10px 10px rgb(95, 158, 160);
`;

export const Avatar = styled.img`
    border-radius: 100%;
    margin-top: 30px;
`;

export const UserName = styled.b`
    margin-top: 25px;
    font-size: 24px;
`;

export const UserText = styled.p`
    margin-top: 10px;
    margin-bottom: 15px;
    color: #808080;
    font-size: 18px;
`;


export const StatsList = styled.ul`
    display: flex;
    width: 100%;
    padding: 0;
    margin-top: 54px;

`;
export const StatsItem = styled.li`
    flex-basis: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #87CEFA;
    height: 78px;
    border: 1px solid #E0FFFF;
    font-size: 20px;
`;

export const StatsSpan = styled.span`
    font-weight: bold;
`;