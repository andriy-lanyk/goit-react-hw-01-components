import styled from "@emotion/styled";

const SectionWrapper = styled.section`
  width: 400px;
  box-shadow: 0 0 4px 6px #21212126;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  margin-bottom: 50px;
`;

const ListStatistic = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  color: white;
`;

const TitleStatistic = styled.h2`
  text-align: center;
  margin: 0;
  padding: 35px 0;
  font-size: 30px;
  letter-spacing: 2px;
  color: #8a7c7c;
  text-transform: uppercase;
`;

export { SectionWrapper, ListStatistic, TitleStatistic };
