// components/LeadGenerationForm.js
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TreatmentOption } from "@/types/ProcedureType";

interface IFormInput {
  name: string;
  email: string;
  treatment: string;
  description?: string;
}

const treatmentOptions: TreatmentOption[] = [
  { value: "teethWhitening", label: "Teeth Whitening" },
  { value: "orthodontics", label: "Orthodontics" },
  { value: "cleaning", label: "Cleaning" },
  // Add more treatment options as needed
];

const LeadGenerationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto ">
      <div className="mb-4">
        <label
          htmlFor="treatment"
          className="block text-sm font-medium text-gray-700"
        >
          Treatment
        </label>
        <select
          id="treatment"
          className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("treatment", { required: true })}
        >
          <option value="">Select a treatment</option>
          {treatmentOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.treatment && (
          <span className="text-xs text-red-600">This field is required</span>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          id="name"
          className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-xs text-red-600">This field is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium  text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-xs text-red-600">This field is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description (Optional)
        </label>
        <textarea
          id="description"
          rows={4}
          className="mt-1 block w-full h border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("description")}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-coral-red text-white py-2 px-4 rounded hover:bg-coral-red-600 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default LeadGenerationForm;
