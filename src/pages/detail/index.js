import React,{ Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { actionCreatos } from "./store"
import { DetailWrapper,DetailMiddle,Header,Content } from "./style"

class Detail extends Component{
  render(){
    const { detail } = this.props
    return (
      <DetailWrapper>
        <DetailMiddle>
          {
            detail?(
              <div>
                <Header>{detail.get("title")}</Header>
                <Content dangerouslySetInnerHTML={{ __html: detail.get("content") }}></Content>
              </div>
            ):null
          }
        </DetailMiddle>
      </DetailWrapper>
    )
  }

  componentDidMount(){
    /**
     *  /detail/:id
     *  const id = this.props.match.params.id
     */
    window.scrollTo(0,0)
    const { id } = this.getParams(this.props.location.search)
    this.props.featchData(id)
  }

  getParams(query){
    if(query && typeof query ==='string'){
      let temp = query.split('?')[1].split('&')
      let key_value = {}
      temp.forEach(item=>{
        let temp2 = item.split('=')
        key_value[temp2[0]] = temp2[1]
      })
      return key_value
    }else{
      return null
    }
  }
}

const mapState = (state) => ({
  detail: state.getIn(["detail","detail"])
})

const mapDispatch = (dispatch) => ({
  featchData(id){
    dispatch(actionCreatos.fetchData(id))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))