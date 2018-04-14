import React, {Component} from 'react';

export default class ListLoading extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    let tips = null
    if(this.props.isEnd){ 
      tips = "没有更多了哦w(ﾟДﾟ)w"
    }else{
      tips = "正在加载中╭(′▽`)╭(′▽`)╯"
    }
    return(
      <div className='loadTips'> 
        {tips}
      </div>
    )
  }



}