// Data Configuration
const images = [
    {"year": 1992, "path": "/data/nightlights/harmonized_visualizations/harmonized_1992_nepal_viz.png"},
    {"year": 1993, "path": "/data/nightlights/harmonized_visualizations/harmonized_1993_nepal_viz.png"},
    {"year": 1994, "path": "/data/nightlights/harmonized_visualizations/harmonized_1994_nepal_viz.png"},
    {"year": 1995, "path": "/data/nightlights/harmonized_visualizations/harmonized_1995_nepal_viz.png"},
    {"year": 1996, "path": "/data/nightlights/harmonized_visualizations/harmonized_1996_nepal_viz.png"},
    {"year": 1997, "path": "/data/nightlights/harmonized_visualizations/harmonized_1997_nepal_viz.png"},
    {"year": 1998, "path": "/data/nightlights/harmonized_visualizations/harmonized_1998_nepal_viz.png"},
    {"year": 1999, "path": "/data/nightlights/harmonized_visualizations/harmonized_1999_nepal_viz.png"},
    {"year": 2000, "path": "/data/nightlights/harmonized_visualizations/harmonized_2000_nepal_viz.png"},
    {"year": 2001, "path": "/data/nightlights/harmonized_visualizations/harmonized_2001_nepal_viz.png"},
    {"year": 2002, "path": "/data/nightlights/harmonized_visualizations/harmonized_2002_nepal_viz.png"},
    {"year": 2003, "path": "/data/nightlights/harmonized_visualizations/harmonized_2003_nepal_viz.png"},
    {"year": 2004, "path": "/data/nightlights/harmonized_visualizations/harmonized_2004_nepal_viz.png"},
    {"year": 2005, "path": "/data/nightlights/harmonized_visualizations/harmonized_2005_nepal_viz.png"},
    {"year": 2006, "path": "/data/nightlights/harmonized_visualizations/harmonized_2006_nepal_viz.png"},
    {"year": 2007, "path": "/data/nightlights/harmonized_visualizations/harmonized_2007_nepal_viz.png"},
    {"year": 2008, "path": "/data/nightlights/harmonized_visualizations/harmonized_2008_nepal_viz.png"},
    {"year": 2009, "path": "/data/nightlights/harmonized_visualizations/harmonized_2009_nepal_viz.png"},
    {"year": 2010, "path": "/data/nightlights/harmonized_visualizations/harmonized_2010_nepal_viz.png"},
    {"year": 2011, "path": "/data/nightlights/harmonized_visualizations/harmonized_2011_nepal_viz.png"},
    {"year": 2012, "path": "/data/nightlights/harmonized_visualizations/harmonized_2012_nepal_viz.png"},
    {"year": 2014, "path": "/data/nightlights/harmonized_visualizations/harmonized_2014_nepal_viz.png"},
    {"year": 2015, "path": "/data/nightlights/harmonized_visualizations/harmonized_2015_nepal_viz.png"},
    {"year": 2016, "path": "/data/nightlights/harmonized_visualizations/harmonized_2016_nepal_viz.png"},
    {"year": 2017, "path": "/data/nightlights/harmonized_visualizations/harmonized_2017_nepal_viz.png"},
    {"year": 2018, "path": "/data/nightlights/harmonized_visualizations/harmonized_2018_nepal_viz.png"},
    {"year": 2019, "path": "/data/nightlights/harmonized_visualizations/harmonized_2019_nepal_viz.png"},
    {"year": 2020, "path": "/data/nightlights/harmonized_visualizations/harmonized_2020_nepal_viz.png"},
    {"year": 2021, "path": "/data/nightlights/harmonized_visualizations/harmonized_2021_nepal_viz.png"},
    {"year": 2022, "path": "/data/nightlights/harmonized_visualizations/harmonized_2022_nepal_viz.png"},
    {"year": 2023, "path": "/data/nightlights/harmonized_visualizations/harmonized_2023_nepal_viz.png"},
    {"year": 2024, "path": "/data/nightlights/harmonized_visualizations/harmonized_2024_nepal_viz.png"}
];

