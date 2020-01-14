import React from 'react';
import ReactPlayer from 'react-player'
import '../style/media.css';


const Media = (props) => {
  return (
    <div id="media" 
    style={{ height: 800 }}
    >
      <img src={require('../media/BD_website_01a_pb.jpg')} alt=""className="firstpic" />
      <div className="contents media">
      <h1>Media</h1>
      <div className="mediaPlayer">
      <ReactPlayer className="videoPreview" url={'https://vimeo.com/333159305'} controls/>
      <ReactPlayer className="videoPreview" url={'https://vimeo.com/384878504'} controls/>
      </div>
      
      
      </div>
      <img src={require('../media/BD_website_02a_pb.jpg')}alt="" className="secondpic"/>
  </div>
  );
 }
 
 export default Media;