import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="project-table" role="table">
      <thead>
        <tr>
          <th scope="col">S.No.</th>
          <th scope="col">Percentage Funded</th>
          <th scope="col">Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project, index) => (
          <tr key={index}>
            <td role="cell">{index + 1}</td>
            <td role="cell">{project["percentage.funded"]}</td>
            <td role="cell">{project["amt.pledged"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
