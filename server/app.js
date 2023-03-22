const express = require('express');
const { teacherRoutes } = require('./routes/teacherRoutes');
const { userRoutes } = require('./routes/userRoutes');
const app = express();

app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/teachers', teacherRoutes);

module.exports = { app };
