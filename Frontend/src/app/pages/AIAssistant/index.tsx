import { Assistant } from './Assistant';
import { InteractionLog } from './InteractionLog';

export const AIAssistant = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-8">
      {/* Task Processor - Takes full width on mobile, 2/3 on desktop */}
      <div className="xl:col-span-2">
        <Assistant />
      </div>

      {/* Interaction Log - Full width on mobile, 1/3 on desktop */}
      <div className="xl:col-span-1">
        <InteractionLog />
      </div>
    </div>
  );
};
