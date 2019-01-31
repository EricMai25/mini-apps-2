import React from "react";
import ReactPaginate from "react-paginate";
import DataList from "./components/dataList.jsx";
import Search from "./components/Search.jsx";
import axios from "axios";
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pageCount : null,
      offset: 0,
      page: 1,
      search: ''
    };
  }
  componentDidMount() {
    this.loader();
  };
  update(){
    axios
      .put(`/events/1`,
      {"date": "-300", "description": "Pilgrims travel to the healing temples of Asclepieion to be cured of their ills. After a ritual purification the followers bring offerings or sacrifices.", "lang": "en", "category1": "By place", "category2": "Greece", "granularity": "year"},
            {headers:{"Content-Type": "application/json"}}
          )
          .then(r=> console.log("updated"))
          .catch(e => console.log(e))
  }

  loader(){
    axios
      .get(`/events?_page=${this.state.page}&q=${this.state.search}`)
      .then(res =>{
        console.log(res)
        console.log(res.headers)
        let totalPages = res.headers['x-total-count'] / 10
        
        this.setState({
          data: res.data,
          pageCount: totalPages
        });
      })
  }

  handlePageClick(data){
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);
    this.setState({ 
      offset: offset,
      page: selected+1
     }, () => {
      this.loader();
    });
  };
 query(e){
   this.setState({search : e.target.value})
 }
  search(){
    this.loader()
  }
  render() {
    return (
      <div>
        <Search search={this.update.bind(this)} query={this.query.bind(this)}/>
        <DataList data={this.state.data} />
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(e)=>{this.handlePageClick(e)}}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default App;
