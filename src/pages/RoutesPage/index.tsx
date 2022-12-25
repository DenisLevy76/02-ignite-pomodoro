import { FC } from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { HistoryPage } from '../HistoryPage'
import { HomePage } from '../HomePage'
import { DefaultLayout } from '../layouts/DefaultLayout'

export const RoutesPage: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Route>
    </Routes>
  )
}
