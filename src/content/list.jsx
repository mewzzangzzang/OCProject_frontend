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
      const result = await axios.get(`http://127.0.0.1:8000/test/`);
      if (Array.isArray(result.data)) {
        setList(result.data);
      } else {
        console.error("Server response is not an array.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteList = async (idx) => {
    if (window.confirm("진짜 지워요? 🥺")) {
      await axios.delete(`http://localhost:8080/list/${idx}`);
      window.alert("삭제 완료 😭");
    }
    loadList();
  };

  return (
    <div className="container animation">
      <h1 className="text-left my-5">자료 아카이브</h1>
      <table className="table table-hover rounded shadow my-3">
        <thead>
          <tr className="table-success">
            <th scope="col" className="title">
              번호
            </th>
            <th scope="col" className="title">
              제목
            </th>
            <th scope="col" className="title">
              작성자
            </th>
            <th scope="col" className="title">
              작성일
            </th>
            <th scope="col" className="title">
              조회수
            </th>
            <th scope="col" className="title">
              첨부파일
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={item.idx}>
              <th scope="row">
                #{index + 1}
                <Link
                  to={`/list/${item.idx}`}
                  className="btn btn-outline-success mx-1"
                ></Link>
              </th>
              <td>
                {item.title}
                <Link
                  to={`/list/${item.idx}`}
                  className="btn btn-outline-success mx-1"
                ></Link>
              </td>
              <td>
                {item.writer}
                <Link
                  to={`/list/${item.idx}`}
                  className="btn btn-outline-success mx-1"
                ></Link>
              </td>
              <td>
                {item.post_date}
                <Link
                  to={`/list/${item.idx}`}
                  className="btn btn-outline-success mx-1"
                ></Link>
              </td>
              <td>{item.hit}</td>
              <td>
                {/* 링크는 파일다운로드로 */}
                {item.filename}
                <Link
                  to={`/list/${item.idx}`}
                  className="btn btn-outline-success mx-1"
                ></Link>
              </td>
              <td>
                <button
                  onClick={() => deleteList(item.idx)}
                  className="btn btn-outline-warning px-3 mx-2 button"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
