import React from 'react';
import { Layout } from 'antd';
import './index.less'
const { Header, Content, Footer } = Layout;

// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <Layout>
//         <Header>
//           <div style={{ color: 'white' }}>王者荣耀资料库</div>
//         </Header>
//         <Content style={{ padding: '0 50px' }}>
//           page index
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>Umi 入门教程 Created by xiaohuoni</Footer>
//       </Layout>
//     );
//   }
// }

// export default ShoppingList
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick = {() => {alert('click');}}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value = {i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game