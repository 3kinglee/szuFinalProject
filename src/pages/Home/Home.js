import React, {Component} from 'react';

import Swinger from 'components/Swinger/Swinger';
import News from 'components/News/News';
import ListLoading from 'components/Loading/ListLoading'

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			isLoading: false,
			isEnd: false,
			isFeching: false,
			newsList: []
		}
	}

	componentDidMount(){
		let newsList = [{
			id: 1,
			title: '彩虹大声集锦系列：最棒的穿墙点彩虹大声集锦系列集锦系列集锦系列集锦系列集锦系列',
			time: '14分钟前',
			read: 2356,
			link: '#',
			imgSrc: './static/img/201802090950372900.png'
		},{
			id: 2,
			title: '彩虹大声集锦系列：最棒的穿墙点彩虹大声集锦系列集锦系列集锦系列集锦系列集锦系列',
			time: '14分钟前',
			read: 2356,
			link: '#',
			imgSrc: './static/img/201802090950372900.png'
		},{
			id: 3,
			title: '彩虹大声集锦系列：最棒的穿墙点彩虹大声集锦系列集锦系列集锦系列集锦系列集锦系列',
			time: '14分钟前',
			read: 2356,
			link: '#',
			imgSrc: './static/img/201802090950372900.png'
		},{
			id: 4,
			title: '彩虹大声集锦系列：最棒的穿墙点彩虹大声集锦系列集锦系列集锦系列集锦系列集锦系列',
			time: '14分钟前',
			read: 2356,
			link: '#',
			imgSrc: './static/img/201802090950372900.png'
		},{
			id: 5,
			title: '彩虹大声集锦系列：最棒的穿墙点彩虹大声集锦系列集锦系列集锦系列集锦系列集锦系列',
			time: '14分钟前',
			read: 2356,
			link: '#',
			imgSrc: './static/img/201802090950372900.png'
		},{
			id: 6,
			title: '彩虹大声集锦系列：最棒的穿墙点彩虹大声集锦系列集锦系列集锦系列集锦系列集锦系列',
			time: '14分钟前',
			read: 2356,
			link: '#',
			imgSrc: './static/img/201802090950372900.png'
		},{
			id: 7,
			title: '彩虹大声集锦系列：最棒的穿墙点彩虹大声集锦系列集锦系列集锦系列集锦系列集锦系列',
			time: '14分钟前',
			read: 2356,
			link: '#',
			imgSrc: './static/img/201802090950372900.png'
		}]
		this.setState({
			newsList
		})
	}
	load = () => {
		console.log('loading...')
		this.setState({isFeching: true})
		let newsList = [{
			id: 4,
			title: '彩虹大声集锦系列：最棒的穿墙点彩虹大声集锦系列集锦系列集锦系列集锦系列集锦系列',
			time: '14分钟前',
			read: 2356,
			link: '#',
			imgSrc: './static/img/201802090950372900.png'
		},{
			id: 5,
			title: '彩虹大声集锦系列：最棒的穿墙点彩虹大声集锦系列集锦系列集锦系列集锦系列集锦系列',
			time: '14分钟前',
			read: 2356,
			link: '#',
			imgSrc: './static/img/201802090950372900.png'
		}]
		newsList = this.state.newsList.concat(newsList)
		this.setState({
			newsList,
			isEnd: true,
			isFeching: false
		})
	}

	render() {
		let swing = [
			{link: 'http://www.baidu.com', imgSrc: './static/img/201802090950372900.png'},
			{link: 'http://www.baidu.com', imgSrc: './static/img/201802090950372900(2).jpg'}
		]
		let listLoading
		if(this.state.isFeching){
			listLoading = <ListLoading isEnd={this.state.isEnd} />
		}else{
			listLoading = null
		}
		return (
			<div className="home">
					<Swinger swingItem={swing}/>
					<News 
						newsList={this.state.newsList}
						load = {this.load}
						isEnd = {this.state.isEnd}
						isFeching = {this.state.isFeching}
					/>
					{listLoading}
			</div>       
		)
	}
}