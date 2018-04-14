import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div className="foot-nav">
                <ul>
                    <li><Link to="/"><img src="../static/svg/msg_active.svg" alt=""/>资讯</Link></li>
                    <li><Link to="/page1"><img src="../static/svg/book.svg" alt=""/>订场</Link></li>
                    <li><Link to="/counter"><img src="../static/svg/game.svg" alt=""/>赛事</Link></li>
                    <li><Link to="/userinfo"><img src="../static/svg/user.svg" alt=""/>我</Link></li>
                </ul>
            </div>
        )
    }
}