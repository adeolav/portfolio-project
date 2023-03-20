import { useEffect, useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import supabase from "./utils/supabaseClient";

type Link = {
  title: string;
  url: string;
};

export default function Home() {
  const [isAuthenticaed, setIsAuthenticaed] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();
  const [url, setUrl] = useState<string | undefined>();
  const [links, setLinks] = useState<Link[]>();
  const [images, setImages] = useState<ImageListType>([]);

  const onChange = (imageList: ImageListType) => {setImages(imageList);
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      console.log("user", user);
      if (user) {
        const userId = user.data.user?.id;
        setIsAuthenticaed(true);
        setUserId(userId);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const getLinks = async () => {
      try {
        const { data, error } = await supabase
          .from("links")
          .select("title, url")
          .eq("user_id", userId);

        if (error) throw error;

        setLinks(data);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    if (userId) {
      getLinks();
    }
  }, [userId]);

  const addNewLink = async () => {
    try {
      if (title && url && userId) {
        const { data, error } = await supabase
          .from("links")
          .insert({
            title: title,
            url: url,
            user_id: userId,
          })
          .select();
        if (error) throw error;
        console.log("data: ", data);
        if (links) {
          setLinks([...data, ...links]);
        }
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center mt-4">
      {links?.map((link: Link, index: number) => (
        <div
          className="shadow-xl w-96 bg-indigo-500 mt-4 p-4 rounded-lg text-center text-white"
          key={index}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {link.title}
        </div>
      ))}

      {isAuthenticaed && (
        <>
        <div>
          <h3>Adding link</h3>
        <div className="mt-4">
            <div className="block text-sm font-medium text-gray-700">Title</div>
            <input
              type="text"
              name="title"
              id="title"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="my awesome link"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <div className="block text-sm font-medium text-gray-700">Url</div>
            <input
              type="text"
              name="url"
              id="url"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="https://google.com"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="inline-flex items-center rounded-md border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500  mt-2 "
            onClick={addNewLink}
          >
            Add New Link
          </button>
        </div>
          
      </div>
        </>
      )}
    </div>
  );
}
