import { useState } from "react";

function App() {
  const storageJobs = localStorage.getItem("jobs");
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    if (storageJobs) {
      return JSON.parse(storageJobs);
    } else {
      return [];
    }
  });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  return (
    <div className="App">
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
