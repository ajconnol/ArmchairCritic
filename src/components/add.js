import React, { Component } from 'react';
import './add.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';


export default class add extends Component {

    
    constructor(props) {
        super(props);
        this.state = {title: '',
                      body: '',
                      type: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
      

    
      handleSubmit(event) {
        alert(this.state.type);
      }
    render() {
      
        return (
            <div>
                <ttl><h1>Submit New Article</h1></ttl>
                <form onSubmit={this.handleSubmit} autoComplete = "off" > 
                <p><br></br></p>                  
                <TextField fullWidth id="outlined-basic" name = "title" defaultvalue = {this.state.title} label="Title" variant="outlined" onChange={this.handleChange} />
                <p><br></br></p>
                <body><TextField multiline rows = {20} name = "body" defaultvalue = {this.state.body} fullWidth id="outlined-basic" label="Body" variant="outlined" onChange={this.handleChange} /></body>
                <p><br></br></p>
                <type><FormLabel component="legend">Article Type</FormLabel></type>           
                <RadioGroup aria-label="type" name="type" value={this.state.type} onChange={this.handleChange}>
                <FormControlLabel value="movie" control={<Radio color = "primary"/>} label="Movies and TV Reviews" />
                <FormControlLabel value="game" control={<Radio color = "primary"/>} label="Game Reviews" />
                <FormControlLabel value="sports" control={<Radio color = "primary"/>} label="Sports Talk" />
                </RadioGroup>
                <input accept="image/*" style={{ display: 'none' }} id="coverphoto" multiple type="file"/>
                <label htmlFor="coverphoto">
                <Button variant="outlined" startIcon={<PhotoCamera/>} component="span"> Cover Photo </Button>                </label>
                <p><br></br></p>
                <Button type = "submit" variant="outlined" color="default" startIcon={<CloudUploadIcon/>}>Submit</Button>
                <p><br></br></p>
                <p><br></br></p>
                </form>
            </div>
              
        )
    }
}