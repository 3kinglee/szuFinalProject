import React, {Component} from 'react';

export default class News extends Component {
  constructor(props){
    super(props)
    const {load} = this.props
    this.load = () => load()
    this.state = {
      item: ''
    }
  }
  componentDidMount(){
    console.log('begin')
    window.addEventListener('scroll', this.listScoll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.listScoll)
  }
  listScoll = (e) => {
    let {isEnd,isFeching} = this.props

    if(!isEnd && !isFeching){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let offsetHeight = document.documentElement.offsetHeight || document.body.offsetHeight
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if(scrollTop+50 >= scrollHeight - offsetHeight){
        this.load()
      }
    }
    
  }

  render() {
    const newsItem = this.props.newsList.map((item) => {
      return (
      <li key={item.id}>  
        <a href="/#">
          <div className="newsTitle">
            <h5>{item.title}</h5>
            <p className='detail'>
              <span>{item.time}</span>
              <span className="readNum">{item.read}</span>
            </p>
          </div>
          <div className='newsImg'>
            <img src={item.imgSrc} alt=""/>
          </div>
        </a> 
      </li>
    )})
    return(
      <ul id='newsList'>
        {newsItem}
      </ul>
    )  
  }
}