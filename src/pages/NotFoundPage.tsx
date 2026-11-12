import { Link } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import { STR } from '../lib/strings';

export default function NotFoundPage() {
  return (
    <>
      <AppHeader backTo="/" />
      <main className="mx-auto max-w-screen-sm px-4 pt-10 text-center">
        <p className="text-muted">{STR.notFound}</p>
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
