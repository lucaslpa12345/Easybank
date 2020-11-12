import styled from 'styled-components';
const whyEasyBanKBGcolor = 'hsl(220, 16%, 96%)';
const PrimaryTextColor = 'hsl(233, 26%, 24%)';
const SecondTextColor = 'hsl(233, 8%, 62%)';
export const WhyEasyBank = styled.div`   
      height: auto;
      background-color: ${whyEasyBanKBGcolor};
      padding: 20px; 
      
`;


export const ComplementsInfo = styled.div`
    display: flex;
    height: 200px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;


export const Title = styled.strong` 
color: ${PrimaryTextColor};
font-size: 30px;
    font-family: initial;
    font-weight: 100;
`;

export const Description = styled.p`
text-align: center;
color: ${SecondTextColor};
`;
