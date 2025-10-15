import chalk from 'chalk';
import boxen from 'boxen';

export const display = {
  // Display AI response
  showResponse(response) {
    const boxOptions = {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'blue',
    };

    const content = `
${chalk.bold('Task:')} ${response.task}
${chalk.bold('Status:')} ${chalk.green(response.status)}
${chalk.bold('Result:')} ${response.result}
${chalk.bold('Timestamp:')} ${new Date(response.timestamp).toLocaleString()}
${chalk.bold('ID:')} ${response.id}
    `.trim();

    console.log(boxen(content, boxOptions));
  },

  // Display log entry
  showLog(log, index = null) {
    const prefix = index !== null ? chalk.dim(`${index + 1}. `) : '';
    console.log(`
${prefix}${chalk.bold('Task:')} ${log.task}
${chalk.bold('Status:')} ${log.status === 'completed' ? chalk.green(log.status) : chalk.yellow(log.status)}
${chalk.bold('Result:')} ${log.result}
${chalk.bold('Time:')} ${new Date(log.timestamp).toLocaleString()}
${chalk.dim('ID: ' + log.id)}
${chalk.gray('─'.repeat(50))}
    `.trim());
  },

  // Display error
  showError(message) {
    console.log(chalk.red('❌ Error:'), message);
  },

  // Display success
  showSuccess(message) {
    console.log(chalk.green('✅'), message);
  },

  // Display info
  showInfo(message) {
    console.log(chalk.blue('ℹ️'), message);
  }
};