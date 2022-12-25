import { FC } from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { HistoryPage } from '../HistoryPage'
import { HomePage } from '../HomePage'

export const RoutesPage: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  )
}
