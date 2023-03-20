  <div>
          <h3>Adding image</h3>
          <image
            src={image[0].["data_url"]}
            height={100}
            width={100}
            alt="profile-picture"
          
          />
          <ImageUploading
              multiple
              value={images}
              onChange={onchange}
              maxNumber={1}
              dataURLKey="data_url"
            >
            {({onImageUpload, onImageRemoveAll, isDragging, dragProps }) => (
              <div className="upload__image-wrapper bg-slate-300 flex justify-center"
                  {images.length === 0 ? (
                    <button 
                        style={isDragging ? {color: "red"} : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                        className="w=3/4"
                    >
                        Click to upload a new image or drag and drop a new image here
                    </button>
                  ) : (
                    <button onClick={onImageRemoveAll}>Remove all images</button>
                  )}
              </div>
            )}
          </ImageUploading>
          <button
            type="button"
            className="inline-flex items-center rounded-md border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500  mt-2 "
            onClick={addNewLink}
          >
            Upload profile picture
          </button>