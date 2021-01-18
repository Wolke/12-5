const { GoogleSpreadsheet } = require("google-spreadsheet");

const getSheetById = async (id) => {
  const doc = new GoogleSpreadsheet(
    "1nrPga89s1mZMQ2XyExjkio03FbfyGU28CEXVB1wdXeU"
  );
  doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
  });
  await doc.loadInfo();

  let sheet = doc.sheetsById[id];
  return sheet;
};
exports.addCheck = async () => {
  let s = await getSheetById(2139820120);
  return;
};
