import React, {Component} from 'react';

export default class Swinger extends Component {
	constructor(props) {
		super(props);
		this.state={
			activeSwipe: 1,
			moveDistance: 0,
			startX: 0,
			width: 0,
			tranName: 'noTran'
		}
	}
	componentDidMount(){
		let screenWidth = document.body.scrollWidth 
		this.setState({
			width: screenWidth
		})
		this.animateId = setInterval(()=>this.nextActive(), 3000)
	}
	componentWillUnMount(){
		clearInterval(this.animateId)
	}

	touchStart = (e) => {
		clearInterval(this.animateId)
		let activeSwipe = this.state.activeSwipe
		if(activeSwipe == 0) {activeSwipe = 2}
		if(activeSwipe == 3) {activeSwipe = 1}
		this.setState({
			startX: e.touches[0].pageX,
			tranName: 'noTran',
			activeSwipe
		})
	}

	touchMove = (e) => {
		let distance = e.touches[0].pageX - this.state.startX
		this.setState({
			moveDistance: distance
		})
	}

	touchEnd = (e) => {
		let activeIndex = this.state.activeSwipe
		let dx = e.changedTouches[0].pageX - this.state.startX
		if(Math.abs(dx) > this.state.width/3) {
			activeIndex = dx > 0 ? activeIndex - 1 : activeIndex + 1
		}
		this.setState({
			activeSwipe: activeIndex,
			moveDistance: 0,
			tranName: 'tran'
		})
		this.animateId = setInterval(()=>this.nextActive(), 3000)
	}

	/**轮播动画 */
	nextActive() {
		let activeIndex = this.state.activeSwipe
		activeIndex <= 2 ?
			this.setState({
				tranName: 'tran',
				activeSwipe: activeIndex +1
			})
			: this.setState({
				tranName: 'noTran',
				activeSwipe: 1
			})
	}
	/**按钮 */

	render() {
		let swing = this.props.swingItem.map((v, i) => {
			return <Swing swingItem={v} key={i}/>
		})
		let swingLength = this.props.swingItem.length
		let activeBtn = this.state.activeSwipe
		if(activeBtn == 0) {activeBtn = 2}
		if(activeBtn == 3) {activeBtn = 1}
		let btnList = Array(2).fill(0).map((v,i) => {return i+1 == activeBtn? true : false})
		return(
			<div className="swinger-over">
				<div onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={this.touchEnd} id="swinger" className={this.state.tranName} style={{width: 4*this.state.width, transform: 'translate3d('+(-this.state.activeSwipe*this.state.width+this.state.moveDistance)+'px,0px,0px)' }}>
					<Swing swingItem={this.props.swingItem[swingLength-1]} key={-1}/>
					{swing}
					<Swing swingItem={this.props.swingItem[0]} key={swingLength}/>
				</div>
				<SwingButton btnList={btnList} />
			</div>
		)
	}
}


function Swing(props) {
	return (
		<div>
			<a href={props.swingItem.link}>
				<img 
					src={props.swingItem.imgSrc} 
					alt="展示图"
				/>
			</a>
		</div>	
	)
}

function SwingButton(props) {
	let btnList = props.btnList.map((v,i) => {
		return v ? 
			<div className='btn-item active' key={i}></div>
			:<div className='btn-item' key={i}></div>
	})
	return (
		<div id='btnList'>
			{btnList}
		</div>
	)
}
