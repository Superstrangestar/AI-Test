import { Command } from 'commander';
import { processCommand } from './commands/processCommand.js';
import { logsCommand } from './commands/logsCommand.js';
import { interactiveCommand } from './commands/interactiveCommand.js';

const program = new Command();

program
  .name('ai-assist')
  .description('CLI interface for AI Assistant')
  .version('1.0.0');

// Process command
program
  .command('process')
  .description('Process a task through AI')
  .argument('[task]', 'The task to process')
  .action(async (task) => {
    await processCommand(task);
  });

// Logs command
program
  .command('logs')
  .description('Manage interaction logs')
  .option('-c, --clear', 'Clear all logs')
  .option('-i, --id <id>', 'Show specific log by ID')
  .action(async (options) => {
    if (options.clear) {
      await logsCommand.clear();
    } else if (options.id) {
      await logsCommand.showById(options.id);
    } else {
      await logsCommand.show();
    }
  });

// Interactive mode
program
  .command('interactive')
  .description('Start interactive mode')
  .alias('i')
  .action(async () => {
    await interactiveCommand();
  });

// Default command (interactive)
program
  .action(async () => {
    await interactiveCommand();
  });

// Error handling
program.showHelpAfterError();

// Start CLI
program.parse();