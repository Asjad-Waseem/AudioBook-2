import React, { Component } from 'react';
import { Table } from 'antd';
import '../index1.css';
import '../AudioBooks/AudioBooks.css';
import './tables.css';
import { TreeSelect, Input, Typography } from 'antd';

const visible = false;

// const checked = false;

const Loading = false;

// const Value1 = '';

// const Value2 = '';

const { Search } = Input;
const { TreeNode } = TreeSelect;
const { Text } = Typography;

export default class RequestedTable extends Component {

    onChange1=(value)=>{
    this.setState({Value1: value})
    }
    
    onChange2=(value)=>{
    this.setState({Value2: value})
    }

    handleSearch=()=>{

    }

     handleChange = (event) => {
     
     this.setState({checked: true})

    };

    onCheckChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    constructor(){

        super();

      this.state = visible;

        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange(this);
        // this.onSubmit = this.onSubmit.bind(this);

    }

    // onChange(e){

    //     this.setState({[e.target.name]: e.target.value});
    
    // }

    // onSubmit(e){

    //     e.preventDefault();

      
    //     };

      //  }

      onChange(filters, sorter, extra) {
        console.log('params', filters, sorter, extra);
      
      }
 
  render() {

    const columns = [
        {
          title: <p className = "RequestedTableTitle">Cover Image</p>,
          dataIndex: "coverImage",
          key: 'coverImage',
        //   filters: [
        //     {
        //       text: 'Joe',
        //       value: 'Joe',
        //     },
            // {
            //   text: 'Jim',
            //   value: 'Jim',
            // },
            // {
            //   text: 'Submenu',
            //   value: 'Submenu',
            //   children: [
            //     {
            //       text: 'Green',
            //       value: 'Green',
            //     },
            //     {
            //       text: 'Black',
            //       value: 'Black',
            //     },
            //   ],
            // },
        //   ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value, record) => record.name.indexOf(value) === 0,
        //   sorter: (a, b) => a.name.length - b.name.length,
        //   sortDirections: ['descend'],
        },
        {
          title: <p className = "RequestedTableTitle">Audiobook Name</p>,
          dataIndex: "audioBookName",
          key: "audioBookName",
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: <p className = "RequestedTableTitle">Region</p>,
          dataIndex: "region",
          key: "region",
        //   filters: [
        //     {
        //       text: 'London',
        //       value: 'London',
        //     },
        //     {
        //       text: 'New York',
        //       value: 'New York',
        //     },
        //   ],
        //   filterMultiple: false,
          onFilter: (value, record) => record.address.indexOf(value) === 0,
          sorter: (a, b) => a.address.length - b.address.length,
          sortDirections: ['descend', 'ascend'],
        },
    
        {
            title: <p className = "RequestedTableTitle">Author</p>,
            dataIndex: "author",
            key: "author",
            // filters: [
            //   {
            //     text: 'London',
            //     value: 'London',
            //   },
            //   {
            //     text: 'New York',
            //     value: 'New York',
            //   },
            // ],
            // filterMultiple: false,
            // onFilter: (value, record) => record.address.indexOf(value) === 0,
            // sorter: (a, b) => a.address.length - b.address.length,
            // sortDirections: ['descend', 'ascend'],
          },
    
          {
            title: <p className = "RequestedTableTitle">Status</p>,
            dataIndex: "status",
            key: "status",
            // filters: [
            //   {
            //     text: 'London',
            //     value: 'London',
            //   },
            //   {
            //     text: 'New York',
            //     value: 'New York',
            //   },
            // ],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            // sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
          },
    
          {
            title: <p className = "RequestedTableTitle">Date</p>,
            dataIndex: "date",
            key: "date",
        
            // filters: [
            //   {
            //     text: 'London',
            //     value: 'London',
            //   },
            //   {
            //     text: 'New York',
            //     value: 'New York',
            //   },
            // ],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
          },
    
      ];
      
      const data = [
        {
          key: "coverImage",
          coverImage: <img src = {require("../../../Assets/Images/b1.png")} style = {{maxHeight: "80px", maxWidth: "80px"}} alt = "tableimage"/> ,
          audioBookName: <p className = "AudioBookName">Harry Potter</p>,
          region: <p className = "RequestedTableData">US</p>,
          author: <p className = "RequestedTableData"><u>Jackson Barber</u></p>,
          promoCode: <p className = "RequestedTableData">327KQXCGGDNG7</p>,
          status: <p className = "RequestedTableData">REQUESTED</p>,
          date: <p className = "RequestedTableData">08-04-2020</p>
        },
       
      ];


    return (
        <div>

       <br/>
       <br/>

       <div style = {{display: "flex", justifyContent: "space-between", marginBottom: "15px"}}>

       <div style = {{marginTop: "-60px"}}>
       <br/>
       <Text className = "RequestedTableOptions" style = {{marginLeft: "-20px"}}>Show</Text>   
       <TreeSelect
       defaultSortOrder= 'descend'
       sorter= {(a, b) => a.age - b.age}
       showSearch
       style={{ width: '200%'}}
       value={this.state.Value1}
       dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
       allowClear
       treeDefaultExpandAll
       onChange={this.onChange1}
     >
     
           <TreeNode value="20"  title="20" />
           <TreeNode value="30" title="30" />
           <TreeNode value="40" title="40" />
       
     </TreeSelect>
     </div>

     <div style = {{marginTop: "-35px"}}>
     <Text className = "RequestedTableOptions">SEARCH</Text>

     <Search placeholder="Input Search Term" loading={Loading}   style={{ width: '100%'}}
              onChange={this.handleSearch}/>

      </div>

      </div>

        <Table columns={columns} dataSource={data} onChange={this.onChange} pagination = {false}/>
        </div>
    )
  }
}
;

  
  
 




