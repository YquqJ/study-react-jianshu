import React,{ Component } from "react"
// import { CSSTransition } from "react-transition-group"
import { DownloadWrapper,DownloadInfo,DownloadPopup } from "../../style"

const QRcode = "//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"

class Download extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }
  render(){
    return(
      <DownloadWrapper
        onMouseEnter={()=>{this.setState({show:true})}}
        onMouseLeave={()=>{this.setState({show:false})}}
      >
        <img className="small-qrcode" src={QRcode} alt="" />
        <DownloadInfo>
          <h3>下载简书手机APP</h3>
          <p>随时随地发现和创作内容</p>
        </DownloadInfo>
        {
          this.state.show && (
            <DownloadPopup>
              <img src={QRcode} alt="" />
              <div className="arrow" />
            </DownloadPopup>
          )
        }
        {/* <CSSTransition
          in={this.state.show}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <DownloadPopup>
            <img src={QRcode} alt="" />
            <div className="arrow" />
          </DownloadPopup>
        </CSSTransition> */}
      </DownloadWrapper>
    )
  }
}

export default Download