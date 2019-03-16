import React from 'react';
import { Parallax, Background } from 'react-parallax';
import YouTubePlayer from './mediaPlayer';
import '../style/media.css';
import image from '../media/interview.jpg';

const Media = (props) => {
  return (
    <div className="purchase">
   
   <Parallax bgImage={image} blur={{ min: -2, max: 5 }}>
      <div style={{ height: 1200 }}>
        <div className="insideDiv">
          <h4>Media</h4>
          <p>Here we will have links to media interviews etc.</p>
          <p>We can have frames with the media already there</p>
          <YouTubePlayer />
          
        
        </div>
      </div>
    </Parallax>
    </div>
  );
 }
 
 export default Media;