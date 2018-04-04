import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import axios from 'axios';
import Table, {
  TableBody,
  TableRow,
  TableRowColumn,
  TableCell,
} from 'material-ui/Table';


var styles = {
    "backgroundStyle": {
            "backgroundColor": "#F1F1F1",
    },
    "appBarStyle": {
            "marginBottom": "10px",
            "backgroundColor": "#FC0909",
        },
    "paperStyle": {
            "height": "3000px",
            "width": "1000px",
            "marginLeft": "200px",
            "marginTop": "30px",
            "textAlign": "center",
            "display": "inline-block",
            "padding": "10px",
        },
    "textFieldStyle": {
            "marginTop": "30px",
            "borderBottom": "3px solid red",
        },
    "buttonStyle": {
            "backgroundColor": "#FC0909",
            "marginTop": "30px",
            "color": "white",
        }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            "patientEmail": "",
            "outputTable": [],
        };
    }

    onTextFieldChange = (event) => {
        this.setState({"patientEmail": event.target.value});
    }

    getData = () => {
        var url_str = "http://0.0.0.0:5000/api/heart_rate/get_data/"
        var txtField_str = this.state.patientEmail
        var url_full = url_str.concat(txtField_str)
        var allData = []
        axios.get(url_full).then( (response) => {
            console.log(response);
            for (let i=0; i < response.data.time_stamp.length; i++) {
                allData.push({
                    "times": response.data.time_stamp[i],
                    "rates": response.data.user_heart_rate[i]
                });
            }
            console.log(allData)
            this.setState({"outputTable": allData});
            console.log(this.state.outputTable)
        })
    }



  render() {
    return (
      <div>
      <body style={styles.backgroundStyle}>
        <AppBar position="static" style={styles.appBarStyle}>
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Physician Heart Rate Viewer
                </Typography>
            </Toolbar>
        </AppBar>
        <Paper position="static" style={styles.paperStyle}>
            <div>
            Welcome, Doctor
            </div>
            <div>
            Please input patient email below
            </div>
            <TextField style={styles.textFieldStyle}
                value={this.state.txtEmail}
                onChange={this.onTextFieldChange}/>
            <div>
            <Button variant="raised" style={styles.buttonStyle}
                onClick={this.getData}>
                Search
            </Button>
            <div>
            <Table>
                    <TableRow>
                        <TableCell>Time Stamp &#128336;</TableCell>
                        <TableCell>Heart Rate &#10084;</TableCell>
                    </TableRow>
                <TableBody>
                 {this.state.outputTable.map(e =>{
                     return(
                         <TableRow>
                            <TableCell>{e.times}</TableCell>
                            <TableCell>{e.rates}</TableCell>
                        </TableRow>
                    );
                 })}
                </TableBody>
            </Table>
            </div>
            </div>
        </Paper>
      </body>
      </div>
    );
  }
}

export default App;
