import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const getBlogs = async () => {
      try {
        let { data, error, status } = await supabase.from("blog").select("*");

        if (error && status !== 406) {
          console.log("error", error);
          throw error;
        }
        setData(data);
      } catch (error) {
        // eslint-disable-next-line no-lone-blocks
        {console.log(error.message)}}
    }

    getBlogs();
  }, []);

  return (
    <div>
      <Nav />
      {/* <!-- Page Header--> */}
      <header
        className="masthead"
        style={{ backgroundImage: `url('assets/img/home-bg.jpg')` }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Techie Nerd Squad</h1>
                <span className="subheading">
                  Don't Do Hard Work, Do Smart Work.
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Main Content--> */}
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {data
              ? data.map((blog) => {
                  return (
                    <div key={blog.id}>
                      {/* <!-- Post preview--> */}
                      <div className="post-preview">
                        <Link to={`/singlepost/${blog.id}`}>
                        <h2 className="post-title">{blog.title}</h2>
                          <h3 className="post-subtitle">{blog.description}</h3>
                        </Link>  
                      </div>
                      {/* <!-- Divider--> */}
                      <hr className="my-4" />  
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
