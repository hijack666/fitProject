import React from 'react';
// const fs = require('fs');

const FilesList = () => {

    let fileDates = ['fileOne', 'fileTwo'];
    const listItems = fileDates.map(date => <span>{date}</span>);
    return (
      <div>
        {listItems}
      </div>
    );
}
export default FilesList;