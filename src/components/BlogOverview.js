import React from "react";

// utils
import Card from '../utils/Card.js';
import { Input, Label, Submit } from '../utils/Form.js';

// Storage
import Blog from "../stores/Blog";


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class BlogOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      data: Blog.getAll()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <Card title="Übersicht über Beiträge" fill={true}>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "ID",
              accessor: "_id"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </Card>
    );
  }
}

// const BlogOverview = ({ posts }) => (
//   <Card title="Übersicht über Beiträge">
//     <h5>1</h5>
//     <h5>2</h5>
//     <h5>3</h5>
//     <h5>4</h5>
//     <h5>5</h5>
//   </Card>
// )

export default BlogOverview