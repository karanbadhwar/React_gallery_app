import React from "react";
import Photo from "./Photo";
import SearchForm from "./SearchForm";
import axios from "axios";
import apiKey from "../config";
import Navigation from "./Navigation";
import Gifnotfound from "./Gifnotfound";
import Spinner from "./Spinner";
import { useParams, useNavigate } from "react-router-dom";

export default function Gallery(props) {
  const navigate = useNavigate();
  let {usersearch} = useParams();
  const handleSearch = async(search) =>{
    let userInput = search
    let api = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userInput}&per_page=24&format=json&nojsoncallback=1`;
    props.handleLoading(true);
    let fetchedData = await axios
      .get(api)
      .then((data) => data.data.photos)
      .catch((err) => console.log(err));
    props.handleSearch(userInput);
    props.handleData(fetchedData.photo);
    props.handleLoading(false);
    const title = document.querySelector('title');
    title.textContent = `Flickr-Photos/${userInput}`;

  }
  
  const handleReRoute = (value) =>{
    navigate(`/search/${value}`, {replace: true});
  }

    let display;
    if(props.data.length > 0){
      display = <div className="photo-container">       
      {<h2><span className="titleTag">{props.search? props.search: 'Random'} Gifs</span></h2>}
        <div className="gallery">
          <ul>
            {props.data.map((photo) => {
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
        <SearchForm reRoute={handleReRoute} handleSearch={handleSearch}/>
        <Navigation handleSearch={handleSearch}/>
        {props.loading && <Spinner />}
        {!props.loading && display}
      </>
    );
  }
