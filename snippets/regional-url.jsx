export const RegionalUrl = ({ value, block = false, label }) => {
  const [origin, setOrigin] = useState(null);
  const [copyState, setCopyState] = useState('Copy');
  useEffect(() => {
    setOrigin(window.location.hostname === 'eu.uxia.app' ? 'https://eu.uxia.app' : 'https://platform.uxia.app');
  }, []);
  if (!origin) return <span aria-busy="true">…</span>;
  const text = value.split('https://platform.uxia.app').join(origin);
  if (label) return <a href={text}>{label === 'platform.uxia.app' ? new URL(origin).hostname : label}</a>;
  if (!block) return <code>{text}</code>;
  return (
    <div className="my-4 rounded-xl border border-gray-200 p-4 dark:border-gray-700">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs">{origin === 'https://eu.uxia.app' ? 'EU' : 'US'}</span>
        <button type="button" aria-label="Copy regional configuration" onClick={async () => {
          try { await navigator.clipboard.writeText(text); setCopyState('Copied'); }
          catch { setCopyState('Select and copy the text'); }
        }}>{copyState}</button>
      </div>
      <pre className="overflow-x-auto"><code>{text}</code></pre>
    </div>
  );
};
