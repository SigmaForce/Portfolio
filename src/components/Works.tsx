import React from "react";
import Jobs from "./Jobs";

import { JobsList } from "../config/jobs";

export default function Works() {
  return (
    <section className="container min-h-screen h-full w-full flex flex-col items-center justify-center text-[#0694FE] mx-auto py-16 px-4 lg:px-0">
      <div className="grid grid-cols-12 w-full gap-8">
        {JobsList.frontend.map((job) => (
          <div className="border rounded-lg p-8 flex flex-col gap-4 col-span-12 lg:col-span-4 w-full ">
            <Jobs
              slug={job.slug}
              banner={job.banner}
              excerpt={job.excerpt}
              url={job.url}
              techs={job.techs}
              title={job.title}
              images={job.images}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
