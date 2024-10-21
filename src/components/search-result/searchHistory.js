import React from "react";
import "./searchResult.css";
import HistoryCard from "./HistoryCard";

function SearchHistory(props) {
  const historyList = props.historyList;

  return (
    <div className="search-history">
      <p className="text black-text">Search History</p>

      {historyList?.map((item, index) => (
        <HistoryCard
          key={index}
          result={item}
          searchAgain={props.searchAgain}
          deleteRecord={props.deleteRecord}
        />
      ))}
    </div>
  );
}

export default SearchHistory;
