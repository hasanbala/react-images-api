import { SearchBar } from "./searchBar";
import { GetImages } from "./getImages";
import "./styles/app.css";

export const App = () => {
  return (
    <div className="app-container">
      <SearchBar />
      <GetImages />
    </div>
  );
};
