import React, { Component } from 'react';
import { useDispatch } from 'react-redux';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.timeCount, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  declOfNum = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  };

  timeCount = () => {
    const targetDate = new Date('Dec 31 2023 23:59:59'); // Замените эту строку на вашу желаемую целевую дату
    const now = new Date();
    const leftUntil = targetDate - now;

    const days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    const hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    const seconds = Math.floor(leftUntil / 1000) % 60;

    this.setState({
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    });
  };

  render() {
    return (
      <div className="time-count">
        <h2 className="time-count__title">количество дней</h2>
        <div className="time-count__content">
          <div className="time-count__item time-count__days">
            <div className="time-count__val">{this.state.days}</div>
            <span className="time-count__text">{this.declOfNum(parseInt(this.state.days), ['день', 'дня', 'дней'])}</span>
          </div>
          <div className="time-count__separator">:</div>
          <div className="time-count__item time-count__hours">
            <div className="time-count__val">{this.state.hours}</div>
            <span className="time-count__text">{this.declOfNum(parseInt(this.state.hours), ['час', 'часа', 'часов'])}</span>
          </div>
          <div className="time-count__separator">:</div>
          <div className="time-count__item time-count__minutes">
            <div className="time-count__val">{this.state.minutes}</div>
            <span className="time-count__text">{this.declOfNum(parseInt(this.state.minutes), ['минута', 'минуты', 'минут'])}</span>
          </div>
          <div className="time-count__separator">:</div>
          <div className="time-count__item time-count__seconds">
            <div className="time-count__val">{this.state.seconds}</div>
            <span className="time-count__text">{this.declOfNum(parseInt(this.state.seconds), ['секунда', 'секунды', 'секунд'])}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
