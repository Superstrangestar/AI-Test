import inquirer from 'inquirer';
import { processCommand } from './processCommand.js';
import { logsCommand } from './logsCommand.js';
import { display } from '../utils/display.js';

export const interactiveCommand = async () => {
  const choices = [
    { name: 'Process a new task', value: 'process' },
    { name: 'View all logs', value: 'logs' },
    { name: 'Clear all logs', value: 'clear' },
    { name: 'Exit', value: 'exit' }
  ];

  while (true) {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices
      }
    ]);

    switch (action) {
      case 'process':
        await processCommand();
        break;
      case 'logs':
        await logsCommand.show();
        break;
      case 'clear':
        await logsCommand.clear();
        break;
      case 'exit':
        display.showInfo('Goodbye! 👋');
        return;
    }

    console.log('\n');
  }
};