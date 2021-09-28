import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropsTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class NewsList extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 4,
    category: "general",
  };
  static propsTypes = {
    country: PropsTypes.string,
    pageSize: PropsTypes.number,
    category: PropsTypes.string,
  };
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = { articles: [], page: 1, loading: false,totalarticles:0 };

    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-NewsDaily`;
  }

  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
   
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
   
    this.setState({
      articles: parsedData.articles,
      totalarticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async newsUpdate() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalarticles: parsedData.totalResults,
      loading: false,
    });
  }



  fetchMoredata=async()=>{
    this.setState({page:this.state.page+1})
    this.newsUpdate();
  }
  render() {
    return (
    <div >
        <h1 className="text-center " style={{margin:' 0px',marginTop:'80px'}}>
          NewsDaily- {this.capitalizeFirstLetter(this.props.category)} news
        </h1>
          <InfiniteScroll 
           style={{overflow:'hidden'}}
            dataLength={this.state.articles.length}
            next={this.fetchMoredata}
           
            hasMore={this.state.articles.length!==this.state.totalarticles}
            loader={<Spinner/>}
           
          >
           <div className='container my-3'>
             <div className="row">

            {this.state.articles.map((article) => {
              return (
                <div className="col-md-3" key={article.url}>
                  <NewsItem
                    title={article.title}
                    description={article.description}
                    image={article.urlToImage}
                    newsurl={article.url}
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              );
            })}
         </div>
         </div>
          </InfiniteScroll>
    </div>
    )
          }
        }