const Activity = require('../models/Activity');

exports.listActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
