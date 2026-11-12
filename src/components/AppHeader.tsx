import { Link } from 'react-router-dom';
import { STR } from '../lib/strings';

interface Props {
  /** Jika diisi, tampilkan tombol kembali ke path ini */
  backTo?: string;
  title?: string;
}

export default function AppHeader({ backTo, title }: Props) {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-screen-sm items-center gap-2 px-4">
        {backTo ? (
          <Link
            to={backTo}
            aria-label={STR.back}
            className="-ml-2 flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-surface"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        ) : (
          <img src="/favicon.svg" alt="" width="28" height="28" className="rounded-lg" />
        )}
        <span className="truncate text-lg font-bold">{title ?? STR.appName}</span>
      </div>
    </header>
  );
}
