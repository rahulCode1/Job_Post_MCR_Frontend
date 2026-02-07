import { Await, useLoaderData } from "react-router";
import axios from "axios";
import JobsDetails from "../components/jobs/JobDetails";
import { Suspense } from "react";
import Loading from "../loading/Loading";

const JobsDetailsPage = () => {
  const { jobDetails } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={jobDetails}>
        {(isJobDetailsFetched) => <JobsDetails jobInfo={isJobDetailsFetched} />}
      </Await>
    </Suspense>
  );
};

export default JobsDetailsPage;

const jobDetails = async (jobId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/jobs/${jobId}`,
    );

    return response.data?.job;
  } catch (error) {
    console.log(error);

    console.error("Error occurred while fetching data.");
  }
};

export const loader = async ({ request, params }) => {
  const jobId = params.id;
  return {
    jobDetails: jobDetails(jobId),
  };
};
