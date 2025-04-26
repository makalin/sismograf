# Sismograf

Sismograf is a collective earthquake monitoring application designed to provide real-time data, alerts, and community-driven insights on seismic activities. Our goal is to empower individuals and communities with fast, reliable, and transparent earthquake monitoring tools.

---

## 🚀 **Features**

- **Real-Time Earthquake Data**: Get live updates on earthquake occurrences, magnitude, depth, and location.
- **User Alerts**: Receive push notifications for seismic activity in your area.
- **Community Reporting**: Allow users to report shaking intensity, which helps in crowd-sourcing earthquake impact data.
- **Interactive Maps**: View earthquake data on a dynamic map with geolocation support.
- **Data Analytics**: Track historical earthquake data and visualize trends over time.

---

## 🛠️ **Technologies Used**

- **Frontend**: React Native for cross-platform mobile development (iOS & Android).
- **Backend**: Node.js, Express, and a real-time data processing pipeline using WebSockets.
- **Database**: MongoDB for storing earthquake event data and user reports.
- **API Integration**: Integration with official seismic data providers such as USGS, EMSC, or local monitoring stations.
- **Push Notifications**: Firebase Cloud Messaging (FCM) for timely alerts.

---

## 📦 **Project Structure**

```
sismograf/
├── frontend/                 # React Native frontend
│   ├── src/
│   │   ├── screens/         # Screen components
│   │   ├── components/      # Reusable components
│   │   ├── services/        # API services
│   │   └── utils/           # Utility functions
│   ├── App.js               # Main application component
│   └── package.json         # Frontend dependencies
├── backend/                  # Node.js backend
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── models/          # Database models
│   │   ├── controllers/     # Route controllers
│   │   ├── services/        # Business logic
│   │   └── tests/           # Test files
│   ├── index.js             # Server entry point
│   └── package.json         # Backend dependencies
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation
```

---

## 📦 **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/makalin/sismograf.git
   cd sismograf
   ```

2. **Install Dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set Environment Variables**
   Create a `.env` file in the root directory and add the following keys:
   ```env
   # Backend
   PORT=5000
   DATABASE_URL=your_mongodb_url
   TEST_DATABASE_URL=your_test_mongodb_url
   FCM_SERVER_KEY=your_fcm_server_key

   # Frontend
   API_URL=http://localhost:5000
   ```

4. **Start the Development Servers**
   ```bash
   # From the root directory
   npm start
   ```

---

## 🚦 **Usage**

1. **Launch the App**: Open the Sismograf app on your device.
2. **Enable Location Access**: Allow location access to get personalized earthquake alerts.
3. **View Earthquake Data**: Browse live earthquake events and view event details.
4. **Report Shaking**: Use the 'Report Shaking' button to submit your experience of the earthquake.

---

## 📄 **API Endpoints**

| **Method** | **Endpoint**         | **Description**             |
|------------|---------------------|-----------------------------|
| GET        | /api/earthquakes     | Get recent earthquake data  |
| GET        | /api/earthquakes/:id | Get specific earthquake     |
| POST       | /api/reports         | Submit a user shaking report|
| GET        | /api/history         | Get historical earthquake data|

---

## 🧪 **Testing**

Run tests for both frontend and backend:

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd ../frontend
npm test
```

---

## 🤝 **Contributing**

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Create a pull request.

Please follow our [contribution guidelines](CONTRIBUTING.md) for detailed instructions.

---

## 📚 **Documentation**

The full documentation for Sismograf is available [here](https://github.com/username/sismograf/wiki).

---

## 🐛 **Reporting Issues**

If you encounter any issues, please [create a new issue](https://github.com/username/sismograf/issues) with a detailed description of the problem and steps to reproduce it.

---

## ✨ **Future Plans**

- **Machine Learning Models**: Introduce predictive analysis for seismic activity.
- **Offline Support**: Allow access to historical earthquake data when offline.
- **Multi-Language Support**: Provide translations for multiple languages.
- **Customization**: Enable users to customize alert notifications and event filters.

---

## 📜 **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

**Stay aware, stay safe. Download Sismograf today!**

