/**
 * Progres sementara (Fase 1) disimpan di localStorage.
 * Akan diganti IndexedDB/Dexie di Fase 4 (docs/ARCHITECTURE.md).
 */
import { useCallback, useEffect, useState } from 'react';

export type TopicStatus = 'notStarted' | 'inProgress' | 'done';

export interface TopicProgress {
  status: TopicStatus;
  /** 0–100 */
  percent: number;
}

type ProgressMap = Record<string, TopicProgress>;

const KEY = 'nalarku.progress.v1';

function read(): ProgressMap {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

function write(map: ProgressMap) {
  try {
    localStorage.setItem(KEY, JSON.stringify(map));
  } catch {
    /* penyimpanan tidak tersedia (mode privat) — aplikasi tetap jalan */
  }
}

const EMPTY: TopicProgress = { status: 'notStarted', percent: 0 };

export function useProgress() {
  const [map, setMap] = useState<ProgressMap>(read);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) setMap(read());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const get = useCallback((id: string) => map[id] ?? EMPTY, [map]);

  const set = useCallback((id: string, value: TopicProgress) => {
    setMap((prev) => {
      const next = { ...prev, [id]: value };
      write(next);
      return next;
    });
  }, []);

  return { get, set };
}
