import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/list/");
      if (Array.isArray(result.data)) {
        setList(result.data);
      } else {
        console.error("Server response is not an array.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container animation">
      <h1 className="text-center my-5"># To Do List</h1>
      <table className="table table-hover rounded shadow my-3">
        <thead>
          <tr className="table-success">
            <th scope="col">💚</th>
            <th scope="col" className="title">
              TITLE
            </th>
            <th scope="col" className="title">
              VIEW
            </th>
            <th scope="col" className="title">
              DELETE
            </th>
            <th scope="col" className="title">
              PIN
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={item.idx}>
              <th scope="row">#{index + 1}</th>
              <td>{item.title}</td>
              <td>
                <Link
                  to={`/list/${item.idx}`}
                  className="btn btn-outline-success mx-1"
                >
                  🌵
                </Link>
              </td>
              <td>View Content Here</td> {/* "VIEW" 열 내용 추가 */}
              <td>Delete Button Here</td> {/* "DELETE" 열 내용 추가 */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
