import inquirer from 'inquirer';
import chalk from 'chalk';
import { apiService } from '../utils/apiClient.js';
import { display } from '../utils/display.js';

export const logsCommand = {
  // Show all logs
  async show() {
    try {
      const logs = await apiService.getLogs();

      if (logs.length === 0) {
        display.showInfo('No logs found.');
        return;
      }

      console.log(chalk.bold(`\n📋 Interaction Logs (${logs.length} total)\n`));

      logs.forEach((log, index) => {
        display.showLog(log, index);
      });
    } catch (error) {
      display.showError(`Failed to fetch logs: ${error.message}`);
    }
  },

  // Clear logs
  async clear() {
    try {
      const { confirm } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirm',
          message: 'Are you sure you want to clear all logs?',
          default: false,
        },
      ]);

      if (confirm) {
        await apiService.clearLogs();
        display.showSuccess('All logs cleared successfully!');
      } else {
        display.showInfo('Clear operation cancelled.');
      }
    } catch (error) {
      display.showError(`Failed to clear logs: ${error.message}`);
    }
  },

  // Show specific log
  async showById(id) {
    try {
      const log = await apiService.getLogById(id);
      display.showLog(log);
    } catch (error) {
      display.showError(`Failed to fetch log: ${error.message}`);
    }
  },
};
