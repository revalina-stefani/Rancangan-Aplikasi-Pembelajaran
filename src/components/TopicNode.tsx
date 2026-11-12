import { Link } from 'react-router-dom';
import type { Topic } from '../content/topics';
import type { TopicProgress } from '../lib/progress';
import { STR } from '../lib/strings';

interface Props {
  topic: Topic;
  progress: TopicProgress;
  isLast: boolean;
  /** subtopik yang disarankan dikerjakan berikutnya */
  isNext: boolean;
}

/** Satu titik pada jalur Peta Materi (docs/DESIGN.md §7.1). */
export default function TopicNode({ topic, progress, isLast, isNext }: Props) {
  const soon = !topic.available;
  const done = progress.status === 'done';
  const active = progress.status === 'inProgress';

  const statusText = soon
    ? STR.status.comingSoon
    : done
      ? STR.status.done
      : active
        ? `${STR.status.inProgress} · ${progress.percent}%`
        : STR.status.notStarted;

  const actionText = done ? STR.review : active ? STR.continue : STR.start;

  const dotClass = done
    ? 'bg-success text-white border-success'
    : active || isNext
      ? 'bg-primary text-white border-primary'
      : soon
        ? 'bg-bg text-muted border-line border-dashed'
        : 'bg-surface text-ink border-line';

  const body = (
    <div
      className={[
        'flex-1 rounded-2xl border p-4 transition-colors',
        soon ? 'border-dashed border-line opacity-70' : 'border-line bg-surface',
        isNext && !soon ? 'ring-2 ring-primary/40' : '',
      ].join(' ')}
    >
      <div className="flex flex-wrap items-center gap-2">
        {topic.focus && (
          <span className="rounded-full bg-primary-soft px-2 py-0.5 text-xs font-semibold text-primary">
            ⭐ {STR.focusBadge}
          </span>
        )}
        {isNext && !soon && (
          <span className="text-xs font-semibold text-primary">{STR.recommendedNext}</span>
        )}
      </div>
      <h3 className="mt-1 text-base font-bold leading-snug">{topic.title}</h3>
      <p className="mt-1 text-sm text-muted">{topic.goal}</p>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className={`text-sm ${done ? 'text-success font-semibold' : 'text-muted'}`}>
          {done && '✓ '}
          {statusText}
        </span>
        {!soon && (
          <span
            className={[
              'inline-flex min-h-[44px] items-center rounded-xl px-4 text-sm font-semibold',
              isNext || active ? 'bg-primary text-white' : 'bg-primary-soft text-primary',
            ].join(' ')}
          >
            {actionText}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <li className="relative flex gap-3">
      {/* garis jalur + titik bernomor */}
      <div className="flex flex-col items-center">
        <span
          className={`z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${dotClass}`}
          aria-hidden="true"
        >
          {done ? '✓' : topic.order}
        </span>
        {!isLast && <span className="w-0.5 flex-1 bg-line" aria-hidden="true" />}
      </div>

      <div className="flex-1 pb-4">
        {soon ? (
          <div aria-disabled="true">{body}</div>
        ) : (
          <Link
            to={`/topik/${topic.id}`}
            className="block rounded-2xl"
            aria-label={`${topic.order}. ${topic.title} — ${statusText}`}
          >
            {body}
          </Link>
        )}
      </div>
    </li>
  );
}
