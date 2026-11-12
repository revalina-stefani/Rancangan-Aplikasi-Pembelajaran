import { Route, Routes } from 'react-router-dom';
import TopicMapPage from './pages/TopicMapPage';
import TopicDetailPage from './pages/TopicDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TopicMapPage />} />
      <Route path="/topik/:id" element={<TopicDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
