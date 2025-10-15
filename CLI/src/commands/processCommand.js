import inquirer from 'inquirer';
import { apiService } from '../utils/apiClient.js';
import { display } from '../utils/display.js';

export const processCommand = async (task = null) => {
  try {
    let taskToProcess = task;

    // If no task provided, prompt user
    if (!taskToProcess) {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'task',
          message: 'Enter the task for AI processing:',
          validate: input => input.trim() ? true : 'Task cannot be empty'
        }
      ]);
      taskToProcess = answers.task;
    }

    display.showInfo(`Processing: "${taskToProcess}"`);

    // Show loading indicator
    const spinner = ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'];
    let i = 0;
    const interval = setInterval(() => {
      process.stdout.write(`\r${spinner[i]} AI is processing your task...`);
      i = (i + 1) % spinner.length;
    }, 100);

    try {
      const response = await apiService.processTask(taskToProcess);
      clearInterval(interval);
      process.stdout.write('\r' + ' '.repeat(50) + '\r');
      
      display.showSuccess('Task processed successfully!');
      display.showResponse(response);
    } catch (error) {
      clearInterval(interval);
      process.stdout.write('\r' + ' '.repeat(50) + '\r');
      throw error;
    }

  } catch (error) {
    display.showError(`Failed to process task: ${error.message}`);
  }
};