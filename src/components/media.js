import React from 'react';
import ReactPlayer from 'react-player'
import '../style/media.css';


const Media = (props) => {
  return (
    <div id="media" style={{ height: 800 }}>
      <img src={require('../media/BD_website_01a_pb.jpg')} />
      <div className="contents_media">
      <h1>Media</h1>
      <ReactPlayer className="videoPreview" url={'https://vimeo.com/333159305'} controls/>
      
      
      </div>
      <img src={require('../media/BD_website_02a_pb.jpg')} />
  </div>
  );
 }
 
 export default Media;