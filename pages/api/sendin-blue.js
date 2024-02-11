const SibApiV3Sdk = require('sib-api-v3-sdk');

function SendInBlueEmailCampaign() {
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = "xsmtpsib-f5f426f4a000b94dd02ab3cb6f4c8c45bfbb16638ac47eaa03c35c4e155ba0bc-ZCAQHtVcOFkPprdK";

  const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
  const emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

  emailCampaigns.name = "Campaign sent via the API";
  emailCampaigns.subject = "My subject";
  emailCampaigns.sender = { "name": "From name", "email": "prakashsanu12@gmail.com" };
  emailCampaigns.type = "classic";
  emailCampaigns.htmlContent = 'Congratulations! You successfully sent this example campaign via the Brevo API.';
  emailCampaigns.recipients = { listIds: [2, 7] };
  emailCampaigns.scheduledAt = '2018-01-01 00:00:01';

  return apiInstance.SendInBlueEmailCampaign(emailCampaigns);
}

export default SendInBlueEmailCampaign;
