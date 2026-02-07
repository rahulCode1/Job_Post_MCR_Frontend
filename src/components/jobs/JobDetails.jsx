

const JobsDetails = ({ jobInfo }) => {
  return (
    <main className="container py-4">
      <h1>{jobInfo.title}</h1>
      <hr />

      <p>
        <strong>Company Name: </strong>
        {jobInfo.companyName}
      </p>
      <p>
        <strong>Location: </strong>
        {jobInfo.location}
      </p>
      <p>
        <strong>Salary: </strong>
        {jobInfo.salary}
      </p>
      <p>
        <strong>Job Type: </strong>
        {jobInfo.jobType}
      </p>
      <p>
        <strong>Description: </strong>
        {jobInfo.description}
      </p>
      <p>
        <strong>Qualification: </strong>
        <ol>
          {jobInfo.qualifications.split(",").map((qualification) => (
            <li>{qualification}</li>
          ))}
        </ol>
      </p>

      <hr />
    </main>
  );
};

export default JobsDetails;
