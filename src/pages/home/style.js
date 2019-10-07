import styled from "styled-components"

export const HomeWrapper = styled.div`
  padding-top: 30px;
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  .banner-img{
    margin-bottom: 35px;
    width: 100%;
    height: 270px;
    border-radius: 6px;
  }
`;
export const HomeRight = styled.div`
  float: right;
  width: 240px;
  height: 300px;
`;
export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-left: -18px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f0f0f0; 
`;
export const TopicItem = styled.div`
  float: left;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  img{
    display: block;
    float: left;
    margin-right: 10px;
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
`;
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .list-img{
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 4px;
  }
`;
export const ListContent = styled.div`
  float: left;
  width: 460px;
  .title{
    margin:0 0 4px;
    line-height: 1.5;
    font-size: 18px;
    color: #000;
    font-weight: 700;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
  .desc{
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;
export const ListContentBottom = styled.div`
  overflow: hidden;
  margin-top: 5px;
`;
export const BottomBox = styled.div`
  float: left;
  margin-right: 12px;
  font-size: 12px;
  line-height: 20px;
  color: #b4b4b4;
  .iconfont{
    margin-right: 2px;
    vertical-align: top;
  }
  &.writer:hover{
    color: #787878;
    cursor: pointer;
  }
`;