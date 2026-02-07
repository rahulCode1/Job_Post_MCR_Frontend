import JobForm from "../components/jobs/JobForm";
import axios from "axios";
import { redirect } from "react-router";
import { toast } from "react-toastify";

const AddNewJobPage = () => {
  return (
    <>
      <JobForm />
    </>
  );
};

export default AddNewJobPage;

export const action = async ({ request }) => {
  const toastId = toast.loading("Adding jobs...");
  const formData = await request.formData();

  const postData = {
    title: formData.get("title"),
    companyName: formData.get("companyName"),
    location: formData.get("location"),
    salary: formData.get("salary"),
    jobType: formData.get("jobType"),
    description: formData.get("description"),
    qualifications: formData.get("qualifications"),
  };

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/jobs`,
      postData,
    );
    console.log(response);
    toast.update(toastId, {
      render: response.data.message || "New Job post added successfully",
      type: "success",
      autoClose: 3000,
      isLoading: false,
    });
    return redirect("/");
  } catch (err) {
    console.log(err);
    toast.update(toastId, {
      render: err.response?.data?.message || "Failed to add job post",
      isLoading: false,
      autoClose: 3000,
      type: "error",
    });
    console.error("Error to add job post:", err);
  }
};
