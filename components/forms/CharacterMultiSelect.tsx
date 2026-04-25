"use client";

import { useMemo, useState } from "react";

type CharacterMultiSelectProps = {
  name: string;
  options: readonly string[];
  required?: boolean;
  label?: string;
  onSelectionChange?: (selected: string[]) => void;
};

export function CharacterMultiSelect({
  name,
  options,
  required,
  label,
  onSelectionChange,
}: CharacterMultiSelectProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [touched, setTouched] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q
      ? options.filter((o) => o.toLowerCase().includes(q))
      : options;
    return base.filter((o) => !selected.includes(o));
  }, [options, query, selected]);

  const value = selected.join(", ");
  const showError = Boolean(required && touched && selected.length === 0);

  function updateSelected(next: string[]) {
    setSelected(next);
    onSelectionChange?.(next);
  }

  return (
    <div>
      {label ? (
        <label className="mb-2 block text-sm font-bold text-kw-dark">
          {label}
        </label>
      ) : null}

      <input type="hidden" name={name} value={value} />

      <div className="rounded-2xl border border-kw-dark/15 bg-white p-3 focus-within:border-kw-red focus-within:ring-2 focus-within:ring-kw-red/15">
        <div className="flex flex-wrap gap-2">
          {selected.map((item) => (
            <button
              key={item}
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-kw-yellow/50 px-3 py-1 text-sm font-bold text-kw-dark"
              onClick={() => updateSelected(selected.filter((v) => v !== item))}
              aria-label={`Remove ${item}`}
            >
              <span className="truncate">{item}</span>
              <span className="text-kw-dark/60" aria-hidden>
                ×
              </span>
            </button>
          ))}

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="Select character(s)…"
            className="min-w-[180px] flex-1 bg-transparent px-2 py-2 text-sm text-kw-dark outline-none"
          />
        </div>

        {showError ? (
          <p className="mt-2 text-sm font-medium text-kw-red">
            Please select at least one character.
          </p>
        ) : null}

        <div className="mt-3 max-h-44 overflow-auto rounded-xl border border-kw-dark/10 bg-white">
          {filtered.length === 0 ? (
            <p className="px-4 py-3 text-sm text-kw-dark/60">No matches</p>
          ) : (
            <ul className="divide-y divide-kw-dark/10">
              {filtered.map((option) => (
                <li key={option}>
                  <button
                    type="button"
                    className="w-full px-4 py-3 text-left text-sm text-kw-dark hover:bg-kw-cream"
                    onClick={() => {
                      updateSelected([...selected, option]);
                      setQuery("");
                      setTouched(true);
                    }}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

