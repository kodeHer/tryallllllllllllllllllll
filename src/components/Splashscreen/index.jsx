import './styles.scss';

import { h, Component } from 'preact';

import Emitter from 'core/Emitter';

import {
  SPLASHSCREEN_HIDE
} from 'config/messages';

class Splashscreen extends Component {
  constructor() {
    super();

  }

  componentWillMount() {
    this.bind();
  }

  componentDidMount() {

    this.addListerners();
    this.generateTimelineMax();

  }

  componentWillUnmount() {

    this.removeListerners();
  }

  bind() {
  }

  addListerners() {
  }

  removeListerners() {
  }

  generateTimelineMax() {

    this.tl = new TimelineMax({
      onComplete: ()=> {
        this.base.classList.add('splashscreen--is-hidden');
      }
    });

    this.tl
      .addCallback(()=>{
        Emitter.emit(SPLASHSCREEN_HIDE);
      }, 0.9)
      .to(this.base, 1, {opacity: 0, ease: Power2.easeOut});
  }


  render(props, state) {

    return (
      <div class="splashscreen"></div>
    );
  }

}

export default Splashscreen;
