const { Worker } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis({ maxRetriesPerRequest: null });

const worker = new Worker(
  "files",
  async (job) => {
    console.log(job.data);
  },
  { connection }
);
