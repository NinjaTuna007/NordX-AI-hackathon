import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
//import MacBookPro141 from "./pages/MacBookPro141";
import GuideView from "./pages/GuideView";
import ChangedView from "./pages/ChangedView";
import ChangeView from "./pages/ChangeView";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/guideview":
        title = "";
        metaDescription = "";
        break;
      case "/changedview":
        title = "";
        metaDescription = "";
        break;
      case "/changeview":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookPro141 />} />
      <Route path="/guideview" element={<GuideView />} />
      <Route path="/changedview" element={<ChangedView />} />
      <Route path="/changeview" element={<ChangeView />} />
    </Routes>
  );
}
export default App;
