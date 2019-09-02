import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import img0 from './images/0.png';
import { a } from './tree-shaking';
// import '../../common';

if (false) {
  console.log(a());
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import('./test.js').then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    const { Text } = this.state;
    return (
      <div className="search-text">
        <span className="no-font">Sear2ch Text123中文</span>
        {Text ? <Text /> : null}
        Search Te22xt222中文
        <img src={img0} alt="" onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root'),
);
