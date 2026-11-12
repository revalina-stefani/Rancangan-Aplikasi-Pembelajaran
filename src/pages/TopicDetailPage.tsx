import { Link, useParams } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import { findTopic } from '../content/topics';
import { STR } from '../lib/strings';
import NotFoundPage from './NotFoundPage';

/** Placeholder — isi materi (kartu mikro, contoh, latihan) dibangun di Fase 2. */
export default function TopicDetailPage() {
  const { id } = useParams();
  const topic = findTopic(id);
  if (!topic || !topic.available) return <NotFoundPage />;

  return (
    <>
      <AppHeader backTo="/" title={`${topic.order}. ${topic.title}`} />
      <main className="mx-auto max-w-screen-sm px-4 pb-10 pt-5">
        <h1 className="text-2xl font-extrabold leading-tight">{topic.title}</h1>
        <p className="mt-2 text-muted">{topic.goal}</p>
        <div className="mt-6 rounded-2xl border border-dashed border-line bg-surface p-5 text-muted">
          {STR.detailPlaceholder}
        </div>
        <Link
          to="/"
          className="mt-6 inline-flex min-h-[44px] items-center rounded-xl bg-primary px-5 font-semibold text-white"
        >
          {STR.backToMap}
        </Link>
      </main>
    </>
  );
}
