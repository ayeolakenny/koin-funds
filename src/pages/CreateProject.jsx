import { FormField } from "../components/custom/FormField";


export const CreateProject = () => {


  return (
    <div className="bg-gray-200 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {/* {isLoading && Loader...} */}
      <div className="shadow-md  mx-4 py-8 px-10 bg-white rounded-md my-24 p-[16px] w-11/12 ">
        <div className=" flex items-center  sm:min-w-[380px]  my-2 border-b-2 border-gray-200 ">
          <div className="pb-4 text-lg ">
            New Project
          </div>
        </div>
        <div className="flex gap-x-12 text-lg font-normal font-[Montserrat] my-8">
          <p classNam='leading-4'>Set up the basic of your fundraising campaign</p>
        </div>
        <div className="">
          <form className="flex w-full flex-col mt-[65px gap-[30px]">
            <div className="flex flex-wrap gap-[40px] flex-col">
              <div className="lg:flex gap-[40px]">
                <FormField
                  labelName="Name *"
                  placeholder="John Doe"
                  inputType="text"
                  // value={form.name}
                  handleChange={() => { }}
                  className="w-40"
                />
                <FormField
                  labelName="Project Title *"
                  placeholder="Robots to clean"
                  inputType="text"
                  // value={form.title}
                  handleChange={() => { }}
                  className="w-40 "

                />
              </div>
              <FormField
                labelName="Story *"
                placeholder="Write your story"
                isTextArea
                // value={form.description}
                handleChange={() => { }}
              // className="w-md"

              />

              <div className="lg:flex gap-[40px]">
                <FormField
                  labelName="Fundraising Goal *"
                  placeholder="ETH 0.50"
                  inputType="text"
                  // value={form.target}
                  handleChange={() => { }}
                />
                <FormField
                  labelName="End Date *"
                  placeholder="End Date"
                  inputType="date"
                  // value={form.deadline}
                  handleChange={() => { }}
                />
              </div>

              <div>

              </div>

            </div>

            <div className="flex justify-end items-end mt-[40px] gap-5">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>

            </div>

          </form>


        </div>
      </div>
    </div>
  );
};
