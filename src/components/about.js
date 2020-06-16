import React, { Component } from 'react';
import './about.css';
import squadpic from './squad.png'

export default class about extends Component {
    state = {
        author: "Tony",
        date : "5/12/2020"
    }
    render() {

        return (
            <div>
                <p>&nbsp;</p>
                <ttl><h1>Welcome to The Armchair Critic!</h1></ttl>
        <authorline><p>By {this.state.author} {this.state.date}</p></authorline>
                <p>&nbsp;</p>
                <img src = {squadpic} alt = "" class = "centerphoto"/>
                <artext><p>&nbsp;</p>
                <p>&nbsp;</p>     
                <p>The Armchair Critic is a collaborative project among good friends to catalog our thoughts and opinions on movies, television, video games, and other media.
                      All opinions that are expressed on this platform are not necessarily shared by other it's contributors. None of the content on this platform is sponsposed 
                     in any way.  Much like "EJ's Neato Stat of the Night", we are "unsullied by sponsorship". </p></artext>                 
                
            
            </div>
        )
    }
}