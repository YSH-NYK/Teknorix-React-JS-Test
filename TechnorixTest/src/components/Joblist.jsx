import React, { useEffect, useState } from 'react'

const BASE_URL = "";

const JobList = () => {
 const [filters, setFilters ] = useState({search:"", departments:"",location:"", function:""});
const [jobs, setJobs] = useState([])

  useEffect(()=>{
    // fetchLookups();
    fetchJobs();
  },[])

  const fetchJobs = async () => {
    const response = await fetch('https://teknorix.jobsoid.com/api/v1/jobs')
    const data = await response.json();
    setJobs(data);
  }

 const groupByDepartment = (jobs = []) => {
  const grouped = {};
  jobs.forEach(job => {
    const dept = job.department.title || 'Unknown';
    if (!grouped[dept]) {
      grouped[dept] = [];
    }
    grouped[dept].push(job);
  });
  return grouped;
};
const groupedJobs = groupByDepartment(jobs);
console.log(groupedJobs)

  return (
    <div>
       {Object.entries(groupedJobs).map(([dept, jobs]) => (
      <section key={dept} className="department">
        <h2>{dept}</h2>
        {jobs.map(job => (
          <div key={job.id} className="job">
            <strong>{job.title}</strong>
            <p>{job.location.title} - {job.function.title}</p>
            <div>
              <a href={`/job/${job.id}`}>View</a>
              <a href={job.applyUrl}>Apply</a>
            </div>
          </div>
        ))}
      </section>
    ))}
    </div>
  )
};

export default JobList;