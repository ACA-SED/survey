import React from 'react';
import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import Typography from '@material-ui/core/Typography';

import uuid from 'react-uuid'

import { useStyles } from './CustomPieChart.style';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B43ACE'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function CustomPieChart ( {data, title}) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>

      <div className={classes.details}>

        <CardContent className={classes.content}>
          <div className={classes.chartList}>
            <List component="nav" aria-label="main mailbox folders">
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
              {data.map((val, id) => (
                COLORS.map((color, index) => (
                  index === id &&
                    <ListItem button>
                      <ListItemIcon>
                        <Brightness1RoundedIcon style={{fill: color}} />
                      </ListItemIcon>

                      <ListItemText primary={val.name} />
                    </ListItem>
                ))
                
              ))}
              
            </List>
          </div>
          <PieChart 
            width={250} 
            height={250} 
            key={uuid()}
          >
            <Pie
              innerRadius={40}
              outerRadius={120} 
              fill="#8884d8"
              dataKey="value"
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
            >
              

              {
                data.map((entry, index) => <Cell key={uuid()} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>


            <Tooltip />

          </PieChart>
        </CardContent>
      </div>
    </Card>
  )
}

export default CustomPieChart;