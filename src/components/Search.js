import Input from "@mui/material/Input";
import { Search as SearchGlass } from "@mui/icons-material";

function Search() {
  return (
    <div className="search">
      <SearchGlass color="#f1f1f1" />
      <Input
        placeholder="search"
        sx={{
          color: "#ffffff",
        }}
        color="secondary"
      />
    </div>
  );
}

export default Search;
