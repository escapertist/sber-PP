import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { routes } from './routes'
import { LecturesMediaPage } from './pages/LecturesMediaPage/LecturesMediaPage'
import { OrganizerOverviewPage } from './pages/OrganizerOverviewPage/OrganizerOverviewPage'
import { SignInPage } from './pages/SignInPage/SignInPage'
import { SpeakerDirectoryPage } from './pages/SpeakerDirectoryPage/SpeakerDirectoryPage'
import { SpeakerDashboardPage } from './pages/SpeakerDashboardPage/SpeakerDashboardPage'
import { SpeakerProfilePage } from './pages/SpeakerProfilePage/SpeakerProfilePage'
import { TalkDetailPage } from './pages/TalkDetailPage/TalkDetailPage'
import { TalksCatalogPage } from './pages/TalksCatalogPage/TalksCatalogPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.login} element={<SignInPage />} />

        <Route path={routes.speaker} element={<SpeakerDashboardPage />} />
        <Route path={routes.speakerProfile} element={<SpeakerProfilePage />} />
        <Route path={routes.speakerTalks} element={<TalksCatalogPage />} />
        <Route path={routes.speakerTalk} element={<TalkDetailPage />} />
        <Route path={routes.speakerMedia} element={<LecturesMediaPage />} />

        <Route path={routes.organizer} element={<OrganizerOverviewPage />} />
        <Route path={routes.organizerSpeakers} element={<SpeakerDirectoryPage />} />

        <Route path="*" element={<Navigate to={routes.login} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
