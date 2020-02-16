import React from 'react';
import './App.css';
import { ListCategories } from './components/categories/ListCategories';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: Math.random(), 
          name: 'HATS',
          imagePath: 'http://nashvilleguru.com/officialwebsite/wp-content/uploads/2018/10/The-NASH-Collection-Nashville-24.jpg'
        },
        {id: Math.random(), 
          name: 'SNEAKERS',
          imagePath: 'http://nashvilleguru.com/officialwebsite/wp-content/uploads/2018/10/The-NASH-Collection-Nashville-24.jpg'
        },
        {id: Math.random(), 
          name: 'SUITS',
          imagePath: 'http://nashvilleguru.com/officialwebsite/wp-content/uploads/2018/10/The-NASH-Collection-Nashville-24.jpg'
        },
        {id: Math.random(), 
          name: 'JACKETS',
          imagePath: 'http://nashvilleguru.com/officialwebsite/wp-content/uploads/2018/10/The-NASH-Collection-Nashville-24.jpg'
        },
        {id: Math.random(), 
          name: 'PHONES',
          imagePath: 'http://nashvilleguru.com/officialwebsite/wp-content/uploads/2018/10/The-NASH-Collection-Nashville-24.jpg'
        }
      ]
    }
  }

  render() {
      return (
        <div className="App">
          <div className='container'>
            <ListCategories categories={this.state.categories} />
          </div>
        </div>
      )
  }
}


export default App;
