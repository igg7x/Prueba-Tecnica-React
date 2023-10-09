import { useState, useRef, useEffect } from "react";

export function useSearch() {
  const [error, setError] = useState(null);
  const [search, updateSearch] = useState("");
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("Please enter a search term");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("Please enter a valid search term");
      return;
    }

    if (search.startsWith(" ")) {
      setError("Please enter a valid search term");
      return;
    }

    if (search.length <= 3) {
      setError("The search term must be at least 3 characters long");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
