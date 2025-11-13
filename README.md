# Nepal Nightlights Analysis Dashboard

An interactive web-based visualization dashboard analyzing nighttime light data for Nepal from 1992 to 2024, tracking energy access and economic development through satellite imagery.

## Overview

This project provides a comprehensive visualization of Nepal's nighttime light intensity over three decades, harmonizing data from DMSP-OLS (1992-2013) and VIIRS-DNB (2014-2024) satellite systems. The analysis serves as a proxy for electricity access, urbanization, and economic development.

## Features

- **Interactive Time-Series Animation**: Navigate through 32 years of nightlight data
- **Temporal Evolution Chart**: Visualize total radiance trends with uncertainty bands
- **Historical Event Markers**: Key energy infrastructure and policy milestones
- **Responsive Design**: Mobile-friendly interface with adaptive layouts
- **Climate & SDG Context**: Connect nightlight growth to climate goals and sustainable development

## Project Structure

```
electricity_growth_nightlight_data/
├── assets/
│   ├── scripts/
│   │   └── main.js              # Core JavaScript functionality
│   └── styles/
│       └── main.css             # Main stylesheet
├── data/
│   └── nightlights/
│       ├── harmonized_stats/
│       │   └── harmonized_country_stats.csv
│       └── harmonized_visualizations/
│           └── harmonized_*_nepal_viz.png (1992-2024)
├── docs/                        # Documentation files
├── index.html                   # Main dashboard page
├── vercel.json                  # Vercel deployment configuration
└── README.md                    # Project documentation
```

## Data Sources

### Satellite Systems
- **DMSP-OLS (1992-2013)**: Defense Meteorological Satellite Program Operational Linescan System
- **VIIRS-DNB (2014-2024)**: Visible Infrared Imaging Radiometer Suite Day/Night Band

### Harmonization Methodology
- Based on Li et al. (2020) intercalibration methodology
- Uncertainty bands: ±15-20% for DMSP, ±10% for VIIRS
- Spatial resolution: 1km nominal, resampled to common grid
- Temporal resolution: Annual composites (cloud-free, stable lights)

## Key Historical Events

| Year | Event | Description | Impact |
|------|-------|-------------|--------|
| 1995 | Kali Gandaki A | 144 MW hydropower commissioned | Increased rural electrification |
| 2015 | Earthquake & Blockade | 7.8M earthquake + India border blockade | Temporary decline in energy access |
| 2016 | Kulman Ghising (NEA) | Managing Director appointment at Nepal Electricity Authority | Load-shedding reduction initiatives |
| 2018 | Upper Tamakoshi | 456 MW hydropower plant online | Major capacity expansion |
| 2021 | NDC Update | Nationally Determined Contribution revision | Net-zero by 2045, 15 GW by 2030 target |

## Technical Implementation

### Technologies Used
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Visualization**: Plotly.js 2.27.0
- **Deployment**: Vercel
- **Data Processing**: CSV format for statistics

### Key Features Implementation

#### Animation System
- Frame-based navigation with smooth transitions
- Adjustable playback speeds (Slow: 2s, Normal: 1s, Fast: 0.5s)
- Synchronized map and chart updates

#### Chart Visualization
- Uncertainty bands using Plotly fill areas
- Event annotations with color-coded markers
- Responsive layout with mobile optimization

## Climate & Sustainable Development Context

### SDG 7: Affordable & Clean Energy
Nepal achieved ~93% household electrification by 2023, approaching the 2030 universal access target.

### Nepal's NDC Commitment (2021 Update)
- **Net-zero emissions target**: 2045
- **Installed capacity goal**: 15 GW by 2030 (primarily hydropower)

### Climate Vulnerabilities
- Hydropower-dependent grid faces risks from glacial melt
- Precipitation variability and extreme weather events
- Need for climate-resilient infrastructure

## Installation & Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server for local development (optional)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Sujan-Bhattarai12/electricity_growth_nightlight_data.git
cd electricity_growth_nightlight_data
```

2. Serve the files using a local web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000
```

3. Open your browser to `http://localhost:8000`

### Deployment

The project is configured for Vercel deployment:

```bash
# Deploy to Vercel
vercel deploy

# Deploy to production
vercel --prod
```

## Data Update Process

To add new year's data:

1. Add visualization PNG to `data/nightlights/harmonized_visualizations/`
   - Naming convention: `harmonized_YYYY_nepal_viz.png`

2. Update statistics CSV: `data/nightlights/harmonized_stats/harmonized_country_stats.csv`

3. Update data arrays in `assets/scripts/main.js`:
   - Add new entry to `images` array
   - Update `chartData` with new year's statistics

## References

- Li, X., et al. (2020). "Harmonizing DMSP and VIIRS nighttime light data from 1992-2020 at the global scale." *Remote Sensing of Environment*
- Nepal Electricity Authority (NEA) Annual Reports (2015-2023)
- World Bank: Electricity Access Indicators for Nepal
- Nepal NDC (2021 Update): Nationally Determined Contribution to UNFCCC
- Census of Nepal (2021): Household Electrification Statistics

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is available for educational and research purposes. Please cite appropriately if using this data or methodology.

## Contact

For questions or collaboration opportunities, please open an issue in the GitHub repository.

## Acknowledgments

- NASA Earth Observations for satellite data access
- Li et al. (2020) for harmonization methodology
- Nepal Electricity Authority for validation data
- Open-source community for visualization tools

---

**Last Updated**: November 2024
**Data Coverage**: 1992-2024
**Version**: 1.0.0
