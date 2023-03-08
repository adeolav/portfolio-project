import Nav from "../../layouts/Nav";
import Footer from "../../layouts/Footer";
import { useState } from "react";
import { supabase } from "../../../supabaseClient";
import {v4 as uuidv4} from "uuid";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setConent] = useState("");

  let navigate = useNavigate();

  async function addBlog({title,description,content}) {
    try {
      const updates = {
        id:uuidv4(),
        title: title,
        description: description,
        content: content,
      };

      let {error} = await supabase
      .from("blog")
      .insert(updates)
      .then(navigate("/"));

      if (error) {
        throw error;
      }
     }
    catch (error) {
      alert(error.message)
    }
    finally{}
  }


  return (
    <>
      <Nav />
      <header className="masthead">
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-heading">
                <h1>AddPost</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <form>
                <div>
                  <div className="mb-3 pb-1">
                    <label className="form-label px-0">Post title</label>
                    <input className="form-control" 
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3 pb-1">
                    <label className="form-label px-0">Short description</label>
                    <input className="form-control" 
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3 pb-1">
                    <label className="form-label px-0">Post content</label>
                    <textarea className="form-control" 
                      value={content}
                      onChange={(e) => {
                        setConent(e.target.value)
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3 pb-1">
                    <label className="form-label px-0">Post image</label>
                    <input type="file" className="form-control" />
                  </div>
                </div>
                <button
                  className="btn btn-light shadow btn-sm mb-2"
                  type="submit"
                  onClick={() => addBlog({title,description,content})}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}

export default AddPost;
