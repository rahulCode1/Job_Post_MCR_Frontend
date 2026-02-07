import axios from "axios";
import { Link, useRevalidator } from "react-router";
import useJobContext from "../../context/jobContext";
import { toast } from "react-toastify";
import { useState } from "react";

const JobsList = ({ jobsList }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const revalidator = useRevalidator();
  const { searchText } = useJobContext();
  const searchedJobs = searchText.length === 0 ? jobsList : jobsList.filter((job) =>
    job.title.toLowerCase().includes(searchText.toLowerCase()),
  );

console.log(jobsList)

  const handleRemoveJob = async (jobId) => {
    const toastId = toast.loading("Deleting job post...");
    try {
      setIsDeleting(true);
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/jobs/${jobId}`,
      );

      revalidator.revalidate();
      console.log(response);
      toast.update(toastId, {
        render: "Post deleted successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error to delete job post:", error);
      toast.update(toastId, {
        render: error.response?.data?.message || "Failed to delete job post.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <main className="container py-4">
      <h1>All Jobs </h1>

      <div className="row py-4">
        {searchedJobs && searchedJobs.length > 0 ? (
          searchedJobs.map((job) => (
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">{job.title}</h2>
                  <p className="card-text">
                    <strong>Company name: </strong>
                    {job.companyName}
                  </p>
                  <p className="card-text">
                    <strong>Location: </strong>
                    {job.location}
                  </p>
                  <p className="card-text">
                    <strong>Job Type: </strong>
                    {job.jobType}
                  </p>
                  <div className="d-flex gap-1">
                    <div className="">
                      <Link to={job.id} className="btn btn-primary flex-grow-1">
                        See Details{" "}
                      </Link>
                    </div>
                    <div className="">
                      <button
                        disabled={isDeleting}
                        onClick={() => handleRemoveJob(job.id)}
                        className="btn btn-danger flex-grow-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>
    </main>
  );
};

export default JobsList;
