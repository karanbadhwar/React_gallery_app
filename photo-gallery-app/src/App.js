import { Routes, Route} from 'react-router-dom';
import './App.css';
import Error404 from './components/Error404';
import { React, Component } from 'react';
import axios from "axios";
import apiKey from '../src/config';
import Gallery from './components/Gallery';
// import SearchForm from './components/SearchForm';

class App extends Component {
  // let {userSearch} = useParams();
  state = {
    search: 'random',
    data: [],
    loading: true,
  };

  handleSearchData = (data) =>{
    this.setState({
      data: data
    })
  }
  handleSearchTag = (value) =>{
    this.setState({
      search: value,
    })
  }
  handleParam = (param) =>{
    this.setState({
      param
    })
  }
  handleLoading = (bool) =>{
    this.setState({
      loading: bool
    })
  }
handleRouting = (value) =>{
  this.setState({
    routing: value
  })
}
   async componentDidMount() {
    console.log('Mounted')
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

  render(){
    return (
      <Routes>
        <Route path= '/' element={<Gallery  data={this.state.data} handleLoading={this.handleLoading} handleSearch={this.handleSearchTag} handleData={this.handleSearchData} search={this.state.search} loading={this.state.loading} />} />
        <Route path= '/random' element={<Gallery  data={this.state.data} handleLoading={this.handleLoading} handleSearch={this.handleSearchTag} handleData={this.handleSearchData} search={this.state.search} loading={this.state.loading} />} />
        <Route path= '/search/:usersearch/' element={<Gallery  data={this.state.data} handleLoading={this.handleLoading} handleSearch={this.handleSearchTag} handleData={this.handleSearchData} search={this.state.search} loading={this.state.loading} />}/>
        <Route path= '/search/:usersearch/:optional' element={<Gallery  data={this.state.data} handleLoading={this.handleLoading} handleSearch={this.handleSearchTag} handleData={this.handleSearchData} search={this.state.search} loading={this.state.loading} />}/>
        <Route path='*' element={<Error404 />} /> 
      </Routes>
    
      );
  }
}

export default App;
