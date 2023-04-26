import React from "react";

const sumarStyle = {
  style: {
    color: 'darkGreen',
    fontWeight: 'bold'
  }
};

class Sumar extends React.Component {
  render() {
    const { sum, products } = this.props;
    const handleClick = () => {
      alert('kuk')
    }
    let obsah = (
      <div>
        Sumar {sum} = <SumarDetail products={products}/>
      </div>
    );
    return (
      <div onClick={handleClick} style={sumarStyle}>
        {obsah}
      </div>
    )
  }
}

class SumarDetail extends React.Component {
  render(props) {
    const { products } = this.props;
    const items = products.map((item, i, { length }) => <span key={item.id} style={{ color: 'gray' }}>{item.price}{length - 1 === i ? '' : '+'}</span>);
    return (
      <>
        {items}
      </>
    )
  }
}

export default Sumar;