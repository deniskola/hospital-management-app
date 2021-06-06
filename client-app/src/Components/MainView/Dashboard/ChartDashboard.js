import React from "react";
import {Grid,useTheme} from "@material-ui/core";
import Chart from "chart.js"
import {Line} from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";
import {chartOptions,parseOptions,chartExample1,chartExample2}from"./chart/charts";
import GridContainer from '../mainComponents/GridContainer.js';
import Card from '../mainComponents/Card.js';
import CardHeader from '../mainComponents/CardHeader.js';
import CardBody from '../mainComponents/CardBody.js';
import Box from "@material-ui/core/Box";

function ChartDashboard(){
    const theme=useTheme();
    const[chartExample1Data,setChartExample1Data]=React.useState("data1");
    const[chartExample2Data,setChartExample2Data]=React.useState("data2");

    if(window.Chart){
        parseOptions(Chart,chartOptions());
    }

    const toggleNavs=(index)=>{
        setChartExample1Data("data"+index);
    };

    return(
        
      <Card>
        <CardHeader>
          <GridContainer component={Box} alignItems="center" justifyContent="space-between">
            <Grid item xs="auto">
              <Box component={Typography} variant="h6" letterSpacing="0.0625rem" marginBottom=".25rem!important">
                <Box component="span" >
                  Overview
                </Box>
              </Box>
            </Grid>
          </GridContainer>
        </CardHeader>

          <CardBody>
            <Box position="relative" height="350px">
              <Line data={chartExample1[chartExample2Data]} options={chartExample2.options} getDatasetAtEvent={(e)=>console.log(e)} />
            </Box>
          </CardBody>
      </Card>
    )
}

export default ChartDashboard;