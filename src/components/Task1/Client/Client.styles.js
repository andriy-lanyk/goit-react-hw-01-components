import styled from "@emotion/styled";

const ClientLayout = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  align-items: center;
  padding: 20px 0;
`;

const ClientImg = styled.img`
  display: block;
  border-radius: 50%;
  width: 50%;
  height: 60%;
  margin-bottom: 20px;
  background-color: #21212140;
`;

const ClientName = styled.p`
  font-size: 26px;
  font-weight: 800;
  margin: 0 0 10px;
`;

const ClientTag = styled.p`
  margin: 0 0 10px;
  color: #a0a0a0;
`;

const ClientLocation = styled.p`
  margin: 0;
  color: #a0a0a0;
`;

export { ClientLayout, ClientImg, ClientName, ClientTag, ClientLocation };
