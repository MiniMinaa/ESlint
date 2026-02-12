// A function that searches for jobs
// A function that runs our app
// The command to start everything
interface ResponseData {
  hits: Job[];
}
interface Employer {
  name: string;
}
interface WorkplaceAddress {
  municipality: string;
}
interface Job {
  publication_date: string;
  headline: string;
  employer: Employer;
  workplace_address: WorkplaceAddress;
}

const searchJobs = async (profession: string, city: string): Promise<void> => {
  try {
    const url: string = `https://jobsearch.api.jobtechdev.se/search?q=${profession} ${city}&offset=0&limit=10`;
    const response: Response = await fetch(url);
    if (!response.ok) {
      throw new Error(`error! status: ${response.status}`);
    }
    const data: ResponseData = await response.json();

    console.log(`\nFound ${data.hits.length} jobs`);
    console.log("-".repeat(50));
    //Console.log(data);

    data.hits.forEach((job: Job, index: number) => {
      const pubDate: Date = new Date(job.publication_date);
      //Console.log("pubDate: ", pubDate);

      console.log(`${index + 1}. ${job.headline}`);
      console.log(`Company: ${job.employer.name}`);
      console.log(`Location: ${job.workplace_address.municipality}`);
      console.log(`Publication: ${pubDate.toISOString().split("T")[0]}`);
      console.log("-".repeat(50));
    });
  } catch (error) {
    console.log("something went wrong when fetching jobs");
    console.error(error);
  }
};

const runApp = (): void => {
  try {
    console.log("Welcome to the Job Search App!");
    console.log("Software developer in Malmö");
    const profession: string = "Software Developer";
    const city: string = "Malmö";

    searchJobs(profession, city);
  } catch (error) {
    console.error(error);
  }
};

runApp();
