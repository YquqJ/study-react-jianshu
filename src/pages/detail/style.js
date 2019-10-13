import styled from "styled-components"

export const DetailWrapper = styled.div`
  margin-top: 56px;
  padding-top: 10px;
  background: #f9f9f9;
`;
export const DetailMiddle = styled.div`
  margin: 0 auto;
  padding: 30px;
  width: 700px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
`;
export const Header = styled.h1`
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  color: #404040;
`;
export const Content = styled.div`
  margin: 30px 0;
  img{
    display: block;
    margin: 10px auto;
    width: 580px;
    height: auto;
  }
  p{
    text-indent: 2em;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
  }
`;