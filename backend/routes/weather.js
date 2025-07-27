const express = require("express");
const axios = require("axios");
const Weather = require("../models/Weather");
const router = express.Router();

const API_KEY = process.env.WEATHER_API_KEY;

router.get("/:city", async (req, res) => {
	const city = req.params.city;
	try {
		const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
		console.log(`📬 Fetched weather for ${city}:`, response.data.weather[0].description);
		const data = response.data;
		const newWeather = new Weather({
			city: data.name,
			temperature: data.main.temp,
			description: data.weather[0].description,
		});
		await newWeather.save();
		res.json(newWeather);
	} catch (error) {
    console.error(`❌ Failed to fetch weather for ${city}:`, error.message);
    res.status(404).json({ error: 'City not found' });
	}
});

router.get("/", async (req, res) => {
	try {
		const history = await Weather.find().sort({ searchedAt: -1 });
		res.json(history);
	} catch (err) {
		res.status(500).json({ error: "Cannot fetch history" });
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const result = await Weather.findByIdAndDelete(req.params.id);
		if (result) {
			res.json({ message: "Deleted successfully" });
		} else {
			res.status(404).json({ error: "History not found" });
		}
	} catch (err) {
		res.status(500).json({ error: "Server error while deleting" });
	}
});

module.exports = router;
