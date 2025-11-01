import { useState, useEffect } from 'react'
import Header from './components/Header'
import MapSection from './components/MapSection'
import ChartSection from './components/ChartSection'
import MethodologyCard from './components/MethodologyCard'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const [chartData, setChartData] = useState(null)
  const [timeline, setTimeline] = useState([])
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1000)

  useEffect(() => {
    // Load data
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    // Load your CSV and images
    // This will fetch from /public/data/
    const response = await fetch('/api/data')
    const data = await response.json()
    setImages(data.images)
    setChartData(data.chartData)
    setTimeline(data.timeline)
  }

  return (
    <>
      <Header />
      <div className="container">
        <Alert />
        <div className="main-card">
          <div className="split-view">
            <MapSection 
              images={images}
              currentFrame={currentFrame}
              setCurrentFrame={setCurrentFrame}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              speed={speed}
              setSpeed={setSpeed}
            />
            <ChartSection 
              chartData={chartData}
              timeline={timeline}
              currentYear={images[currentFrame]?.year}
            />
          </div>
        </div>
        <MethodologyCard />
        <ClimateCard />
        <ReferencesCard />
      </div>
    </>
  )
}

export default App