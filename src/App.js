import React, { Component } from 'react';
import axios from 'axios';

const QuoteBox = ({ quote, author }) => {
  console.log('QuoteBox runs');
  return (
    <React.Fragment>
      <div id='text'><p>{quote}</p></div>
      <div id='author'><h5>{author}</h5></div>
    </React.Fragment>    
  );
}

const Button = ({ onClick, title}) => {
  console.log('Button runs');
  return (
    <button
      className='button'
      id='new-quote'
      onClick={onClick}>
        {title}
    </button>
  );
}

const TwitterShare = ({ quote, author }) => {
  console.log('TwitterShare runs');
  return(
    <React.Fragment>
      <a
        href={`https://twitter.com/intent/tweet?text="${quote}"   ${author}`}
        target='_blank'
        title='Post this quote on twitter!'
        id='tweet-quote'>
          <i className='fab fa-twitter twitter-icon'></i>
      </a>
    </React.Fragment>
  );
}

class RandomQuote extends Component {
  constructor(props) {
    super(props);
    console.log('constructor runs');
    this.state = {
      quote: '',
      author: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount runs');
    this.getQuote();
  }

  getQuote() {
    console.log('getQuote runs');
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    axios.get(url)
      .then(response => {
        //console.log(response);
        let data = response.data.quotes;
        //console.log(data);
        let quoteNumber = Math.floor(Math.random() * data.length);
        //console.log(quoteNumber);
        let randomQuote = data[quoteNumber];
        console.log(randomQuote);

        this.setState({
          quote: randomQuote['quote'],
          author: randomQuote['author']
        });
      });
  }

  getNewQuote = () => {
    console.log('getNewQuote runs');
    this.getQuote();
  }

  render() {
    console.log('render method runs');
    const quote = this.state.quote;
    const author = this.state.author;
    return (
      <div id='wrapper'>
        <h1 className='title'>Random Quote Machine</h1>
        <div id='quote-box'>
          <QuoteBox quote={quote} author={author} />
          <div id='buttons'>
            <TwitterShare quote={quote} author={author} />
            <Button id='new-quote' title='New Quote' onClick={this.getNewQuote} />
          </div>
        </div>
      </div>
    );
  }
}

export default RandomQuote;