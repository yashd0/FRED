import { render } from "@testing-library/react";
import React from "react";
import { Placeholder } from "react-bootstrap";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import {motion} from 'framer-motion'
import { Grid } from "@mui/material"
import "./styles.css";

function App() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="post">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
             POST
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all POST</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} height="550" width="550" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
<div> 

</div>

 <div> 
 <Grid>  

           

<motion.button whileHover={{scale:2}} whileTap={{scale:0.8}} className="home"> HOME </motion.button>

<motion.button whileHover={{scale:2}} whileTap={{scale:0.8}} className="about"> NEWS </motion.button>

<motion.button whileHover={{scale:2}} whileTap={{scale:0.8}} className="help"> HELP </motion.button>

<motion.button whileHover={{scale:2}} whileTap={{scale:0.8}} className="contact"> CONTACT US  </motion.button>


<input    className="search" text="text" placeholder="SEARCH HERE"/>  

</Grid >
 </div>


    </div>
  );
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

