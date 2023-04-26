import Sumar from './sumar';
import React, { Component, useState } from 'react';
import './App.css';

class ProductCategoryRow extends Component {
  render(props) {
    const { category } = this.props;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    )
  }
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zlava: 0
    }
  }

  render(props) {
    let { products, filterText, inStockOnly } = this.props;
    const rows = [];
    let lastCategory = null;
    let suma = 0;
    let filteredProducts = []

    products.forEach((product) => {
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}/>
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}

        />
      );
      suma += product.price - product.price * this.state.zlava;
      lastCategory = product.category;
      filteredProducts.push(product);
    });

    return (
      <>
        <table>
          <thead>
          <tr>
            <th className="hover:font-light bg-slate-400">Name</th>
            <th className='bg-amber-300 rounded-tl-2xl rounded-br-2xl p-1 hover:bg-amber-700'>Price</th>
          </tr>
          </thead>
          <tbody>{rows}

          </tbody>
        </table>
        <div className="hover:font-bold hover:font-black underline" style={{ color: 'green' }} onClick={() => this.setState({ zlava: this.state.zlava + 0.01 })}>Clik pre zlavu</div>
        <Sumar sum={suma} products={filteredProducts}/>
      </>
    )
  }
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  const [charCount, setCharCount] = useState(0);
  return (
    <form>
      <input type="text" value={filterText} placeholder="Search..."
             onChange={e => {
               onFilterTextChange(e.target.value);
               setCharCount(e.target.value.length)
             }}
      />{charCount}
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
        {' '}
        show product in stock...
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar filterText={filterText}
                 inStockOnly={inStockOnly}
                 onFilterTextChange={setFilterText}
                 onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
    </div>
  );
}

const PRODUCTS = [
  { id: 1, category: "Fruits", price: 1, stocked: true, name: "Apple" },
  { id: 2, category: "Fruits", price: 2, stocked: true, name: "Dragonfruit" },
  { id: 3, category: "Fruits", price: 3, stocked: false, name: "Passionfruit" },
  { id: 4, category: "Vegetables", price: 10, stocked: true, name: "Spinach" },
  { id: 5, category: "Vegetables", price: 20, stocked: false, name: "Pumpkin" },
  { id: 6, category: "Vegetables", price: 30, stocked: true, name: "Peas" }
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS}/>;
}