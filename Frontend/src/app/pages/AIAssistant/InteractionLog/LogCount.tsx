interface LogCountProps {
  count: number;
}

export const LogCount = ({ count }: LogCountProps) => (
  <div className="mt-4 text-center text-sm text-gray-500 border-t pt-3">
    {count} interaction{count !== 1 ? 's' : ''} logged
  </div>
);
