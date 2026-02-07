import { Await,  useLoaderData } from "react-router";
import axios from "axios";
import JobsList from "../components/jobs/JobsList";
import { Suspense } from "react";
import Loading from "../loading/Loading";

const HomePage = () => {
  const { jobsList } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={jobsList}>
        {(isJobFetched) => <JobsList jobsList={isJobFetched} />}
      </Await>
    </Suspense>
  );
};

export default HomePage;

const fetchJobs = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/jobs`,
    );

    return response.data?.job;
  } catch (error) {
    console.error("Error occurred while fetching data.");
  }
};

export const loader = async () => {
  return {
    jobsList: fetchJobs(),
  };
};
