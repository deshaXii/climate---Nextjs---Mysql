const db = require("../db");
const helper = require("../helper");

const getSeo = async (req, res) => {
  const rows = await db.query(`SELECT * FROM seo`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

async function addSeo(req, res) {
  const result = await db.query(
    `INSERT INTO seo (intro_title, intro_subtitle, intro_description, meet_the_team_title, meet_the_team_subtitle, meet_the_team_description, latest_news_title, latest_news_subtitle, latest_news_description, contact_title, contact_description, news_title, news_description, team_title, team_description, how_can_title, how_can_description, vision_title, vision_description, home_title, home_description) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      req.body.intro_title,
      req.body.intro_subtitle,
      req.body.intro_description,
      req.body.meet_the_team_title,
      req.body.meet_the_team_subtitle,
      req.body.meet_the_team_description,
      req.body.latest_news_title,
      req.body.latest_news_subtitle,
      req.body.latest_news_description,
      req.body.contact_title,
      req.body.contact_description,
      req.body.news_title,
      req.body.news_description,
      req.body.team_title,
      req.body.team_description,
      req.body.how_can_title,
      req.body.how_can_description,
      req.body.vision_title,
      req.body.vision_description,
      req.body.home_title,
      req.body.home_description,
    ]
  );

  let message = "Error while adding site seo";
  if (result.affectedRows) {
    message = "site seo created successfully";
  }
  res.send(message);
  return {
    message,
  };
}

async function editSeo(req, res) {
  const result = await db.query(
    `UPDATE seo SET intro_title = ?, intro_subtitle = ?, intro_description = ?, meet_the_team_title = ?, meet_the_team_subtitle = ?, meet_the_team_description = ?, latest_news_title = ?, latest_news_subtitle = ?, latest_news_description = ?, contact_title = ?, contact_description = ?, news_title = ?, news_description = ?, team_title = ?, team_description = ?, how_can_title = ?, how_can_description = ?, vision_title = ?, vision_description = ?, home_title = ?, home_description = ?`,
    [
      req.body.intro_title,
      req.body.intro_subtitle,
      req.body.intro_description,
      req.body.meet_the_team_title,
      req.body.meet_the_team_subtitle,
      req.body.meet_the_team_description,
      req.body.latest_news_title,
      req.body.latest_news_subtitle,
      req.body.latest_news_description,
      req.body.contact_title,
      req.body.contact_description,
      req.body.news_title,
      req.body.news_description,
      req.body.team_title,
      req.body.team_description,
      req.body.how_can_title,
      req.body.how_can_description,
      req.body.vision_title,
      req.body.vision_description,
      req.body.home_title,
      req.body.home_description,
    ]
  );

  let message = "Error While update site seo";
  if (result.affectedRows) {
    message = "site seo updated successfully";
  }
  res.send(result);
  return {
    message,
  };
}

module.exports = {
  addSeo,
  getSeo,
  editSeo,
};
