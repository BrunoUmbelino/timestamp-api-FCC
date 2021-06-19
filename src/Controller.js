const date = (request, response) => {
  let param = request.params.date;

  const dateValidation = /(\d\d\d\d)-(\d\d)-(\d\d)/g.test(param);
  const unixValidation = /(^\d+$)/g.test(param);
  const undefinedParam = param === undefined;

  if (dateValidation || unixValidation || undefinedParam) {
    if (undefinedParam) {
      const date = new Date();
      const utc = date.toUTCString();
      const dateStr = date.toString();
      const unix = Date.parse(date);

      response.json({ dateStr, utc, unix });
    }
    if (dateValidation) {
      const date = new Date();
      const utc = date.toUTCString();
      const dateStr = date.toString();
      const unix = Date.parse(param);

      response.json({ dateStr, utc, unix });
    }
    if (unixValidation) {
      let unix = parseInt(param);
      const date = new Date(unix);
      const utc = date.toUTCString();
      const dateStr = date.toString();

      response.json({ dateStr, utc, unix });
    }
  } else response.status(400).json({ error: "Invalid Date" });
};

module.exports = { date };
