const express = require('express');
const cors = require('cors');
const { teacherRoutes } = require('./routes/teacherRoutes');
const { userRoutes } = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/teachers', teacherRoutes);

module.exports = { app };
