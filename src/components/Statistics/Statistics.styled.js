import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #F5F5F5;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 10px 10px rgb(95, 158, 160);
`;

export const Title = styled.h2`
    text-transform: uppercase;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 20px;
    margin-top: 30px;
    font-size: 25px;
    color: #778899;
`;

export const StatList = styled.ul`
    display: flex;
    width: 100%;
    color: white;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: ${getRandomHexColor};
    width: calc(100% / 5);
    height: 55px;
`;

export const Span = styled.span`
    font-size: 15px;
`;

export const Accent = styled.span`
    font-size: 22px;
    margin: auto;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}