import styled from "styled-components"

export const HomeWrapper = styled.div `
  padding-top: 30px;
  width: 960px;
  margin: 56px auto 0;
  overflow: hidden;
`;
export const HomeLeft = styled.div `
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
export const HomeRight = styled.div `
  float: right;
  width: 280px;
  height: 300px;
`;
export const TopicWrapper = styled.div `
  overflow: hidden;
  margin-left: -18px;
  margin-bottom: 10px;
  border-bottom: 1px solid #f0f0f0; 
`;
export const TopicItem = styled.div `
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
export const ListItem = styled.div `
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
export const ListContent = styled.div `
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
export const ListContentBottom = styled.div `
  overflow: hidden;
  margin-top: 5px;
`;
export const BottomBox = styled.div `
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
export const RecommendWrapper = styled.div `

`;
export const RecommendItem = styled.div `
  margin-bottom: 6px;
  width: 280px;
  height: 50px;
  background-image: url(${(props)=>props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;
export const DownloadWrapper = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  margin: 15px 0 30px;
  padding-left: 22px;
  width: 100%;
  height: 82px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background: #fff;
  box-sizing: border-box;
  .small-qrcode{
    margin-right: 10px;
    width: 60px;
    height: 60px;
  }
`;
export const DownloadInfo = styled.div `
  cursor: pointer;
  h3{
    font-size: 15px;
    color: #333;
  }
  p{
    margin-top: 10px;
    font-size: 13px;
    color: #999;
  }
`;
export const DownloadPopup = styled.div `
  position: absolute;
  bottom: 90px;
  left: 50%;
  width: 184px;
  height: 184px;
  transform: translateX(-50%);
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
  background: #fff;
  img{
    display: block;
    margin: 12px auto 0;
    width: 160px;
    height: 160px;
  }
  .arrow{
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #fff;
  }
  &.fade-enter{
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  &.fade-enter-active{
    opacity: 1;
  }
  &.fade-exit{
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }
  &.fade-exit-active{
    opacity: 0;
  }
`;
export const LoadMoreBtn = styled.div `
  margin: 20px 0;
  padding: 10px 0;
  width: 100%;
  font-size: 15px;
  color: #fff;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  cursor: pointer;
`;
export const BackTop = styled.div `
  position: fixed;
  right: 60px;
  bottom: 60px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
`;
export const WriterWrapper = styled.div `
  .title{
    margin-bottom: 20px;
    font-size: 14px;
    color: #969696;
  }
  .list-item{
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    .avatar{
      margin-right: 10px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid #ddd;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .content{
      flex: 1;
      .name{
        margin-bottom: 8px;
        font-size: 14px;
        color: #333;
      }
      .desc{
        font-size: 12px;
        color: #969696;
      }
    }
    .follow-btn{
      position: relative;
      font-size: 13px;
      color: #42c02e;
      &:before{
        position: absolute;
        left: -18px;
        top: 50%;
        transform: translateY(-50%);
        width: 12px;
        height: 2px;
        background: #42c02e;
        content: '';
      }
      &:after{
        position: absolute;
        left: -18px;
        top: 50%;
        transform: translateY(-50%) rotate(90deg);
        transform-origin: center center;
        width: 12px;
        height: 2px;
        background: #42c02e;
        content: '';
      }
    }
  }
`;