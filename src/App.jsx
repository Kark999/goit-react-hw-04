import { useState, useEffect } from "react";
import "./App.css";
import { params, requestPhotos } from "./services/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";

// "results": [
//     {
//       "id": "eOLpJytrbsQ",
//       "created_at": "2014-11-18T14:35:36-05:00",
//       "width": 4000,
//       "height": 3000,
//       "color": "#A7A2A1",
//       "blur_hash": "LaLXMa9Fx[D%~q%MtQM|kDRjtRIU",
//       "likes": 286,
//       "liked_by_user": false,
//       "description": "A man drinking a coffee.",
//       "urls": {
//         "raw": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
//         "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
//         "regular": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f515",
//         "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
//         "thumb": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
//       },
//   ]
//

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        setIsLoading(true);
        const data = await requestPhotos(params);
        setPhotos(data);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {errorMessage && <ErrorMessage />}
      {photos && <ImageGallery photos={photos} />}
    </div>
  );
}

export default App;
