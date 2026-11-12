import AppHeader from '../components/AppHeader';
import ProgressBar from '../components/ProgressBar';
import TopicNode from '../components/TopicNode';
import { SUBJECT, TOPICS } from '../content/topics';
import { useProgress } from '../lib/progress';
import { STR } from '../lib/strings';

/** F1 — Peta Materi Bentuk Akar */
export default function TopicMapPage() {
  const { get } = useProgress();

  const available = TOPICS.filter((t) => t.available);
  const doneCount = available.filter((t) => get(t.id).status === 'done').length;
  const overall = available.length ? (doneCount / available.length) * 100 : 0;

  // Disarankan: subtopik pertama yang tersedia dan belum selesai
  const nextId = available.find((t) => get(t.id).status !== 'done')?.id;

  return (
    <>
      <AppHeader />
      <main className="mx-auto max-w-screen-sm px-4 pb-10 pt-5">
        <section aria-labelledby="map-title" className="mb-6">
          <p className="text-sm font-semibold text-primary">{SUBJECT.grade}</p>
          <h1 id="map-title" className="mt-0.5 text-[1.75rem] font-extrabold leading-tight">
            {SUBJECT.title}
          </h1>
          <div className="mt-4 rounded-2xl border border-line bg-surface p-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-semibold">{STR.mapHeading}</span>
              <span className="text-muted">{STR.progressOf(doneCount, available.length)}</span>
            </div>
            <ProgressBar value={overall} label={STR.progressOf(doneCount, available.length)} />
          </div>
        </section>

        <ol className="list-none" aria-label={STR.mapHeading}>
          {TOPICS.map((topic, i) => (
            <TopicNode
              key={topic.id}
              topic={topic}
              progress={get(topic.id)}
              isLast={i === TOPICS.length - 1}
              isNext={topic.id === nextId}
            />
          ))}
        </ol>
      </main>
    </>
  );
}