const chartData = {
    "years": [1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    "total_radiance": [31892.0, 31192.0, 35340.0, 49012.0, 53462.0, 49520.0, 56410.0, 66947.0, 78411.0, 88627.0, 76445.0, 66931.0, 99469.0, 80796.0, 68163.0, 83868.0, 70127.0, 65631.0, 67512.0, 68281.0, 49678.0, 103300.0, 115449.0, 115466.0, 216802.0, 234753.0, 250123.0, 296586.0, 519823.0, 555992.0, 931684.0, 1258947.0],
    "total_radiance_lower": [25513.600000000002, 24953.600000000002, 28272.0, 39209.6, 42769.600000000006, 39616.0, 45128.0, 53557.600000000006, 62728.8, 70901.6, 61156.0, 53544.8, 79575.20000000001, 64636.8, 54530.4, 67094.40000000001, 56101.600000000006, 52504.8, 54009.600000000006, 54624.8, 39742.4, 92970.0, 103904.1, 103919.40000000001, 195121.80000000002, 211277.7, 225110.7, 266927.4, 467840.7, 500392.8, 838515.6, 1133052.3],
    "total_radiance_upper": [38270.4, 37430.4, 42408.0, 58814.4, 64154.399999999994, 59424.0, 67692.0, 80336.4, 94093.2, 106352.4, 91734.0, 80317.2, 119362.79999999999, 96955.2, 81795.59999999999, 100641.59999999999, 84152.4, 78757.2, 81014.4, 81937.2, 59613.6, 113630.00000000001, 126993.90000000001, 127012.6, 238482.2, 258228.30000000002, 275135.30000000005, 326244.60000000003, 571805.3, 611591.2000000001, 1024852.4000000001, 1384841.7000000002],
    "total_radiance_growth": [0.0, -2.194907813871816, 13.298281610669394, 38.6870401810979, 9.0794091242961, -7.373461524073177, 13.91357027463651, 18.67931217869172, 17.123993606883058, 13.028784226702882, -13.745246933778644, -12.44554908757931, 48.61424452047631, -18.772682946445627, -15.635675033417495, 23.04035913912239, -16.38407974436018, -6.411225348296656, 2.866023677835172, 1.1390567602796553, -27.244767944230464, 107.93912798421839, 11.760890609874153, 0.014725116718206088, 87.76263142396897, 8.279905166926493, 6.54730716966343, 18.57606057819552, 75.26889333953726, 6.957945300611934, 67.57147584857337, 35.125965456098854]
};

const timeline = [
    {"year": 1995, "label": "Kali Gandaki A", "description": "144 MW hydropower commissioned", "color": "#10b981"},
    {"year": 2015, "label": "Earthquake & Blockade", "description": "7.8M earthquake + India border blockade", "color": "#ef4444"},
    {"year": 2016, "label": "Kulman Ghising (NEA)", "description": "MD appointment, load-shedding reduction", "color": "#3b82f6"},
    {"year": 2018, "label": "Upper Tamakoshi", "description": "456 MW hydropower online", "color": "#10b981"},
    {"year": 2021, "label": "NDC Update", "description": "Net-zero by 2045, 15 GW by 2030", "color": "#8b5cf6"}
];

// Animation State
let currentFrame = 0;
let isPlaying = false;
let animationInterval;
let animationSpeed = 1000;

// DOM Elements
const mapImage = document.getElementById('mapImage');
const mapPlaceholder = document.getElementById('mapPlaceholder');
const yearOverlay = document.getElementById('yearOverlay');
const frameSlider = document.getElementById('frameSlider');
frameSlider.max = images.length - 1;

// Display Functions
function updateDisplay() {
    const current = images[currentFrame];
    yearOverlay.textContent = current.year;

    if (current.path.includes('placeholder')) {
        mapImage.style.display = 'none';
        mapPlaceholder.style.display = 'flex';
        mapPlaceholder.innerHTML = `Visualization for ${current.year}<br><small style="font-size:0.8em; margin-top:8px;">Spatial data visualization would appear here</small>`;
    } else {
        mapImage.src = current.path;
        mapImage.style.display = 'block';
        mapPlaceholder.style.display = 'none';
    }

    frameSlider.value = currentFrame;
    updateChartMarker(current.year);
}

// Navigation Functions
function nextFrame() {
    currentFrame = (currentFrame + 1) % images.length;
    updateDisplay();
}

function previousFrame() {
    currentFrame = (currentFrame - 1 + images.length) % images.length;
    updateDisplay();
}

function seekFrame(f) {
    currentFrame = parseInt(f);
    updateDisplay();
}

// Playback Controls
function togglePlay() {
    if (isPlaying) {
        clearInterval(animationInterval);
        document.getElementById('playBtn').textContent = '▶ Play Animation';
        isPlaying = false;
    } else {
        animationInterval = setInterval(nextFrame, animationSpeed);
        document.getElementById('playBtn').textContent = '⏸ Pause';
        isPlaying = true;
    }
}

function resetAnimation() {
    currentFrame = 0;
    updateDisplay();
    if (isPlaying) togglePlay();
}

function setSpeed(s) {
    animationSpeed = s;
    if (isPlaying) {
        clearInterval(animationInterval);
        animationInterval = setInterval(nextFrame, s);
    }
}

// Chart Functions
function getTimelineAnnotations() {
    const positions = [
        {y: 0.95, ax: -60},  // 1995
        {y: 0.75, ax: 60},   // 2015
        {y: 0.55, ax: -60},  // 2016
        {y: 0.35, ax: 60},   // 2018
        {y: 0.15, ax: -60}   // 2021
    ];

    return timeline.map((event, idx) => ({
        x: event.year,
        y: positions[idx].y,
        yref: 'paper',
        text: `<b>${event.year}:</b> ${event.label}`,
        showarrow: true,
        arrowhead: 2,
        arrowsize: 1,
        arrowwidth: 1.5,
        arrowcolor: event.color,
        ax: positions[idx].ax,
        ay: -20,
        font: {
            size: 10,
            color: '#1e293b',
            family: 'Inter, sans-serif'
        },
        bgcolor: 'rgba(255,255,255,0.95)',
        bordercolor: event.color,
        borderwidth: 2,
        borderpad: 4
    }));
}

function getTimelineShapes() {
    return timeline.map(event => ({
        type: 'line',
        x0: event.year,
        x1: event.year,
        y0: 0,
        y1: 1,
        yref: 'paper',
        line: {
            color: event.color,
            width: 2,
            dash: 'dot'
        }
    }));
}

function drawChart() {
    const yData = chartData.total_radiance;
    const yLower = chartData.total_radiance_lower;
    const yUpper = chartData.total_radiance_upper;
    const yTitle = 'Total Radiance ';

    const traces = [];

    // Add uncertainty band
    traces.push({
        x: chartData.years.concat(chartData.years.slice().reverse()),
        y: yUpper.concat(yLower.slice().reverse()),
        fill: 'toself',
        fillcolor: 'rgba(59, 130, 246, 0.15)',
        line: {color: 'transparent'},
        showlegend: true,
        name: 'Uncertainty (±10-20%)',
        hoverinfo: 'skip'
    });

    // Main trace
    traces.push({
        x: chartData.years,
        y: yData,
        type: 'scatter',
        mode: 'lines+markers',
        line: {color: '#1e3a8a', width: 3},
        marker: {size: 6, color: '#3b82f6', line: {width: 1.5, color: '#1e3a8a'}},
        name: yTitle,
        hovertemplate: '%{x}: %{y:.2f}<extra></extra>'
    });

    const layout = {
        margin: {l: 70, r: 30, t: 80, b: 60},
        paper_bgcolor: 'white',
        plot_bgcolor: 'white',
        font: {family: 'Inter, sans-serif', color: '#2d3748'},
        xaxis: {
            title: 'Year',
            gridcolor: '#e2e8f0',
            showgrid: true
        },
        yaxis: {
            title: yTitle,
            gridcolor: '#e2e8f0',
            zeroline: false,
            zerolinecolor: '#94a3b8',
            zerolinewidth: 2
        },
        annotations: getTimelineAnnotations(),
        shapes: getTimelineShapes(),
        hovermode: 'x unified'
    };

    Plotly.newPlot('timeSeriesChart', traces, layout, {displayModeBar: false, responsive: true});
}

function updateChartMarker(year) {
    const currentYear = year;
    const shapes = getTimelineShapes();

    // Add current year marker
    shapes.push({
        type: 'line',
        x0: currentYear,
        x1: currentYear,
        y0: 0,
        y1: 1,
        yref: 'paper',
        line: {
            color: '#fbbf24',
            width: 4,
            dash: 'solid'
        }
    });

    Plotly.relayout('timeSeriesChart', {shapes: shapes});
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    drawChart();
    updateDisplay();
});
