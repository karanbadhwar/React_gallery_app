import React, { Component } from "react";
import Photo from "./Photo";
import SearchForm from "./SearchForm";
import axios from "axios";
import apiKey from "../config";
import Navigation from "./Navigation";
import Gifnotfound from "./Gifnotfound";
import Spinner from "./Spinner";
// import { useParams } from "react-router-dom";

export default class Gallery extends Component {
  state = {
    search: 'Random',
    data: [],
    loading: true,
  };
  
  
  handleSearch = async(search) =>{
    let userInput = search
    let api = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userInput}&per_page=24&format=json&nojsoncallback=1`;
    this.setState({
      loading: true,
    })
    let fetchedData = await axios
      .get(api)
      .then((data) => data.data.photos)
      .catch((err) => console.log(err));
    this.setState({
      search: userInput,
      data: fetchedData.photo,
      loading: false,
    });
    const title = document.querySelector('title');
    title.textContent = `Flickr-Photos/${userInput}`;

  }
  
  async componentDidMount() {
    let api = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=random&per_page=24&format=json&nojsoncallback=1`;
    let fetchedData = await axios
      .get(api)
      .then((data) => data.data.photos)
      .catch((err) => console.log(err));
    this.setState({
      data: fetchedData.photo,
      loading: false,
    });
    
  }

  render() {
    let display;
    if(this.state.data.length > 0){
      display = <div className="photo-container">       
      {<h2>{this.state.search? this.state.search: 'Random'} Gifs</h2>}
        <div className="gallery">
          <ul>
            {this.state.data.map((photo) => {
              return (
                <Photo
                  serverId={photo.server}
                  secretId={photo.secret}
                  id={photo.id}
                  key={photo.id}
                  title={photo.title}
                  suffix={"b"}
                />
              );
            })}
          </ul>
        </div>
      </div>
    }else {
      display = <Gifnotfound />
    }
    return (
      <>
        <SearchForm reRoute={this.props.reRoute} handleSearch={this.handleSearch}/>
        <Navigation handleSearch={this.handleSearch}/>
        {this.state.loading && <Spinner />}
        {!this.state.loading && display}
      </>
    );
  }
}
