import { Form, useNavigation } from "react-router";

const JobForm = () => {
  const jobType = [
    "Full-time (On-site)",
    "Part-time (On-site)",
    "Full-time (Remote)",
    "Part-time (Remote)",
  ];

  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <main className="container py-4">
      <h1>Post a Job </h1>

      <Form method="post">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            // required
            placeholder="Enter job title"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Enter company name"
            // required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter company location"
            // required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">
            Salary
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            placeholder="Enter job salary"
            // required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="jobType" className="form-label">
            Job Type
          </label>
          <select name="jobType" className="form-select" required>
            {jobType.map((type) => (
              <option value={type}>{type} </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            // required
            placeholder="Enter job description"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="qualifications" className="form-label">
            Qualifications
          </label>
          <textarea
            type="text"
            id="qualifications"
            name="qualifications"
            // required
            placeholder="Enter job qualifications with comma(',') separated"
            className="form-control"
          />
        </div>

        <button disabled={isSubmitting} className="btn btn-primary px-4">
          Post Job{" "}
        </button>
      </Form>
    </main>
  );
};

export default JobForm;
