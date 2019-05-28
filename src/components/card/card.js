import React, { Component } from "react";
import "./card.scss";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hidden: true
    }
  }
   handleClick = () => { 
    const currentState = this.state.hidden;
    this.setState({hidden: !currentState})
}
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <img src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91/poster.jpg?1555596324072" alt="" />
          <div className="header-info">
            <p className="title">
              The Phantom of the Opera <span class="type">Tickets</span>
            </p>
            <span className="price">$29.00-$215.00</span>
            <span className="info">Learn More</span>
          </div>
        </div>
        <div className="card-body">
          <div className="card-item">
            <div className="card-date">
              <div className="day">Tue</div>
              <div className="date">Sept 22</div>
            </div>
            <div className="card-info">
              <span className="btn primary-blue">7:00pm</span>
              <span className="btn primary-grey">8:00pm</span>
            </div>
          </div>
          <div className="card-item">
            <div className="card-date">
              <div className="day">Wed</div>
              <div className="date">Sept 23</div>
            </div>
            <div className="card-info">
              <span className="sold-out">8:00pm</span>
            </div>
          </div>
          <div className="card-item">
            <div className="card-date">
              <div className="day">Thu</div>
              <div className="date">Sept 24</div>
            </div>
            <div className="card-info">
              <span className="btn primary-blue">2:00pm</span>
              <span className="btn primary-grey">8:00pm</span>
            </div>
          </div>
          <div className={ this.state.hidden ? 'card-item hidden': 'card-item' }>
            <div className="card-date">
              <div className="day">Fri</div>
              <div className="date">Sept 25</div>
            </div>
            <div className="card-info">
              <span className="btn primary-blue">2:00pm</span>
              <span className="btn primary-grey">8:00pm</span>
            </div>
          </div>
          <div className={ this.state.hidden ? 'card-item hidden': 'card-item' }>
            <div className="card-date">
              <div className="day">Sat</div>
              <div className="date">Sept 26</div>
            </div>
            <div className="card-info">
              <span className="btn primary-blue">2:00pm</span>
              <span className="btn primary-grey">8:00pm</span>
            </div>
          </div>
          <div className={ this.state.hidden ? 'card-item hidden': 'card-item' }>
            <div className="card-date">
              <div className="day">Sun</div>
              <div className="date">Sept 27</div>
            </div>
            <div className="card-info">
              <span className="btn primary-blue">2:00pm</span>
              <span className="btn primary-grey">8:00pm</span>
            </div>
          </div>
        </div>
        <div className="card-footer">
            {this.state.hidden ? <span className="more" onClick={this.handleClick}>More Performances (3)</span> : <p className="more" onClick={this.handleClick}>View Calendar <span><img src="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91/chevron.svg?1555596324053" alt=""/></span></p>  }
        </div>
      </div>
    );
  }
}
