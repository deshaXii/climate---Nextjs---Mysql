const db = require("../db");
const helper = require("../helper");

const getAllImages = async (req, res) => {
  const rows = await db.query(`SELECT * FROM images`);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

const setIntro = async (req, res) => {
  const rows = await db.query(`UPDATE images SET intro = ?`, [
    req.file.filename,
  ]);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

const setServicesSection = async (req, res) => {
  const rows = await db.query(`UPDATE images SET servicessection = ?`, [
    req.file.filename,
  ]);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};
const setAbout1 = async (req, res) => {
  const rows = await db.query(`UPDATE images SET about1 = ?`, [
    req.file.filename,
  ]);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};
const setAbout2 = async (req, res) => {
  const rows = await db.query(`UPDATE images SET about2 = ?`, [
    req.file.filename,
  ]);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};
const setVideo = async (req, res) => {
  const rows = await db.query(`UPDATE images SET video = ?`, [
    req.file.filename,
  ]);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};
const setVision = async (req, res) => {
  const rows = await db.query(`UPDATE images SET vision = ?`, [
    req.file.filename,
  ]);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};
const setServices = async (req, res) => {
  const rows = await db.query(`UPDATE images SET services = ?`, [
    req.file.filename,
  ]);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};
const setTeams = async (req, res) => {
  const rows = await db.query(`UPDATE images SET team = ?`, [
    req.file.filename,
  ]);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};
const setNews = async (req, res) => {
  const rows = await db.query(`UPDATE images SET news = ?`, [
    req.file.filename,
  ]);
  const data = helper.emptyOrRows(rows);
  res.json(data);
  return {
    data,
  };
};

module.exports = {
  setIntro,
  setServicesSection,
  setAbout1,
  setAbout2,
  setVideo,
  setVision,
  setServices,
  setTeams,
  setNews,
  getAllImages,
};
