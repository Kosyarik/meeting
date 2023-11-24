const axios = require('axios');

const googleChatWebhookUrl = process.env.GOOGLE_CHAT_WEBHOOK_URL;
const tagArg = process.argv[2]; 
const tagMatch = tagArg.match(/(\d+\.\d+\.\d+)/);
const author =  process.env.GITHUB_ACTOR;
const repositoryName = process.env.GITHUB_REPOSITORY;



if (!googleChatWebhookUrl) {
  console.error("GOOGLE_CHAT_WEBHOOK_URL is not set in the environment variables.");
  process.exit(1);
}

if (!tag) {
  console.error("Tag notprovided as a command-line argument.");
  process.exit(1);
}

const message = {
    text: `New tag created: ${tagMatch[0]}\nAuthor: ${author}\nRepo Name: ${repositoryName}`
};

console.log('process', process);

axios.post(googleChatWebhookUrl, message)
  .then(response => {
    console.log("Notification sent  successfully.");
  })
  .catch(error => {
    console.error("Error sending notification:", error.message);
    process.exit(1);
  });
