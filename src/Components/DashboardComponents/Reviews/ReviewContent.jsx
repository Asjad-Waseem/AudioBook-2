import React from 'react';
import 'antd/dist/antd.css';
import '../index1.css';
import '../AudioBooks/AudioBooks.css';
import './Reviews.css';
import { Layout, Breadcrumb, Divider } from 'antd';
import MediaQuery from "react-responsive";
import Table3 from '../Tables/ReviewsTable';
// import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../../globalStateContext';

const { Content } = Layout;
   
function ReviewContent() {

// const history = useHistory();
   
const [{collapsed1}] = useGlobalState()
  
//  const onCollapse = () => {

//  setGlobalState({collapsed1: !collapsed1})

//  }

    return (

            <>

            {/* Main Body Starts Here */ }

            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>          

            </Breadcrumb>

            <MediaQuery minDeviceWidth = {490}>

            <div className="site-layout-background col-md-10 ConfirmedReviews" style={{ padding: 24, minHeight: 136, margin: "auto", textAlign: "center" }}>
            <div className="container">
            <div className="row">

            <div className="col pendingConfirmation">
            PENDING CONFIRMATION <br />
            <h1 className = "Count">1</h1>
            </div>
    

            {/* Divider of the Top Container */ }

            {/* Collapsed True */}


            {collapsed1 === true ? 

            <>

            {/* <MediaQuery minDeviceWidth={490}> */}

            <Divider className = "divider" type="vertical" />

            {/* </MediaQuery> */}

            </>

            : null} 

            {/* {collapsed1 === true ?  */}

            {/* <MediaQuery maxDeviceWidth={489}> */}

            {/* <Divider className = "horizontalDivider" type="horizontal" /> */}

            {/* </MediaQuery> */}

            {/* : null} */}


            {/* Collapsed False */}


            {collapsed1 === false ? 

            <MediaQuery minDeviceWidth={620}>

            <Divider className = "divider" type="vertical" />

            </MediaQuery>

            : null}

            {collapsed1 === false ? 

            <MediaQuery maxDeviceWidth={619}>

            <Divider className = "horizontalDivider" type="horizontal" />

            </MediaQuery>

            : null}
 
            <div className="col pendingConfirmation">
            CONFIRMED REVIEWS <br />
            <h1 className = "Count">0</h1>
            </div>

            </div>
            </div>
             
            </div>

            </MediaQuery>

            <MediaQuery maxDeviceWidth = {489}>
                
            <div className="site-layout-background col-md-10 ConfirmedReviews" style={{ padding: 24, margin: "auto"}}>
            <div className="container">
 
            <div className="row">
            <p className = "pendingConfirmation">
            PENDING CONFIRMATION</p> 
            <p className = "count-mobile">1</p>
            </div>  
         
            <div className = "row">
            <p className = "pendingConfirmation">
            CONFIRMED REVIEWS</p> 
            <p className = "count-mobile">0</p>
            </div>

            </div>
           
            </div>          

            </MediaQuery>

            <br />

            <div className="container site-layout-background col-md-10" style = {{backgroundColor: "#F2F2F2"}}>
            <div className="row">

            <div className="col requiresReview" style = {{ backgroundColor: "white", textAlign: "center"}}>
            <div className = "table-responsive"> 
           
            <Table3 className = "requiresReview"/>

           </div>
           </div>
           </div> 
           </div>

          </Content>

        </>

    )
} 

export default ReviewContent;
