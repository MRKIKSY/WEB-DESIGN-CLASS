import { data } from "./data.jsx";
import { useState } from "react";
import jsPDF from "jspdf";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LessonPage() {
  let navigate = useNavigate();
  const { index } = useParams();
  const [allData] = useState(data);

  const handlePrint = (index, desc) => {
    const doc = new jsPDF();
    const content = allData[index];
    doc.text(content.title, 10, 10);
    doc.text(content.category, 10, 20);
    // Include description in PDF content
    doc.text(desc, 10, 30);
    doc.save("lesson.pdf");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <button className="btn btn-secondary m-5" onClick={() => navigate("/account")}>
          Back to Home
        </button>
        {allData.map((item, index) => (
          <div key={item.id} className="col-md-6 mb-3">
            <div className="card" style={{ maxWidth: "540px" }}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.category}</p>
                {/* Pass description to handlePrint function */}
                <button className="btn btn-primary" onClick={() => handlePrint(index, item.desc)}>
                  Download Lesson
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LessonPage;

