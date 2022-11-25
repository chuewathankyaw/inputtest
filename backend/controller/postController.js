const fs = require("fs");
const pathMain = require("../filepath");

//to create the posts
const createPost = async (req, res, next) => {
  try {
    const dataBuffer = fs.readFileSync(pathMain + "/" + "users.json");
    let dataJson = JSON.parse(dataBuffer.toString());
    const result = {
      id: dataJson.length + 1,
      title: req.body.title,
      description: req.body.description,
    };
    dataJson.push(result);
    console.log("dat json", dataJson);
    fs.writeFile(
      pathMain + "/" + "users.json",
      JSON.stringify(dataJson),
      (error) => {
        if (error) console.log("errr");
      }
    );

    res.status(200).send(result);
  } catch (err) {
    res.status(401).json({ success: false, message: err });
  }
};

//to get posts
const getPost = async (req, res, next) => {
  try {
    fs.readFile(pathMain + "/" + "users.json", "utf8", (err, data) => {
      if (err) return res.json({ message: "error to load" });

      res.status(200).send(JSON.parse(data));
    });
  } catch (err) {
    res.status(404).json({ success: false, message: err });
  }
};

module.exports = {
  createPost,
  getPost,
};
